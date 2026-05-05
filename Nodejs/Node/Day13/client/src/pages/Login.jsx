import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

 const [datasForm,setDatasForm] = useState({userEmail:"",userPassword:""})

 const handleChange = (e)=>{

  setDatasForm({...datasForm,[e.target.name]:e.target.value})

 }

 const handelClick = async(e)=>{

  e.preventDefault()

   try {

    const sendData  = await axios.post("http://localhost:5000/api/validation/login",datasForm)
    //console.log(sendData);
    
    // alert(sendData.data.users)

    if(sendData){

    setDatasForm({userEmail:"",userPassword:""})

    navigate("/dashboard")
   return
    }
   
    
   
   } catch (error) {

    alert(error.response.data.msg)
    
   }


 }

  return (
    <>
    <form onSubmit={handelClick}>
      
      <input type="email" name='userEmail' value={datasForm.userEmail} placeholder='Enter the Email' onChange={handleChange} />
      <input type="password" name='userPassword' value={datasForm.userPassword} placeholder='Enter the Password' onChange={handleChange} />
      <input type="submit" value={"Login"} />
    </form>
    </>
  )
}

export default Login
