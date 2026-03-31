import React from 'react'

const Cards = () => {

    const obj = [
        {img:"./1.jpg",name:"Bloom Books",price:699,offerprice:399},
        {img:"./4.jpg",name:"Sprots Books",price:299,offerprice:999},
        {img:"./2.jpg",name:"Love Books",price:399,offerprice:299},
        {img:"./3.jpg",name:"Motivate Books",price:599,offerprice:699}]


  return (
    <>
    <div className='p-10 flex bg-gray-100 justify-center gap-32 items-center'>

       {obj.map((e,i)=>(

         <div key={i} className='bg-white  flex flex-col gap-2 justify-center items-center text-black w-50 h-110'>
            <img width={"150"}  src={e.img} alt="" />
            <h3>{e.name}</h3>
            <p>{e.price}</p>
            <del>{e.offerprice}</del>
            <button className='bg-black text-white p-1 w-20 text-center'>Buy Now</button>

        </div>

       ))}

       

        

        
    </div>
    </>
  )
}

export default Cards