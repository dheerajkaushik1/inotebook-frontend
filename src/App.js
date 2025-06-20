import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import UserAccount from './components/UserAccount';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home showAlert={showAlert}/>} />
              <Route path='/useraccount' element={<UserAccount showAlert={showAlert}/>} />
              <Route path='/about' element={<About showAlert={showAlert}/>} />
              <Route path='/login-signup' element={<Login showAlert={showAlert}/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
