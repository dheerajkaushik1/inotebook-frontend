import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

function NoteItem(props) {
    const context = useContext(NoteContext);
    const { deleteNote, editNote } = context;
    const { note, upDateNote, showAlert } = props;
    return (
        <>
        <div className="col-md-4">
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title} ({note.tag})</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-trash mx-2" onClick={() => {
                            deleteNote(note._id)
                            showAlert("danger","Note Deleted Successfully");
                            }}></i>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={() => {
                            upDateNote(note)
                            }}></i>
                    </div>
            </div>
            </div>
        </>
    )
}

export default NoteItem
