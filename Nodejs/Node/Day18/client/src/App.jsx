import axios from "axios"
import { useEffect, useState } from "react"


const App = () => {
  const [producName,setProducName] = useState("")
  const [image,setImage] = useState(null)
  const [productlist,setProductlist] = useState([])


  const getDatas = async ()=>{

   const get = await axios.get("http://localhost:5000/api/product/getData")

   setProductlist(get.data.dataGet)


     
  }


  useEffect(()=>{

    (async()=>{
      getDatas()
    })()

  },[])

 


  const handleSubmit =async(e)=>{
    
    e.preventDefault()

     try {

      const formValues = new FormData()
     

     formValues.append ("producName",producName)
     formValues.append ("image",image)

     const added = await axios.post("http://localhost:5000/api/product/imageadded",formValues)
    
     alert(added.data.msg)
     getDatas()
     setProducName("")
     setImage(null)

      
     } catch (error) {

      alert(error.response.data.msg)
      
     }



  }

  return (
   <>
   <form onSubmit={handleSubmit}>
     <input type="text" onChange={(e)=>setProducName(e.target.value)} value={producName} placeholder="Enter the Product" />
     <input type="file" onChange={(e)=>setImage(e.target.files[0])}  />
     <input type="submit" value={"Add image"} />
   </form>


<hr />
<br />
   <div>

    {productlist.map((e)=>(
       <div key={e._id}>
        <h1>{e.producName}</h1>
        <img style={{width:"100px"}} src={e.image} alt={e.producName} />
      </div>

    ))}
     
   </div>
   </>
  )
}

export default App
