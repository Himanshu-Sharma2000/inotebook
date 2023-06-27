import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const host= "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //Get all  a Notes
  const getNotes = async() => {
    //TODO  API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NGZkMzY0ODY2NTVjOTVkMTFkZGRiIn0sImlhdCI6MTY4NzgxMTc5MX0.S6aKjGPXeBuBa99UwDbiF79etqhRFLNKKUj5gjzeOio"
      }
    });
  const json =await response.json()
   console.log(json);
   setNotes(json)

  }
  //Add a Note
  const addNote = async(title, description, tag) => {
    //TODO  API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NGZkMzY0ODY2NTVjOTVkMTFkZGRiIn0sImlhdCI6MTY4NzgxMTc5MX0.S6aKjGPXeBuBa99UwDbiF79etqhRFLNKKUj5gjzeOio"
      },
      
      body: JSON.stringify({title,description,tag}),
    });
  

    console.log("Adding a note");
    const note = {
      "_id": "649kfdbfffer8660c95d11dde2",
      "user": "6494fd36486655c95d11dddb",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-06-23T02:04:47.335Z",
      "__v": 0
    };
    setNotes(notes.concat(note))

  }
 
  //Delete a Note 
  const deleteNote = async(id) => {

    //TODO  API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NGZkMzY0ODY2NTVjOTVkMTFkZGRiIn0sImlhdCI6MTY4NzgxMTc5MX0.S6aKjGPXeBuBa99UwDbiF79etqhRFLNKKUj5gjzeOio"
      }

    });
   const json= response.json();
   console.log(json);


    console.log("deleting the note with " + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }


  //Edit a Note
  const editNote = async (id, title,description,tag) => {

    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NGZkMzY0ODY2NTVjOTVkMTFkZGRiIn0sImlhdCI6MTY4NzgxMTc5MX0.S6aKjGPXeBuBa99UwDbiF79etqhRFLNKKUj5gjzeOio"
      },
      
      body: JSON.stringify({title,description,tag}),
    });
   const json= response.json();


    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id ===id)
      {
        element.title=title;
        element.description=description;
        element.tag=tag;
      }
    }

  }


  return (

    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote ,getNotes }}>
      {props.children}
    </NoteContext.Provider>


  )


}

export default NoteState;