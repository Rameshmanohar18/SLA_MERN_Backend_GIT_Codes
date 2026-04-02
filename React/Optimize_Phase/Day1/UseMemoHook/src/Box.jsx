import React from 'react'

const Box = ({values}) => {

    const {doubethenummber,handleClick} = values
  return (
    <div>
        <h1>{doubethenummber}</h1>
      <button onClick={handleClick}>Click to callback</button>
    </div>
  )
}

export default Box