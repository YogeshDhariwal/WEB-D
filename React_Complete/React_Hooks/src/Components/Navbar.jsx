import React from 'react'
import { memo } from 'react'
const Navbar = ({adjactive,getadjactive}) => {
    console.log("navbar is rendered")
  return (
    <div>
      I am a {adjactive} Navbar 
      <button onClick={()=>{getadjactive}}>{getadjactive()}</button>
    </div>
  )
}

export default memo(Navbar)
