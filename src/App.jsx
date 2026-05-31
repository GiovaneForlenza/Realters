import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='border border-red-500 flex items-center justify-center flex-col'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App