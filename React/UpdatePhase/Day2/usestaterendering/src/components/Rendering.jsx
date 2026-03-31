import React, { useState } from 'react'

const Rendering = () => {

  const [obj,setObj] = useState({name:"React",subject:"Node"})
  const [toggle,setToggle] = useState(false)

  const [showData,setShowData] = useState(false)
  const [nullsh , setNullsh] = useState(null)

const clicktochange = ()=>{
    setObj({...obj, name:"Nextjs", subject:"Nestjs"})
}


const handleclick = ()=>{
    setToggle(!toggle)
}


const change = ()=>{
    setShowData(!showData)
}

const nullshnew = ()=>{
    setNullsh(100)
}

  return (
    <>
    <div className='bg-blue-500 text-white p-10'>
        <div className='bg-black flex justify-between p-10 rounded '>

            {/* Rendering method */}
            <div className='bg-amber-300 flex flex-col gap-2 p-2 rounded text-black'>
                Rendering Methods
            <div className='text-black'>
                <ol>
                    <li>{obj.name}</li>
                    <li>{obj.subject}</li>
                </ol>
                 <button className='bg-white rounded p-1 text-black w-20' onClick={clicktochange}>{toggle?"ADD":"EDIT"}</button>
            </div>
            

            </div>

            {/* Ternary operator */}
            <div>
                <h1 className='mb-3'>Ternary Operator</h1>
                <div>
                    <button onClick={handleclick} className='bg-white mb-3 rounded text-black p-2 w-40'>{toggle?"Click to Close":"Click to View"}</button>
                     {toggle? <div className='bg-white p-3 rounded text-black'>
                        <p>React lets you build user interfaces out of individual
                             pieces called components.</p>
                    </div>:<div className='bg-amber-400 p-3 rounded text-black'>
                        <p>React lets you build user interfaces out of individual
                             pieces called components.</p>
                    </div>}
                </div>
            </div>

            {/* Optional rendering */}
            <div><h1 className='mb-3'>Optional Rendering</h1>
                <div>
                    <button onClick={change} className='bg-white mb-3 rounded text-black p-2 w-40'>{toggle?"Click to Close":"Click to View"}</button>
                     {showData && <div className='bg-white p-3 rounded text-black'>
                        <p>React lets you build user interfaces out of individual
                             pieces called components.</p>
                    </div>}
                </div></div>



                {/* Nullish values here */}
            <div>
                <h1>Nullish value</h1>
                <div>
<button onClick={nullshnew} 
className='bg-white mb-3 rounded text-black p-2 w-40'>
    {toggle?"Click to close":"Click to view"}</button> {nullsh ??<div>{"This is Nullish"} </div>  } 
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Rendering