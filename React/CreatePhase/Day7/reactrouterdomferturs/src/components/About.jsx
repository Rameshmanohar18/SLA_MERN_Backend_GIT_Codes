import { Link } from "react-router-dom"


const About = () => {
 

    const productList = [{
        id:1,
        name:"react",
        subject:"node"
    },
{
        id:2,
        name:"Js",
        subject:"node"
    },{
        id:3,
        name:"HTML",
        subject:"node"
    }]


  return (
    <>

    {productList.map((e)=>(
        <div key={e.id}>
            <h1>{e.name}</h1>
            <h1>{e.subject}</h1>
            <Link to={`/params/${e.id}`}>See More</Link>
        </div>
    ))}


    <Link to="/usenavigate" state={productList}>Move to the Next From</Link>
    <h1 className="bg-red-500 p-10 flex justify-center items-center h-100">About</h1>
    </>
  )
}

export default About