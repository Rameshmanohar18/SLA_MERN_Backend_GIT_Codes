
// import { useState } from "react"

 

// Old way to describe or Developing the form in react applications://
// const App = () =>{

//   const [formData, setFormData] = useState([])
//   const[ageData, setAgeData] = useState("");
//   const [emailData, setMailData] = useState("");

//   const [ saveData, setSaveData] = useState([]);

// const handleChange = (e) =>{
//   setFormData(e.target.value)
//   // setAgeData(e.target.value)
//   // setMailData(e.target.value)
//   console.log(e.target.value);
// }


// const handleAgeChange = (e) =>{
//   setAgeData(e.target.value)
// }



// const EmailChange = (e) =>{
//   setMailData(e.target.value)
// }

// const handleClick = () =>{
//   const userData = {name:formData, age: ageData, email:emailData   }
//   setSaveData(userData)
//   console.log(userData  )
// }



// return(
//     <>
//       <input type="text" placeholder="Enter your name" onChange={handleChange}/>
//         <input type="text" placeholder="Enter your age" onChange={handleAgeChange}/>
//             <input type="text" placeholder="Enter your EmailId" onChange={EmailChange}/>
//             <button onClick={handleClick}> Register here! </button>
//             <h1> {formData}-{ageData} -{emailData} </h1>
         
//             <p> {saveData.name} </p>
//                         <p> {saveData.age} </p>

//             <p> {saveData.email} </p>

//     </>
//   )
// }

// export default App;



import React, { useState } from 'react'


const App = () => {

  const [formdata,setFormData] = useState({name:"",age:"",email:""})

   const [saveData,setSaveData] = useState([])



  const handleChange = (e) =>{
// console.log(e);

   setFormData({...formdata, [e.target.name]:e.target.value})
  // setFormData(e.target.value)
  
  console.log(e.target.value)

  //  fromData = [useremail]:ythgsds

//  useremail:dssad,age:29,sadgfds:sfsdf

    
  }

  const handelSubmit = (e)=>{
  e.preventDefault()
console.log(formdata );
   setSaveData(formdata)
  }

  return (
   <>

   <form onSubmit={handelSubmit}>
  
    <input type="text" placeholder='Enter your name' name="name" value={formdata.name} onChange={handleChange} required />
    <input type="number" placeholder='Enter your age' name="age" value={formdata.age} onChange={handleChange} required />
    <input type="email" placeholder='Enter your email' name="email" value={formdata.email} onChange={handleChange}required />
    <input type="submit" value={"Register"} />
   </form>
     

     <h1>{saveData.name}</h1>
     <h1>{saveData.age}</h1>
     <h1>{saveData.email}</h1>
   </>
  )
}

export default App







// const App = () => {

// const [formData,setFromData] = useState({username:"",age:""})
// const [showData,setShowData] = useState({})
// const [error,setError] = useState(null)
//   const handleChange = (e)=>{

     
//     const inputname = e.target.name
//     const inputvalue = e.target.value

//   //  console.log(inputname,inputvalue);
   
// //  const datasave = {...formData, [inputname]:inputvalue}
//   // console.log(datasave);
  
// setFromData({...formData, [inputname]:inputvalue})

//   }


//   const handleSubmit = (e)=>{

//    //console.log(e);

//    e.preventDefault()
   
 
// //console.log(formData);

// if(!formData.username || formData.age){
//   return setError("Need To fill the Name")
// }

// if(formData.username || !formData.age){
//   return setError("Need To fill the Age")
// }

// setShowData(formData)



//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="username" onChange={handleChange}  />
//       <p style={{color:"red"}}>{error}</p>
//       <input type="number" name="age" onChange={handleChange}  />
//        <p style={{color:"red"}}>{error}</p>
//       <input type="submit"  />
//     </form>

//     <h1>{showData.username}</h1>
//     <h1>{showData.age}</h1>
    
//     </>
//   )
// }

// export default App