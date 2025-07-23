import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(1);
  const [finalVal, setfinalVal] = useState(0);
  const num = parseInt(sum);
  let ans = 0;
  for(let i = 0; i <= num; i++) {
    ans += i;
  }

  // using useEffect
  // useEffect(() => {
  //   const num = parseInt(sum);
  //   let ans = 0;
  //   for(let i = 0; i <= num; i++) {
  //     ans += i;
  //   }
  //   setfinalVal(ans);
    
  // }, [sum])

  // useMemo
  let count = useMemo(() => {
    let count = 0;
    for(let i = 0; i <=sum; i++) {
      count += i;
    }
    return count;
  }, [sum])

  function countHandler() {
    setCounter(counter + 1);
  }


  return (
    <>
      <div>
        <input onChange={function(e) {
          setSum(e.target.value);
        }} placeholder='Find sum from 1 to n'></input>
        <br/>
        Sum from 1 to {sum} is {count}
      </div>
      
      <div>
        <div>
          <button onClick={countHandler}>Counter ({counter})</button>
        </div>
        
      </div>
    </>
  )
}
export default App
