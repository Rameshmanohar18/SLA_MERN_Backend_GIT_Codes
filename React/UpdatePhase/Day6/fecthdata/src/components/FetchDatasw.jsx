
import { useEffect, useState } from "react";


const FetchDatasw = () => {

  const [data,setData] = useState([])
  const [single,setSinfgle] = useState("")
 const fetchData = async () =>{
     
  try {

    const fetchDataNew =await fetch("https://dummyjson.com/users")
    //console.log(fetchDataNew);
    const res =await fetchDataNew.json()
    console.log(res.users);
    setData(res.users)
    
  } catch (error) {

    console.log('Something error',error);
    
    
  }


 }

 useEffect(()=>{
  (async ()=>{
    fetchData()
  })()
 },[])

 const handleClick = (u)=>{

  // alert(u)
  // console.log(u);
  setSinfgle(u.age)

 }


 const handleClickAge = ()=>{

    const filter = data.filter((e)=>e.age >=35   )
    console.log("😺 filter result is:-", filter);

    setData(filter)
 }

  return (
   <>
   <h1>Fetch Datas</h1>

   <div className="bg-black p-10 flex justify-center items-center gap-5 flex-wrap ">

    <button className="bg-white  p-1 rounded mx-5" onClick={handleClickAge}>Fliter Age Only 30</button>
  {data.map((e,i)=>(
       <div key={i} className="bg-amber-400 rounded-2xl flex flex-col gap-2   p-2 w-50 h-80">
    <img src={e.image} className="w-40" alt="" />
   <h1>FirstName:-{e.firstName}</h1>
      <h1>lastName:-{e.lastName}</h1>
   <p>Age:{e.age}</p>
   <p>Phone No:{e.phone}</p>
      <p>Gender:{e.gender}</p>
      

   <button onClick={()=>handleClick(e)} className="bg-black text-white p-1 rounded w-30">Book Now</button>
   </div>
  ))}
   </div>

   <h1>{single}</h1>
   </>
  )
}

export default FetchDatasw