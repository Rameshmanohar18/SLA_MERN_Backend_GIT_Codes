const Propsdata = ({mydata}) => {
console.log("🦀 mydata", mydata);
  return (
   <div className="bg-yellow-300 p-10 h-100">
{mydata.map((e,i)=>(
     <div key={i} className="bg-white p-3  rounded w-50 h-50">
        <h1>{e.name}</h1>
        <h2>{e.subject}</h2>
    </div>
))}

   
   </div>
  )
}

export default Propsdata