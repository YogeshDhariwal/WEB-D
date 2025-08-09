 import { useState, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 

function App() {
  const [count, setCount] = useState(0)
 const a=useRef(0);

 // 1.To persist the value of a variable 
  useEffect(() => {
    a.current=a.current+1;
    console.log(`rendering and the value of a is ${a.current}`)
  }, [])
  
  
  return (
    <>
    
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update the count </button>
    </>
  )
}

export default App;
