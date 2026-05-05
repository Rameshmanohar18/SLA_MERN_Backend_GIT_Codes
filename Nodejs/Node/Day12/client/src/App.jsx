import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [fromData,setFromData] = useState({username:"",email:"",password:""})

  const handleChange = (e)=>{

    setFromData({...fromData,[e.target.name]:e.target.value})

  }

const handelSubmit = async(e)=>{

  e.preventDefault()
  try {
  
   const added = await axios.post("http://localhost:5000/api/auth/insert",fromData)
   console.log(added);
   
   alert(added.data.msg)
   alert(added.data.insertAuth.password) 
  setFromData({username:"",email:"",password:""})

  } catch (error) {

    alert(error.response.data.msg)
    
  }


}

  return (
  <>
  <form onSubmit={handelSubmit}>
   
   <input type="text" name='username'     value={fromData.username} placeholder='Enter the Name' onChange={handleChange} />
   <input type="email" name='email'       value={fromData.email} placeholder='Enter the email' onChange={handleChange} />
   <input type="password" name='password' value={fromData.password} placeholder='Enter the password' onChange={handleChange} />
   <input type="submit" value={"Regsiter"} />
  </form>
  </>
  )
}

export default App
