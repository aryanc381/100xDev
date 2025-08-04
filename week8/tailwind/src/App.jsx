import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: "flex"}}>
        <div style={{backgroundColor: "red"}}>Hello</div>
        <div style={{backgroundColor: "green"}}>Thank You</div>
        <div style={{backgroundColor: "yellow"}}>Sorry</div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className='bg-red-500'>Hello</div>
        <div className='bg-blue-500'>Thank You</div>
        <div className='bg-yellow-500'>Sorry</div>
      </div>
      
    </>
  )
}

export default App
