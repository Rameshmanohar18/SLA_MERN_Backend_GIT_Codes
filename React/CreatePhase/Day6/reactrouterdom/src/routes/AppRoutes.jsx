
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contect from '../pages/Contect'
import Help from '../pages/Help'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
          <Route path='/contect' element={<Contect/>} />
           <Route path='/help' element={<Help/>} />
       
    </Routes>


  )
}

export default AppRoutes