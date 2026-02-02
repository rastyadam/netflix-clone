import React from 'react'
import Home from './pages/home/home.jsx'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/home/login/login.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App