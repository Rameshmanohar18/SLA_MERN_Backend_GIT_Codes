import Userprofile from "./Userprofile"


const Userdetails = () => {

 const users=[{name:"swathi",batch:2025,moblie:3456545873,city:"nagapattinam",skills:["js","react","html"]},
{name:"React",batch:2025,moblie:3456545873,city:"nagapattinam",skills:["js","react","html"]}
,{name:"Node",batch:2025,moblie:3456545873,city:"nagapattinam",skills:["js","react","html"]}
 ]

const color = "blue"


  return (
    <>
    <Userprofile passdata={users} colors = {color} />
    </>
  )
}

export default Userdetails