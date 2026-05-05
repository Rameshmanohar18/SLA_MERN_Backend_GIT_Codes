import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
const navigate = useNavigate()
const [getusers,setgetusers] = useState("")
  const getData = async ()=>{

       try {

        const getToken = localStorage.getItem("jwttoken")

        const getValue = await axios.get("http://localhost:5000/api/auth/dashboard",{headers:{Authorization:getToken}})


        //console.log(getValue);
        setgetusers(getValue.data.Users)
        
       } catch (error) {

        //alert("error",error)

        //console.log(error.response.data.msg);
        alert(error.response.data.msg)
        navigate("/")
        localStorage.removeItem("jwttoken")
        
       }

  }

  useEffect(()=>{
    (async()=>{getData()})()
  },[]) 

  return (
    <>
    <h1>DashBoard</h1>
    <p>Welcome!</p>
    <p>Email:{getusers.email}</p>
    </>
  )
}

export default Dashboard
