import React, { useEffect, useRef, useState, useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

function Note(props) {
    const Navigate = useNavigate();
    const context = useContext(NoteContext);
    const { notes, getAllNotes, editNote } = context;
    const { showAlert } = props;

    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });
    const ref = useRef(null);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAllNotes();
        } else {
            showAlert('danger', 'Please Login First');
            Navigate('/login-signup');
        }
    }, [getAllNotes, Navigate, showAlert]);

    const upDateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
    }

    const HandleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        ref.current.click();
        showAlert("success", "Note Updated Successfully");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ display: "none" }}>
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
                            <form className='my-4'>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edesc" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edesc" name='edescription' value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length < 5 || note.edescription.length < 5} className="btn btn-primary" onClick={HandleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2>Your Notes</h2>
                <div className="container">
                    {notes.length === 0 && "No notes to display"}
                </div>
                <div className='row'>
                    {notes.map((note) => {
                        return <NoteItem note={note} key={note._id} upDateNote={upDateNote} showAlert={showAlert} />
                    })}
                </div>
            </div>
        </>
    );
}

export default Note;
