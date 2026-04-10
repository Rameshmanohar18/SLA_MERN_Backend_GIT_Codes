
import React, { useEffect, useRef, useState } from "react"

const App = () => {

const inputRef = useRef(null);
const showRef = useRef(null);

const [showData, setShowData] = useState(null);

useEffect(()=>{
  const data = localStorage.getItem("data");
 setShowData(data)



},[showData]  )


const handleCLick = () =>{
  console.log(inputRef.current.value)
  setShowData(inputRef.current.value)
  inputRef.current.focus()


  const data = inputRef.current.value;
  localStorage.setItem("data", data)

  // alert("saved successfully ")


  // showRef.current.innerHTML = inputRef.current.value;
  showRef.current.innerHTML = inputRef.current.value("Successfully da")
  showRef.current.style.color = "Red"
} 

  return (

<>
<div>
  UseRef Hook

  <input type="text" ref={inputRef}  value={showData}  onChange={handleCLick} />
  <button onClick={handleCLick}> Submit</button>
  <p> {showData} </p>
  <p ref={showRef}></p>           


  {/*  */}
</div>
</>
  )
}

export default App