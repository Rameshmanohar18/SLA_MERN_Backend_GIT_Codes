import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Primitive from './Primitive'
import Home from './Home'
import NoNPrimitive from './NoNPrimitive'

import UserList from './UserList'

const AppRoute = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
     <Route path='/primitive' element={<Primitive/>} />
       <Route path='/non' element={<NoNPrimitive/>} />
      <Route path='/pros' element ={<UserList/>} />
    </Routes>
    
    </>
  )
}

export default AppRoute