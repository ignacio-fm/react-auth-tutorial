import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
}

function App() {
  const token = getToken()

  // const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='app-container'>
      <h1>Application</h1>
      <p>"How to add login authentication to React applications" Tutorial by DigitalOcean.com</p>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/preferences' element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
