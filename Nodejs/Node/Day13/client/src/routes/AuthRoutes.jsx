import React from 'react'
import NavBar from '../components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import DashBoard from '../pages/DashBoard'
const AuthRoutes = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
    </Routes>
    </>
  )
}

export default AuthRoutes
