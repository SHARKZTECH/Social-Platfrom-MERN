import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Route,Routes,BrowserRouter as Router ,Navigate} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import {useSelector} from "react-redux"

function App() {
    const {userInfor}=useSelector((state)=>state.login);


  return (
    <div className='m-2'>
      <Routes>
      <Route exact path="/" element={userInfor ? <Navigate to={'home'} /> : <Navigate to={'login'}/>}/>
      <Route path="/home" element={userInfor? <Home/> : <Navigate to={'../login'}/>}/>
      <Route path="/register" element={userInfor ?<Navigate to={'../home'}/> :<Register/>}/>
      <Route path="/login" element={userInfor ?<Navigate to={'../home'}/> :<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
