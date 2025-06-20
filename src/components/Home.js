import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import Note from './Notes'; 
import AddNote from './AddNote';



export default function Home(props) {
  const {showAlert} = props;
  return (
    <div>
      <AddNote showAlert={showAlert}/>
      
      <Note showAlert={showAlert}/>
    </div>
  )
}

