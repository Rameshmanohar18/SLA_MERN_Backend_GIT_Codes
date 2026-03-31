
import ImagesLogo from './ImagesLogo'

import chat from '../assets/logo/chatgpt.png'
const NavBar = () => {


    const changeAngur = {
        
        color:"white",
         textDecoration: "none" 
    }



  return (
    <>
    <div style={{backgroundColor:"black",padding:"20px",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <div style={{marginLeft:"5%"}}>
           <img src={chat} width={"8%"} />
        </div>
        <div style={{display:"flex",gap:"50px",marginRight:"5%"}}>
       <a href="" style={changeAngur}>Home</a>
       <a href="" style={changeAngur}>About</a>
       <a href="" style={changeAngur}>Contect</a>
       <a href="" style={changeAngur}>Help</a>
        </div>

        <div>
            <Button/>
        </div>
    </div>
    </>
  )
}

export default NavBar




const Button = ()=>{
    return (<>
    
    <button className="btn">Login</button>
    
    </>)
}