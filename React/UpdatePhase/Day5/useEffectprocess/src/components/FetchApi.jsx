import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const[dataSave,setDataSave] = useState([])

 const fetchData = async()=>{
    const savedata = await fetch("https://dummyjson.com/products")
    const res = await savedata.json()
    //console.log(res.products);
    setDataSave(res.products)
    
 }


 useEffect(()=>{
    (async ()=>{
        fetchData()
    })()
 },[])
  return (
<>

    <h1>Fecth APi</h1>

    <div>
        {dataSave.map((e,i)=>(
            <p key={i}>{e.title}</p>
        ))}
    </div>
</>
    
  )
}

export default FetchApi