
import { useParams } from 'react-router-dom'

const ParamsUrl = () => {

 const {productid} = useParams()

 console.log(productid);
 

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

 const datas = productList.find((e)=>e.id == productid)


 //console.log('data',datas);
 
  return (
    <>
    <h1>Prodcut Details</h1>

    <h2>{datas.name}</h2>
    <h2>{datas.subject}</h2>
    </>
  )
}

export default ParamsUrl