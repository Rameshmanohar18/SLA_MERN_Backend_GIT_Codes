import { useState } from "react"

const App = () => {
 
  const [number,setNumber] = useState(0)

  const [data,setData] = useState("")
  
  const [skills,setSkills] = useState(["HTML", "CSS", "JS "    ])
   console.log("🌽 skills", skills);
   



   const handleChange = (e)=>{  
setData(e.target.value)
// console.log(e.target.value);
console.log(data);
  }

console.log("Before spread", skills);
  const addSkills = ()=>{
    setSkills([...skills, data])
    //setSkills((p)=>[...p, "Java Script"])
  }

  console.log("after spread", skills)


  const handleClick = ()=>{
    setNumber((prev)=>prev+1)
    setNumber((prev)=>prev+1)
    setNumber((prev)=>prev+1)
    setNumber((prev)=>prev+1)
    setNumber((prev)=>prev+1)
    setNumber((prev)=>prev+1)

    // setNumber(number+1)
    //  setNumber(number+1)
    //   setNumber(number+1)
  }




  return (
    <>
  <div className='bg-green-400 p-5'> 
   <h1 className='bg-white text-black w-50 mb-4 rounded p-2'> State Process <span className='bg-black text-white rounded p-2'>{number}</span> </h1>
   <button onClick={handleClick} className='bg-black w-30 text-white p-1 rounded-2xl'>Click to Add</button>
  </div>  
<div className='bg-black p-2'>
  -----
</div>
   <div className='bg-blue-400 p-5'> 
    <input className='bg-black mb-4 text-white p-1 mx-2 rounded' type="text" onChange={handleChange} />
    <input className='bg-black mb-4 text-white p-1 mx-2 rounded' type="text" onChange={handleChange} />
    <input className='bg-black mb-4 text-white p-1 rounded' type="text" onChange={handleChange} />
   <br />
   <button onClick={addSkills} className='bg-black w-50 text-white p-1 mb-5 rounded-2xl'>Click to Add Skills</button> 
   <div>
    

    {skills.map((e,i)=>(
    <p className='bg-white w-50 rounded text-center text-black p-1 mb-3' key={i}>{e}</p>
    ))}
    
   </div>
   
   
  </div> 

    </>
  )
}

export default App











// const App = () => {
//    const [data,setData] = useState("")
//    const [arr,setArr] = useState(["HTML","CSS","JS"])
    
//    console.log('origial',arr);
   
//    const handleclikc = ()=>{
     
//     // setArr([...arr,data])

//   setArr((prev) => [...prev, data])
//   setArr((prev) => [...prev, data])

//      console.log('after change',arr);
     
//   //  console.log('after data change',data);

//    }

//    const handlechange = (e)=>{

//      setData(e.target.value)

//    }
   
//   return (


//     <>
    
//     <input className="bg-black text-white p-2 mx-2" type="text" onChange={handlechange} />
//     <button className="bg-black text-white p-1" onClick={handleclikc}>Click to change</button>
    
//     <div>
    
//     {arr.map((e,i)=>(
//     <p key={i+1}>{e}</p>
//     ))}

     
//     </div>
    
//     </>
//   )
// }

// export default App