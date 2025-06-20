import React, { useRef, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css';

function Login(props) {
    const { showAlert } = props;
    let Navigate = useNavigate();
    const containerRef = useRef(null);
    const [Credentials, setCredentials] = useState({ email: "", password: "", name: "" });

    useEffect(() => {
        const container = containerRef.current;

        const signUpButton = container.querySelector('#signUp');
        const signInButton = container.querySelector('#signIn');

        signUpButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });

        // Cleanup event listeners when component unmounts
        return () => {
            signUpButton.removeEventListener("click", () => { });
            signInButton.removeEventListener("click", () => { });
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        })
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token', json.authToken);
            Navigate('/');
        
            props.showAlert('success', 'Logged In Successfully');
        } else{
            props.showAlert('danger', 'Invalid Credentials');
        }
    }

    const handleSubmitSU = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const reponse = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        const json = await reponse.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token', json.authToken);
            Navigate('/');

        props.showAlert('success', 'Account Created Successfully');
        } else{
            props.showAlert('danger', 'Invalid Credentials');
        }
    }

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="login-page">
            <div className="container" id="container" ref={containerRef}>
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSubmitSU}>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" name='name' id='Sname' value={Credentials.name} onChange={onChange} autoComplete='name' required/>
                        <input type="email" placeholder="Email" name='email' id='Semail' value={Credentials.email} onChange={onChange} autoComplete="email" required/>
                        <input type="password" placeholder="Password" name='password' id='Spassword' value={Credentials.password} onChange={onChange} autoComplete='current-password'required minLength={5}/>
                        <button>Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Login here</h1>
                        <input type="email" name='email' id='email' placeholder="Email" autoComplete="email" />
                        <input type="password" name='password' id='password' placeholder="Password" autoComplete='current-password' />
                        <a href="/">Forgot your password?</a>
                        <button >Login</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
