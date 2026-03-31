import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Rendering from './Rendering'
import FormHandling from './FormHandling'

const AppRoute = () => {
  return (
    <Routes>
     <Route path='/' element={<Rendering/>} />
      <Route path='/formhandling' element={<FormHandling/>} />

    </Routes>
  )
}

export default AppRoute