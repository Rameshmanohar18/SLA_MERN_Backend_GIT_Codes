import React, { useState } from 'react'
import Navbar from './components/Navbar';

const App = () => {


const [count, setCount] = useState(0);


  return (


<>
<h1>{count} </h1>
<Navbar/>
<button onClick={ ()=>setCount( count+1)  } >Add to count daa</button>

</>


  )
}

export default App