const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');



// Route 1 : get all the notes using: GET "/api/notes/fetchallnotes".     login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {

        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error in adding note ");
    }

})


// Route 2 : get all the notes using: POST "/api/notes/addnote".     login required
router.post('/addnote', fetchuser, [
    body('title', "Enter a Valid Title").isLength({ min: 2 }),
    body('description', " Description must be atleast 7 characters").isLength({ min: 7 }),

], async (req, res) => {

    try {

        const { title, description, tag } = req.body;

        //  if there are errors , return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()

        res.json(saveNote)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error in adding note ");
    }
})

//  Route 3 : Update and existing the note using: PUT "/api/notes/updatenote".     login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    try {

        const { title, description, tag } = req.body;

        //  create  a new note object
        const newNote = {};
        if (title) {
            newNote.title = title
        };

        if (description) {
            newNote.description = description
        };

        if (title) {
            newNote.tag = tag
        };


        // Find the note to be updated and upate it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send({ error: "Note Not Found" })
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send({ error: "Not Allowed" });
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error in adding note ");
    }

})



// Route 4 : Delete the existing note : DELETE "/api/notes/deletenote".     login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        const { title, description, tag } = req.body;

        // Find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send({ error: "Note Not Found" })
        }

        // Allow Deletion on if user owns this note

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send({ error: "Not Allowed" });
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ Success: "Note has been Deleted Succesfully ", note: note });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error in adding note ");
    }

})

module.exports = router