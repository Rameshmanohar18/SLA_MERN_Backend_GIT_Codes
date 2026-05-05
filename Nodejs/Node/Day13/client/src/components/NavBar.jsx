import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div style={{backgroundColor:"brown",color:"white",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"  }}>
        <div>LOgo</div>
        <div style={{display:"flex",gap:"20px",color:"white"}}>
            <Link style={{color:"white"}} to="/">Login</Link>
            <Link style={{color:"white"}} to="/register">Register</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
