import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {


    const navigate = useNavigate()
const [formData,setFormData] = useState({email:"",password:""})

 const handleChange = (e)=>{

    setFormData({...formData,[e.target.name]:e.target.value})

 }

const handelSubmit = async (e)=>{

e.preventDefault()
    try {

        const setdata = await axios.post("http://localhost:5000/api/auth/login",formData)
         
        alert(setdata.data.msg)
        
        setFormData({email:"",password:""})

        localStorage.setItem("jwttoken",setdata.data.token)
        navigate("/dashboard")

        
    } catch (error) {

        alert(error.response.data.msg)
        
    }

}


  return (
   <>
   <form onSubmit={handelSubmit}> 
    <input type="email" name="email" placeholder="Enter the Email" onChange={handleChange} />
    <input type="password" name="password" placeholder="Enter the Password" onChange={handleChange} />
    <input type="submit" value={"Login"}/>
   </form>
   </>
  )
}

export default Login
