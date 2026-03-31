import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-black  text-white p-3  flex justify-between items-center'>
        <div className='mx-20'>
            LOGO
        </div>
        <div className='mx-20 flex gap-10'>
           <Link to={"/"} >Home</Link>
           <Link to={"/primitive"} >Primitive</Link>
           <Link to={"/non"} >Non - Primitive</Link>
           <Link to={"/pros"} >Props</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar