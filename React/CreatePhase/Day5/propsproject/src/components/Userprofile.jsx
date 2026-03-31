import React from 'react'

const Userprofile = (props) => {
    console.log(props);
    
const {colors, passdata} = props

// const handleChange = (e)=>{


//     const datas = e.target.value

//     alert(datas)

// }


  return (
   <>
   

   <div className='bg-black text-white p-10 h-20'>
    <input type="text" className='bg-white text-black'  placeholder='Search' />
   </div>


<div className='flex p-10 justify-around items-center' style={{backgroundColor:colors}}>
    {passdata.map((e,i)=>(

<div key={i} className='bg-red-500 text-white flex p-5 w-50 h-75 flex-col gap-10'>
  <h1>{e.name}</h1>
  <p>{e.batch}</p>
  <p>{e.moblie}</p>
  <ul className='p-3 text-black flex w-40 gap-3 justify-center'>{e.skills.map((l,i)=>(
    <li className='bg-black p-1 text-center w-50 h-10 rounded text-white' key={i}>{l}</li>
  ))}</ul>
</div>
    
    
))}
</div>

   </>

  )
}

export default Userprofile