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


// import { useEffect, useRef, useState } from "react"

import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import DashBoard from "./components/DashBoard"

// import { useRef } from "react"

// const App = () => {
//   console.log('Running....');
  
//   const inputRef = useRef(null)
//   const showRef  = useRef(null)

//   const [showData,setShowData] = useState("")

//   useEffect(()=>{
//     const data = localStorage.getItem("Data")
//    setShowData(data)
//   },[showData])

//   const handleCLick = () => {
//     //alert(inputRef.current.value);
//     const data = inputRef.current.value
//     localStorage.setItem("Data",data)

    
//     showRef.current.innerHTML = "Successfully Saved"
//     // setShowData(inputRef.current.value)
//   }

//   return (
//     <>
//      <div>
//       UseRef

//       <input type="text" ref={inputRef}  value={showData} onChange={handleCLick} />
     

//       <p ref={showRef}></p>
//      </div>
//     </>
//   )
// }

// export default App







// import React, { useRef } from 'react'

// const App = () => {

// const type = useRef(null)

// // const handleClick = ()=>{

// //   type.current.innerHTML = "This is My Ref"

// // }

// const boxRef = useRef(true)


// const handlehide = ()=>{

// //console.log(boxRef.current);


//   if(boxRef.current.style.display=="none"){

//     boxRef.current.style.display = "block"

//   }else{
//     boxRef.current.style.display = "none"
//   }

// }


//   return (
//     <>
//     <p ref={type}></p>
//     <div ref={boxRef} style={{backgroundColor:"red",display:"none",justifyContent:"center",alignItems:"center",width:"120px",height:"120px",color:"white"}}>
//       UseRef Hide
//     </div>
//     <button onClick={handlehide}>Click to Hide</button>
//     </>
//   )
// }

// export default App







// const App = () => {
//   const data = 10

//   const handle = ()=>{

//     const heading = document.getElementById("heading")
//     heading.innerHTML = data+1

     

//   }
//   return (
    
//     <>
//     <h1 id="heading">{data}</h1>
//     <button onClick={handle}>Click Now</button>
//     </>

//   )
// }

// export default App




// const App = () => {

//  const inputRef = useRef(null)
//  const shwoRef = useRef(null)

//  const handleClick = ()=>{

//   const saveData = inputRef.current.value
//   // shwoRef.current.innerHTML = Number(saveData) + 2

//   if(Number(saveData)%2==0){
//     shwoRef.current.innerHTML = "Even Number"
//   }else{
//     shwoRef.current.innerHTML = "Odd Number"
//   }
   

//  }
//   return (
//     <>
//     <input onChange={handleClick} ref={inputRef} type="text" />
//     <button >Click Now</button>
//     <p ref={shwoRef}></p>
//     </>
//   )
// }

// export default App



// 




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  )
}

export default App