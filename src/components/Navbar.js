import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import UserAccount from './UserAccount';

function Navbar(props) {
    const Navigate = useNavigate();
    const location = useLocation();
    const { showAlert } = props;

    const logOut = (e) => {
        localStorage.removeItem('token')
        Navigate('/login-signup')
        showAlert('success', 'Logged Out Successfully');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">iNoteBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/login-signup' ? 'active' : ''}`} to="/login-signup">Login-Signup</Link>
                        </li>
                    </ul>
                   { !localStorage.getItem('token') ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary " type="submit">Search</button>
                    </form> : 
                    <div className='d-flex'> 
                        <button className="btn btn-outline-primary"><Link to="/useraccount"><i className="fa-solid fa-user-tie"></i></Link></button>
                        <button className="btn btn-outline-primary mx-2" onClick={logOut} type="submit">Log-out</button></div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
