import React, { useContext, useEffect, useRef,useState } from 'react'
import NoteContext from "../Context/notes/NoteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {

  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    // eslint-disable-next-line
    getNotes()
  }, [])


  const ref = useRef(null)

  const [note, setnote] = useState({etitle: "",edescription: "",etag: ""})
 
  const updateNote = (currentNote) => {
    ref.current.click();
    // setnote({etitle: currentNote.title , edescription: currentNote.description, etag: currentNote.tag})
    setnote({etitle: currentNote.title , edescription: currentNote.description, etag: currentNote.tag})
  }


  const handleClick =(e)=>{
    console.log("updating the note" , note)
      e.preventDefault();
  
  }


  const onChange =(e)=>{
    setnote({...note, [e.target.name]:e.target.value})
  }
  

  return (
    <>
      <AddNote />

      <button type="button" ref={ref} className="btn btn-primary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
                <form action=''className=" my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label" >Title</label>
                    <input type="text" className="form-control" value={note.etitle}id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} />

                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label" >Description</label>
                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name='etag'  value={note.etag} onChange={onChange} />
                  </div>

                </form>
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        < h2> Your Notes</ h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes