
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {

const [formData,setFormData] = useState({email:"",password:""})

const navigate = useNavigate()

const handlechange = (e)=>{
  const {name,value} = e.target

  setFormData({...formData,[name]:value})
}


  const handleclick = ()=>{

  console.log(`${formData.email}, ${formData.password}`);
  


  if(formData.email === "admin@gmail.com" &&formData.password === "1234" ){
    navigate("/dashboard")
  }else{
    alert("Invalid Credentials")
  }






  }
  return (
    <>
    <div>
      <input type="email" onChange={handlechange} name="email" placeholder="Email" />
      <input type="password" onChange={handlechange} name="password" placeholder="Password"   />
      <button onClick={handleclick}>Login</button>
    </div>
    </>
  )
}

export default Login