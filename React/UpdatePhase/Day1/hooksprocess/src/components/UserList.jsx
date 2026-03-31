import React, { useState } from 'react'
import Propsdata from './Propsdata'

const UserList = () => {
 const [datas,setDatas] = useState([{name:"react Vite",subject:"Node"}
    ,{name:"react 1",subject:"Node"},{name:"react 2",subject:"React"}])

   const handleClick = ()=>{
    const findone = datas.filter((e)=>e.subject === "Node")
    setDatas(findone)
   }

  return (
    <>
    <Propsdata  mydata = {datas}    />
    <button className='bg-black text-white p-1' onClick={handleClick}>Change</button>
    </>
  )
}

export default UserList
