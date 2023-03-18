import React, { Component, useContext }  from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './Contexts/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectedRoute>
            <Home/>
            </ProtectedRoute>
            } />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
