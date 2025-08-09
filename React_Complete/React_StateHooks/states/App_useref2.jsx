 import { useState, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 

function App() {
  const [count, setCount] = useState(0)
 const btnref=useRef();

 // 1.To refer a component withou using DOM manuplation
  useEffect(() => {
    console.log(`rendering`)
    ref.current.style.backgroundColor="red"
  }, [])
  
  
  return (
    <>
    
      <div>The count is {count}</div>
      <button ref={btnref} onClick={() => { setCount(count + 1) }}>Update the count </button>
    </>
  )
}

export default App;