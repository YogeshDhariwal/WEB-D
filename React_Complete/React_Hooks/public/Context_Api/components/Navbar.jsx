import React, { useContext } from 'react'

import Button from './Button'

// const Navbar = ({count}) => {  without context api usage
    const Navbar = () => {
       
  return (
    <div>
      <nav>
        i am a navabr
      </nav>
     {/* <Button count={count}/> */}

     <Button/>
    </div>
  )
}

export default Navbar
