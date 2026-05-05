import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ProductedRoutes from "./routes/ProductedRoutes"


const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Login/>} />

     <Route path="/dashboard" element={<ProductedRoutes><Dashboard/></ProductedRoutes>} />
   </Routes>
   </>
  )
}

export default App
