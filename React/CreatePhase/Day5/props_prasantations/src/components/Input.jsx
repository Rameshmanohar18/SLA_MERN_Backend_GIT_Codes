import Button from "./Button"


const Input = ({passobj=0}) => {

    

    //console.log(name);
    
    
  return (
    <>
    
    <input type="text" value={passobj.name} className='bg-black text-white p-2 w-50' placeholder='Enter the Number' />
    <Button newdatapassing = {passobj}   />

    
    </>
  )
}

export default Input