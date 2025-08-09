import React from 'react'
import Component1 from '../context_api/components/component1'
import { counterContext } from '../context/Context'

// const Button = ({count}) => { without context api usage
  const Button = () => {
     const value=useContext(counterContext);
  return (
    <div>
      {/* <button><span><Component1 count={count}/></span>button</button> */}

         <button  onClick={() => value.setCount((count) => count + 1)}><span><Component1 /></span>button</button>
    </div>
  )
}

export default Button
