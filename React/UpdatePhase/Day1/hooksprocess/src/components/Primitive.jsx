import React,  { useState } from "react"

const Primitive = () => {
 console.log('this is running...');
 
  const [heading,setHeading] = useState(0)

  
  const clicktochange = ()=>{
    setHeading(heading+1)
  }




// Variable just store temporary and it doesnot re-rendering
  // Below code is for the Pure js implementation:- 
  // let heading =0;
  // const clicktochange = () =>{
  //   heading ++;
  //   console.log(heading)
  //   const counter =  document.getElementById("heading")
  //    counter.innerHTML= heading; 
  // }

  


  return (
    <>
    <div className='bg-blue-700 text-white p-10 flex flex -col gap-3 justify-center items-center'>
        <h1>{heading}</h1>
        {/* <h1 id="heading" ></h1> // Pure js implementations*/}  

        <button className='bg-black rounded text-white p-1' onClick={clicktochange}>Click to change</button>
    </div>

    
    </>
  )
}

export default Primitive




