import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

 const [datasForm,setDatasForm] = useState({userName:"",userEmail:"",userPassword:""})

 const handleChange = (e)=>{

  setDatasForm({...datasForm,[e.target.name]:e.target.value})

 }

 const handelClick = async(e)=>{

  e.preventDefault()

   try {

    const sendData  = await axios.post("http://localhost:5000/api/validation/register",datasForm)
    
    alert(sendData.data.msg)
    setDatasForm({userName:"",userEmail:"",userPassword:""})
    navigate("/")

   } catch (error) {

    alert(error.response.data.msg)
    
   }


 }

  return (
    <>
    <form onSubmit={handelClick}>
      <input type="text" name='userName' value={datasForm.userName} placeholder='Enter the Name' onChange={handleChange} />
      <input type="email" name='userEmail' value={datasForm.userEmail} placeholder='Enter the Email' onChange={handleChange} />
      <input type="password" name='userPassword' value={datasForm.userPassword} placeholder='Enter the Password' onChange={handleChange} />
      <input type="submit" value={"Register"} />
    </form>
    </>
  )
}

export default Register
