import React , {useContext} from 'react'
import NoteContext from "../Context/notes/NoteContext";



const NoteItem = (props) => {

const context = useContext(NoteContext);
  const {deleteNote} = context;

    const { note ,updateNote } = props;

    return (
        <div className='col-md-3 mb-3' >

            <div className="card" >
            <span className="position-absolute top-0 fs-6 translate-middle badge rounded-pill bg-info" style={{left: "75%",zIndex:"1" }}>
             {note.tag}
            </span>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">{note.title}</h4>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);
                            props.showAlert("Note is Deleted Successfully", "info");}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>

                    <p className="card-text">{note.description}</p>


                </div>
            </div>

        </div>
    )
}

export default NoteItem