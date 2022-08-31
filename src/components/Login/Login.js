import React from 'react';

import './Login.css';

function Login () {
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form>
                <label>
                    <span>Username</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login