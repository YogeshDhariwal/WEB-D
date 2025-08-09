import React from 'react'
import { useEffect } from 'react';

const Navbar = ({ color }) => {

  // Case 1: Run of every render
  useEffect(() => {                       // useeffect hook
    alert("hey i will run on every render")

  },)

  // Case 2: Run only on first render
  useEffect(() => {                       // useeffect hook
    alert("hey welcome to my react app this is first render")

  }, [])

  // Case 3: Run only when a certain value changed
  useEffect(() => {                       // useeffect hook
    alert("hey i run because color was changed")

  }, [color])

  // Example of Cleanup function
  useEffect(() => {
  alert("hey welcome to my page.This is the first render of app.jsx")
    return () => {
      alert("component was unmounted")
    }
  }, [])
  return (
    <div>
      i am Navabar of having {color} ...
    </div>
  )
}

export default Navbar
