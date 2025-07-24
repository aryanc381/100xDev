import { countAtom, evenSelector } from "./store/atoms/count";
import './App.css';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';


function App() {
  // prop drilling - bad syntactic way of passing props from parent -> child -> grandchild -> great grand-child


  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
        

    </div>
  )
}

// useRecoilState - [count, setCount]
// useRecoilValue - count
// useSetRecoilValue - setCount
// used for global states, recoil is a state-management tool used.


function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("Re-rendered by buttons")
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>
  </div>
}

function CountRerenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
      {count}
    </div>
}

function Count() {
  return (
  <div>
    <CountRerenderer/>
    <Buttons/>
    <EvenCountRenderer />
  </div>
  )
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  console.log("Even");
  return <div>
    {isEven ? <p>Even</p> : "Odd"}
  </div>
}
export default App;