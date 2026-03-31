import  { useState } from 'react'

const NoNPrimitive = () => {
  
    const [data,setData] = useState({name:"React",subject:"node"})
   
    const [arr,setArr] = useState([1,2,3,4,5,6])

    const change = ()=>{

        setData({...data, name:"Node",subject:"React"})

    }

    const handleChange = ()=>{
      
        const fileter = arr.filter((e)=> e%2===0)

        setArr(fileter)
    }
   
  return (
   <>
    <div className='bg-blue-400 h-100  text-whitep-10 flex justify-center items-center flex-col'>
        <div className='bg-white p-8 rounded'>
        <h1>{data.name}</h1>
        <h1>{data.subject}</h1>

        <button onClick={change}  className='bg-black p-1 text-white rounded'>Click to Update</button>
        </div>
    </div>

    <div className='bg-green-600 text-white p-10'>
        <h1>{arr}</h1>
        <button onClick={handleChange} className='bg-black p-1 text-white rounded'>Click to change</button>
    </div>
   </>
  )
}

export default NoNPrimitive