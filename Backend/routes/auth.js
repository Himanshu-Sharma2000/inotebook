const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');



const JWT_SECRET = 'helloeveryone@234';

// Route 1 : Create a user using: POST "/api/auth/createuser".    no login required
router.post('/createuser', [
    body('name', "Enter a Valid Name").isLength({ min: 3 }),
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password must be atleast 7 characters").isLength({ min: 5 }),
], async (req, res) => {
    let success=false;
    //  if there are errors , return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }


    try {
        // check Whether the user is already exits or not 
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: "Sorry a user with this Email already exits Plz try with a new email" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // creating a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
      // res.json(user)
        success=true;
      res.json({success , authtoken });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error ");
    }
})


// Route 2 : Authenticate  a user using: POST "/api/auth/login".    no login required
router.post('/login', [
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password can not be Blank ").exists(),
], async (req, res) => {
    let success=false;

    //    if there are errors , return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with current email" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success=false;
            return res.status(400).json({success, error: "Please try to login with correct password" });

        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success =true;
        res.json({ success ,authtoken });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// Route 3 : get loged in user details  using: POST "/api/auth/getuser".     login required
router.post('/getuser', fetchuser , async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");

      res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error by route 3");
    }

})
module.exports = router