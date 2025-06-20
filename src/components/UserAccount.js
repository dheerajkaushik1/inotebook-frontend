import React, {useEffect, useState} from 'react'

function UserAccount() {

    const [user, setUser] = useState({name: '', email: ''});

    const fetchUser = async () => {
       const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setUser({name: json.name, email: json.email, token: json.token});

    }

    useEffect(() => {
        fetchUser();
    },[])
  return (
    <div className="container my-4 p-4 bg-light rounded shadow">
      <h2 className="mb-4">My Account</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
        <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
      </ul>
    </div>
  )
}

export default UserAccount
