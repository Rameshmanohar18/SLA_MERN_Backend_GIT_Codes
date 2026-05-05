import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

const [formValues,setFormValues] = useState({userName:"",email:"",mobile:"",age:""})
const [getDatas,setgetDatas] = useState([])

const fecthDatas = async ()=>{

   try {
    const getData = await axios.get("http://localhost:5000/api/crud/getData")

   //console.log(getData);
   setgetDatas(getData.data.datas)
    
   } catch (error) {

    alert(error.response.data.msg)
    
   }
   


}


useEffect(()=>{
  (async()=>{
    fecthDatas()
  })()
},[])



const handleChange = (e)=>{

setFormValues({...formValues,[e.target.name]:e.target.value})

}


const handleSubmit = async (e)=>{

  e.preventDefault()
  try {

    const dataInsert = await axios.post("http://localhost:5000/api/crud/insert",formValues)
    //console.log(dataInsert);
    alert(dataInsert.data.msg)
    setFormValues({userName:"",email:"",mobile:"",age:""})
    fecthDatas()
    
  } catch (error) {

    //console.log('Error',error.response.data.msg);
     alert(error.response.data.msg)
    
  }
}



  return (
   <>
   <form onSubmit={handleSubmit}>
    <input type="text" name="userName" value={formValues.userName} placeholder='Enter Your Name' onChange={handleChange}  />
    <input type="email" name="email" value={formValues.email} placeholder='Enter Your Email' onChange={handleChange}  />
    <input type="tel" name="mobile" value={formValues.mobile} placeholder='Enter Your Mobile' onChange={handleChange}  />
    <input type="number" name="age" value={formValues.age} placeholder='Enter Your Age' onChange={handleChange}  />
    <input type="submit" value={"Register"} />
   </form>

   <div className='bg-amber-100 p-10'>
    <div className='h-screen p-5  flex flex-wrap gap-12 '>
     
     {getDatas.map((e,i)=>(

      <div key={i} className='bg-black text-white p-2 flex flex-col rounded gap-3'>
        <h1>Name:{e.userName}</h1>
        <p>Email:{e.email}</p>
        <p>Age:{e.age}</p>
        <p>Mobile:{e.mobile}</p>
      </div>

     ))}

      
    </div>
   </div>
   </>
  )
}

export default App
