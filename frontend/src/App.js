import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/auth/Login'
import { Signup } from './pages/auth/Signup'
import { Home } from './pages/Home/Home'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
