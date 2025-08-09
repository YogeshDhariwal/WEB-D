import { useState, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)  // usestate hook
  // const [color, setColor] = useState(0)


  // useEffect(() => {                       // useeffect hook
  //   alert("hey i run because count was changed")
  //   setColor(color + 1)
  // }, [count])



  

  return (
    <>
      {/* <Navbar color={"navy" + "blue" + color} /> */}
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update the count </button>
    </>
  )
}

export default App;
