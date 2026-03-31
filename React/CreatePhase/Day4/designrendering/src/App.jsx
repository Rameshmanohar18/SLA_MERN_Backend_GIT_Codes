

// const App = () => {


//  let heading = "React Learning"
//  const year    = 2026

// const box = true

// const datas = false


// const newdata = "I am the value of true"
  
//   return (
//     <>
//     <div className='bg-black p-5 text-white flex justify-between items-center'>
//        <div>
//         Logo
//        </div>

//        <div className='flex items-center gap-7'>
//         <a href="">Home</a>
//         <a href="">App</a>
//         <a href="">About</a>
//         <a href="">Register</a>
//         <button className='bg-white rounded text-black p-2 w-20 hover:bg-amber-400 hover:text-black'>Login</button>
//        </div>
//     </div>
    

//     <div className='bg-yellow-500 font- p-10 h-100 flex flex-col justify-center items-center gap-8'>
//       <h1 className='bg-white rounded-2xl p-2 border-0 font-bold font-mono'>{heading}</h1>
//       <p className='text-center p-3 text-2xl'>The process of react is very simple. the way you understand the flow you will learn the React Easy and fast</p>
//       <button className='bg-black rounded w-50 p-2 text-white'>Learn More</button>
//     </div>

// {/* condition?"true":"false" */}


//      {box?<div className="my-3 p-10 h-auto flex gap-10 justify-center">
//       <div className="bg-green-400 text-black w-150 h-60 rounded text-2xl flex justify-center items-center">
//       {heading}
//       </div>

//       <div className="bg-blue-500 text-black w-150 h-60 rounded text-2xl flex justify-center items-center">
//        Node - {year}
//       </div>
//     </div>:""}


// {/* optional rendering */}

// {/* condtion && what you want to show */}

//   {datas && <div className="bg-green-400 text-black w-150 h-60 rounded text-2xl flex justify-center items-center">
//       {heading}
//       </div>}
 

// {/* Nullish conlisins */}

// {newdata ?? <div className="bg-green-400 text-black w-150 h-60 rounded text-2xl flex justify-center items-center">
//       {newdata?"Normal Process":"Nullish value"}
//       </div>}

//     </>
//   )
// }

// export default App





// Non Primitive Data Type rendring 




const App = () => {

 const obj = {name:"React",subject:"Node"}

 const obj1 = {name:"Node",subject:"Js"}

const arr = ["HTML" , "CSS", "React", "Node"]


const arranew = [{name:"React",subject:"Node",skills:["Java" , "Spring", "React", "Node"]},{name:"Node",subject:"Js",skills:["HTML" , "CSS", "React", "Node"]},{name:"Js",subject:"New",skills:[]}]



  return (
    <>
    <div className="bg-amber-400 p-10 h-100 flex gap-10">
      <div className="bg-white rounded w-50 h-50 p-5 flex flex-col gap-5">
        <h1>{obj.name}</h1>
        <p>{obj.subject}</p>

        {arr.map((e,i)=>(
          <p key={i}>{e}</p>

        ))}

        <button className="bg-black p-2 w-30 rounded text-white">Book Now</button>
      </div>

          <div className="bg-white rounded w-50 h-50 p-5 flex flex-col gap-5">
        <h1>{obj1.name}</h1>
        <p>{obj1.subject}</p>
        <button className="bg-black p-2 w-30 rounded text-white">Book Now</button>
      </div>


     {arranew.map((e,i)=>(

<div className="bg-white rounded w-70 h-50 p-5 flex flex-col gap-5" key={i+1}>
        <h1>{e.name}</h1>
        <p>{e.subject}</p>

        <div className="flex gap-3">
          {e.skills.map((user,i)=>(

            <span className="bg-blue-500 text-white rounded-2xl w-30 text-center p-1" key={i}>{user}</span>

        ))}
        </div>
        <button className="bg-black p-2 w-30 rounded text-white">Book Now</button>
      </div>


     ))}




    </div>
    
    </>
  )
}

export default App





