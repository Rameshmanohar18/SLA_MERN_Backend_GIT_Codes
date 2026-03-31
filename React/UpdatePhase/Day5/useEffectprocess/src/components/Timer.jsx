import { useEffect, useState } from "react"


const Timer = () => {

    const [time,setTime] = useState(0)

   

    useEffect(()=>{

    const timers = setInterval(()=>{
        setTime(time+1)
    },1000)    

    return ()=> clearInterval(timers)

    })

  return (
    <div>{Timer}</div>
  )
}

export default Timer