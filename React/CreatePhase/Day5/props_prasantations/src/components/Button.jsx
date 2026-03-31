import React from 'react'
import NewBanner from './NewBanner';

const Button = ({newdatapassing}) => {

    console.log(newdatapassing);
    
  return (
    <>
    <button className='bg-black p-2 rounded text-white'>Click me {newdatapassing.name}</button>
    <NewBanner newBannerdata = {newdatapassing}  />
    </>
  )
}

export default Button