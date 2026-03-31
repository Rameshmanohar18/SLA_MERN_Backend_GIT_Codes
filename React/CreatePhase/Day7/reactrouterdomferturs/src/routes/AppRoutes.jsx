
import {Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import UseNavigator from '../components/UseNavigator'
import ReactCom from '../components/ReactCom'
import ParamsUrl from '../components/ParamsUrl'
import Login from '../components/Login'
import Register from '../components/Register'
import Layout from '../layout/Layout'

const AppRoutes = () => {
  return (
    <>
    <Routes>

      <Route element={<Layout/>}>
        <Route  path='/' element={<Home/>}   />
         <Route  path='/about' element={<About/>}   />
       
         <Route  path='/usenavigate' element={<UseNavigator/>}   />
         <Route  path='/reactcomponents' element={<ReactCom/>}   />
         <Route  path='/params/:productid' element={<ParamsUrl/>}   />

      </Route>

          
          <Route  path='/login' element={<Login/>}   />
         <Route  path='/register' element={<Register/>}   />



           
    </Routes>
    </>
  )
}

export default AppRoutes