import React, { useState } from 'react'

const FormHandling = () => {
 
    const [formData,setFormdata] = useState("")
    const [saevdata,setSavedata] = useState("")  
    const[error, setError] = useState(false)
  
  
  
  
    const handleChnage = (e)=>{
setFormdata(e.target.value)
  }

  const handleClick = ()=>{
    console.log(formData.length)
    if (formData.length <=10) {
  // alert("Must be a 10 Digit number")
  return setError("Must be a 10 Digit number")
} 
setSavedata(formData)   
// setFormdata(e.target.value)
  }


  return (
    <div className=' p-10 flex flex-col justify-center items-center'>
        <div>
            <img src="./1.png" width={100} alt="" />
        </div>
        <div className='border rounded border-gray-300 p-5'>
        <h1 className='text-2xl mb-3'>Sign in or create account</h1>
        <h4 className='font-bold'>Enter mobile number or email</h4>
       <div className='flex flex-col gap-3 mb-3'>
         <input onChange={handleChnage} className='border border-gray-300 p-1 w-100' type="text"  />

         {/* <h4> {formData}  </h4>  */}
         <p className='text-red-500'>{error?"Must be a 10 Digit number":""} </p>
         <h4>{saevdata}</h4>
        <button onClick={handleClick} className='bg-yellow-300 p-2 rounded-3xl w-100'>Continue</button>

        
       </div>
        <p className='font-light'>By continuing, you agree <br /> to Amazon's 
        <a href='' target='_black'>Conditions of Use</a> 
        and <a href="" target='_black'>Privacy Notice</a>.</p>
        <h4>Buying for work?</h4>
        <a href="">Create a free business account</a>
        </div>
    </div>
  )
}

export default FormHandling