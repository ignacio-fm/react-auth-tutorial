import React, { useState } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';

function App() {
  
  const [token, setToken] = useState();

  if (!token) {
    console.log(token)
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
