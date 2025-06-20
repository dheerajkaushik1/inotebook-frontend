import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = process.env.REACT_APP_API_URL;
    const notesInitial = [

    ]

    const [notes, setNotes] = useState(notesInitial)


    //Get all notes 
    const getAllNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setNotes(json);
    }

    //Add a note
    const addNote = async (title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })

        const json = await response.json();


        const note = {
            "_id": "6853d1c2bb71dhe98775697879f848c394f4",
            "user": "68529c560ff94f3173399b9d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-06-19T09:00:50.038Z",
            "__v": 0
        };
        setNotes(notes.concat(note));

    }

    //Delete a note
    const deleteNote = async (id) => {
        //api call
        const resposne = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const newNote = notes.filter((note) => { return note._id !== id });
        setNotes(newNote);
        
    }

    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })

        const json = await response.json();


        setNotes(prevNotes =>
            prevNotes.map(note =>
                note._id === id ? { ...note, title, description, tag } : note
            )
        );


    }

    return (
        <NoteContext.Provider value={{ notes, editNote, deleteNote, addNote, getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;