// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import React, { useCallback, useMemo, useState } from 'react'

import { useState } from "react"

// const App = () => {
// console.log('Component Running...');

//   const [theme,setTheme] = useState(false)

//   const [number,setNumber] = useState(0)
 
// const handletheme = ()=>{
// setTheme(!theme)
// }

// const handleChange = (e)=>{

// setNumber(Number(e.target.value))

// }


// const arr = [1,2,3,4,5,6]

// const search = (data)=>{

//   for (let index = 0; index < 10000; index++) {
//     console.log(index);
    
    
//   }

//   const fileter = arr.filter((e)=>e).includes(data)

//   console.log('data',fileter);
  

//   return fileter
 
// }

// const datasfileter = useMemo(()=>{
//    return  search(number)
// },[number])



// const datanew = useCallback(()=>{

//   return search(number)

// },[number])


//   return (
//    <>
   
//     <div className={theme?"bg-amber-300 text-black p-3":"bg-black text-white p-3"}>
//       <button className='bg-black text-white p-1 w-30' onClick={handletheme}>Change Theme</button>
//     </div>


//     <div className='p-10'>
//       <p>{arr}</p>
//        <h1>{datasfileter?"Is it there":"No Its not there"}</h1>
//       <input type="text" className='bg-black text-white p-2 w-50' onChange={handleChange} />
//       <button className='bg-black text-white p-1 w-40 m-10' onClick={datanew}>Submit</button>
//     </div>
//    </>



//   )
// }

// export default App




import { useEffect } from "react"

const App = () => {


  const [datas,setdatas] = useState([])
  const [search,setSearch] = useState("")

   useEffect(()=>{
     const fetchdata = async()=>{
  try{
    const fetcgdatas = await fetch("https://dummyjson.com/products?limit=30")
    const res =await fetcgdatas.json()
     setdatas(res.products)
  }catch(err){
   console.log(err);
  }
 }
   
fetchdata()
}
   ,[])


 const handlechange = (e)=>{

   
setSearch(e.target.value)
 }



 const filter = datas.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))

console.log(filter);

  return (
   <>
   
   <div className="bg-amber-300 p-10">
      <input type="text" className="bg-white border-2 p-1 w-50" onChange={handlechange} placeholder="Enter the Title" />
    </div>

    <div className="bg-amber-300 p-10 h-100 flex justify-center items-center gap-10">
     

    

     {filter.map((e)=>(

      <div key={e.id} className="bg-green-300 text-black p-2 w-50 h-90 rounded">
        <img src={e.images} alt="" width={100} height={100} className="rounded-2xl object-cover" />
         <h1 className="my-2">{e.title}</h1>
         <p className="my-2">{e.price}</p>
         <button className="bg-black text-white p-1 w-40 rounded">Buy Now</button>
      </div>

     ))}


      
    </div>
   </>
  )
}

export default App