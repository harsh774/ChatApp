import React, { Component, useContext }  from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from './AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
