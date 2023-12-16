import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/Registration';
import Login from './components/Login';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} /> 
        <Route path="/registration" element={<Registration />} />
          
        
      </Routes>
    </BrowserRouter>
    </>
      
  )
}

export default App ;