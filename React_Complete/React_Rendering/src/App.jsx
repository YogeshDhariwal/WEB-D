import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [showbtn, Setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "hey i am first todo title",
      desc: "i am the best developer"
    },
    {
      title: "hey i am second todo title",
      desc: "i know i will get 30 lpa"
    },

  ])

  //   const Todo = ({todo}) => {
  //     return (<>
  //     <div className="m-4 bg-red-800 border border-1 p-4 text-white w-full">
  //  <div className="todo">  {todo.title} </div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>

  //     </>)
  //   }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* //1. conditional rendering */}

      {/* {showbtn?<button>i Will be shown when another bottom clicked</button>:""} */}
      {showbtn && <button onClick={() => Setshowbtn(!showbtn)}>i Will be shown when second bottom clicked</button>}
      <div className="card">

        {/* 2.List rendering (use of loop) */}
        {todos.map(todo => {
          // return <Todo key={todo.title} todo={todo}/>

          return <div key={todo.title} className="m-4 bg-red-800 border border-1 p-4 text-white w-full">
            <div className="todo">  {todo.title} </div>
            <div className="todo">{todo.desc}</div>
          </div>
  
        })}

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs font-extrabold">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
