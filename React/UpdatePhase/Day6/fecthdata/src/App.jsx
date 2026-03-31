import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FetchDatasw from './components/FetchDatasw'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/assinment1" element={<FetchDatasw/>} />
    </Routes>
    </>  )
}

export default App