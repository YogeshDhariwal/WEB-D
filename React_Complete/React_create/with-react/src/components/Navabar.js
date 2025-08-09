import React from 'react'
import Footer from './Footer'
const Navabar = (props) => {
  return (
    <div>
        <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Navabar
