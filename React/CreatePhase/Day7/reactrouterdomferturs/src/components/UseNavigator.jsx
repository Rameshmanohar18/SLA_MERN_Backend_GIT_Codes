
import { useLocation, useNavigate } from "react-router-dom"


const UseNavigator = () => {

  const navigate = useNavigate()

  const location = useLocation()
  
console.log(location.state);




const submitchange = ()=>{


       
        navigate("/reactcomponents")

    
}
  return (
    <> 
    <h1>{location.state.name}</h1>
    <button className="bg-black text-white p-1 rounded" onClick={submitchange}>Click to Move</button>
    </>
  )
}

export default UseNavigator