import React, { useState } from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

function AddNote(props) {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const {showAlert} = props;

    const [note, setNote] = useState({title: "", description:"", tag: ""});

    const HandleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description:"", tag: ""});
        showAlert("success","Note Added Successfully");
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className='my-4'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="form-control" id="desc" name='description' value={note.description} rows={6} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange}/>
                </div>
                <button type="submit" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary my-2" onClick={HandleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
