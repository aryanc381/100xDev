import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <Counter />
    </div>
    
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  function countIncreaser() {
    setCount(count + 1);
  }
  return(
    <>
      <div>The count is {count}</div>
      <button onClick={countIncreaser}>Increase</button>
    </>
  )
}

export default App
