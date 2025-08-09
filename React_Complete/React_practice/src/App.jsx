import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState([])

   useEffect(() => {
    const fetchdata= async()=>{
    let response=await fetch("https://jsonplaceholder.typicode.com/posts")
    let json=await response.json();
    setData(json);
    }

    fetchdata();

  }, [])
  return (
    <>
    <Navbar/>
    <div className="container">
 { data.map((item)=>{
     return <div className='card'key={item.id}>
              <h1 className="title">{item.title}</h1>
              <p className="userId">User ID:{item.userId}</p>
              <p className="id">Post ID:{item.id}</p>
              <p className="body">{item.body}</p>
        </div>
  }  )
    }
    </div>
    </>
  )
}

export default App
