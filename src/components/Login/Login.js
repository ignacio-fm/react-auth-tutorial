import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login({ setToken }) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async event => {
        event.preventDefault();
        const token = await loginUser({
            username,
            password
        })
        setToken(token)
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Username</span>
                    <input type="text" onChange={event => setUsername(event.target.value)}/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" onChange={event => setPassword(event.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login