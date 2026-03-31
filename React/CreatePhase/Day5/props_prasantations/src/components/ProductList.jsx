import React from 'react'

const ProductList = ({datas}) => {

    //console.log(datas);
    
  return (
   <>
  <div className='bg-black text-white flex gap-20 p-10 h-100'>
     {datas.map((e,i)=>(

    <div key={i+1} className='bg-white p-3 text-3xl flex flex-col gap-5 justify-center text-black rounded w-100 h-50'>
        <h1>{e.name}</h1><p>{e.course}</p>
        <p>{e.fees}</p>
        <button className='bg-amber-400  rounded p-1'>Buy Now</button>
    </div>

   ))}
  </div>
   </>
  )
}

export default ProductList