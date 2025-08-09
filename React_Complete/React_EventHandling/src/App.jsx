import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email:"",phone :""})


const handalclick =()=>{
  alert("hey mittar why you just clicked me ")
}

const handalmouseover= ()=>{
  alert("what's the problem why over me")
}

const handalchange=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
  console.log(form)
}

  return (
    <>
    <div className="button">
      <button onClick={handalclick}>Click me</button>
    </div>

    <div className="red " onMouseOver={handalmouseover}>i am a red class</div>

    <input type="text" name='email' value={form.email?form.email:""} onChange={handalchange}/>
    <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handalchange}/>
    </>
  )
}

export default App
