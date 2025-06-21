import React, { useEffect } from 'react';
import Note from './Notes';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

  const Navigate = useNavigate();
  const { showAlert } = props;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      showAlert("Please login first", "warning");
      Navigate('/login-signup');
    }
  }, [showAlert, Navigate]);


  return (
    <div>
      <AddNote showAlert={showAlert} />
      <Note showAlert={showAlert} />
    </div>
  );
}
