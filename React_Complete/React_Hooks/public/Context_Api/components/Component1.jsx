import React, { useContext } from 'react'
import { counterContext } from '../context/Context'
// const component1 = ({count}) => {  without usage of context api
    const component1 = () => {
        const value=useContext(counterContext);
  return (
    <div>
      {/* {count} */}{value.count}
    </div>
  )
}

export default component1
