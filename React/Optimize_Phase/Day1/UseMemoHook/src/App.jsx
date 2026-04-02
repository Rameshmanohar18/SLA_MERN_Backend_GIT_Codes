import { useCallback,  useState } from "react";
import Box from "./Box";



const App = () => {
  

  const [number,setNumer] = useState(0)
  const [theme,setTheme]  = useState(false)

//  const expensiveFunction = (num)=>{

//     for(let i=0; i<=1;i++){
//       console.log('running...');
      
//       console.log(i);
      
//     }
    
//     return num*2
    

//  }

 const doubethenummber = useCallback((num)=>{

   return num*2

 },[])


 const handlechnage = (e)=>{

  setNumer(e.target.value)

 }

const themeChnage =()=>{

  setTheme(!theme)

}


// const handleClick = ()=>{
//   console.log('running');
  
// }

  return (
  <>

  <div className={theme?"bg-black text-white p-2":"bg-yellow-300 text-black p-2"}>

  <h1>Nav</h1>
  <button onClick={themeChnage} className="bg-white text-black p-1 rounded w-30">Theme Change</button>
  </div>
    <div className="p-10">
      <h1>{doubethenummber}</h1>
      <input className="bg-black text-white p-1 w-50" type="text" onChange={handlechnage} />
    </div>

   <Box values ={{}} />


  </>
  )
}

export default App

// import { useEffect, useMemo, useState } from "react"


// const App = () => {

//   const [getDatas,setGetDatas] = useState([])
//   const [serch,setSerach] = useState("")


//   useEffect(()=>{


//   })

//  const fetchdata = async(search)=>{

//     const getData = await fetch("https://dummyjson.com/users")
//     const res = await getData.json()
    
//     setGetDatas(res.users)


//     return getDatas.filter((e)=>e.firstName === search)

       

//  }

//  useEffect(()=>{
//   (async ()=>{
//     fetchdata()
//   })()
//  },[])

//  const handleChange = (e)=>{
// setSerach(e.target.value)
//  }
//   return (
//    <>
//    <h1>API Call</h1>

//    <input type="text" onChange={handleChange} />
//    </>
//   )
// }

// export default App