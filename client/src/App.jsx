import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <div className='m-2'>
      <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
