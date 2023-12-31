import React, { useState, useContext } from 'react'
import NoteContext from "../Context/notes/NoteContext";


const AddNote = (props) => {

  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setnote] = useState({ title: "", description: "", tag: "" })

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" })
    props.showAlert("Note Added Successfully", "success");
  }


  const onChange = (e) => {
    setnote({ ...note, [e.target.name]:e.target.value })
  }

  return (
    <>

      <div className="container my-3" style={{ fontFamily: "'Edu SA Beginner', cursive" }}>
 
          < h1 className='text-center' style={{ color: "#05053e" }}>Create a new Note </ h1>
          <div className="container my-3">
            <form action=''>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />

              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" value={note.description} id="description" name='description' onChange={onChange} minLength={5} required />
              </div>

              <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" value={note.tag} id="tag" name='tag' onChange={onChange} minLength={5} required />
              </div>

              <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>

            </form>

          </div>
        
      </div>
    </>
  )
}

export default AddNote; 