import React, { useContext, useEffect, useRef,useState } from 'react'
import NoteContext from "../Context/notes/NoteContext";
import NoteItem from './NoteItem';

import { useNavigate} from 'react-router-dom';
import AddNote from './AddNote';
const Notes = (props) => {

  let navigate =useNavigate();

  const context = useContext(NoteContext);
  const { notes, getNotes ,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      
    getNotes()
    }
    else{
     navigate('/login');
    }
    // eslint-disable-next-line
  }, [])


  const ref = useRef(null)
  const refClose = useRef(null)


  const [note, setnote] = useState({id: "" ,etitle: "",edescription: "",etag: ""})
 
  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({id: currentNote._id, etitle: currentNote.title , edescription: currentNote.description, etag: currentNote.tag})
    
  }


  const handleClick =(e)=>{
    // console.log("updating the note" , note)
    editNote(note.id , note.etitle , note.edescription, note.etag)
      refClose.current.click();
      props.showAlert("Note is Updated Successfully", "info");
  
  }


  const onChange =(e)=>{
    setnote({...note, [e.target.name]:e.target.value})
  }
  

  return (
    <>
          <AddNote  showAlert={props.showAlert}/>
      <button type="button" ref={ref} className="btn btn-primary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo Modal
      </button>

      <div className="modal fade"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ fontFamily: "'Edu SA Beginner', cursive" }}>
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
                <form action=''className=" my-3" style={{ fontFamily: "'Edu SA Beginner', cursive" }}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label" >Title</label>
                    <input type="text" className="form-control" value={note.etitle}id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>

                  </div>

                  <div className="mb-3">
                 <label htmlFor="description" className="form-label" >Description</label>
                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange}minLength={5}  required/>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name='etag'  value={note.etag} onChange={onChange} minLength={5} required/>
                  </div>

                </form>
              
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose}className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.etitle.length<5 ||note.edescription.length<5} onClick={handleClick} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className=" row my-2" style={{ fontFamily: "'Edu SA Beginner', cursive" }}>
        < h2 className='text-center '> Your Notes</ h2>
        <div className="container mb-3">
        {notes.length === 0 && "No Notes to be Displayed"}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
        })}
      </div>
    </>
  )
}

export default Notes