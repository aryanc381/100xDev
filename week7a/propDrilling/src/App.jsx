import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './Context';

function App() {
  const [count, setCount] = useState(0); // teleportation of props from parent to any child down the line without manual transportation from one child to another is done by contextAPI and prop drilling problem is solved

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
  </div>
}

function CountRerenderer() {
  const count = useContext(CountContext);
  return <div>
      {count}
    </div>
}

function Count({setCount}) {
  return (
  <div>
    <CountRerenderer/>
    <Buttons setCount={setCount}/>
  </div>
  )
}

export default App;