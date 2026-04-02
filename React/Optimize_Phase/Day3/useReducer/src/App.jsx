// import { useReducer } from "react"

import {  useReducer } from "react"

// import { useReducer } from "react"


// const initvalue = {count:0 }

// const reducer = (state,action)=>{

//    if(action.type==="INC"){

//     // console.log(state.count);
    
//     return {count:state.count+1}
//    }
//    if(action.type ==="DEC"){
//       return {count:state.count-1}
//    }
//    if (action.type === "RESET") {
//     return initvalue
    
//    }
 

// }


// const App = () => {

//   const [state,dispatch] = useReducer(reducer,initvalue)


//   return (
//    <>
//     <div>
      
    

//     <h1>Count:{state.count}</h1>
//     <button onClick={()=>dispatch({type:"INC"})}>Increce</button>
//     <button onClick={()=>dispatch({type:"DEC"})}>Decrece</button>
//     <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>


//     </div>
//    </>
//   )
// }

// export default App







// const initinput = {name:"",email:""}

// const handlereduce = (formData,action)=>{


//   if(action.type==="NAMEFEID"){
//     return {...formData,[action.feild]:action.values}
//   }


//   if(action.type==="RESET"){

//       //  console.log({...formData});
//      return  {name:"",email:""}
  
     
   
// }

// }

// const App = () => {


//   const [formData,dispatchForm] = useReducer(handlereduce,initinput)


//   return (
//     <div>
//       <input type="text" value={formData.name} onChange={(e)=>dispatchForm({type:"NAMEFEID",feild:"name",values:e.target.value})}  />
//       <input type="text" value={formData.email} onChange={(e)=>dispatchForm({type:"NAMEFEID",feild:"email",values:e.target.value})} />
//       <button onClick={()=>dispatchForm({type:"RESET"})}>Reset</button>
//       <h1>{formData.name}</h1>
//       <p>{formData.email}</p>
//     </div>
//   )
// }

// export default App


const theme = "red"

const reducer =(state,action)=>{
  

  if(action.type==="blue"){
    return {theme:action.type}
  }
  if(action.type==="red"){
    return {theme:action.type}
  }
  if(action.type==="yellow"){
    return {theme:action.type}
  }
  if(action.type==="reset"){
    return {theme:""}
  }


  
}

const App = () => {

  const [state,dispatch] = useReducer(reducer,theme)

  return (
    <>
    
   <button onClick={()=>dispatch({type:"blue"})}>Blue</button>
   <button onClick={()=>dispatch({type:"red"})}>Red</button>
   <button onClick={()=>dispatch({type:"yellow"})}>Yellow</button>
   <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
   

    <div style={{backgroundColor:state.theme}}>
      BOX
    </div>
    
    </>
  )
}

export default App