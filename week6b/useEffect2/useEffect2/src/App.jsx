import { useEffect, useMemo, useState, memo } from 'react'
import './App.css'

function App() {
  return (
    <>
      <One />
      <Two userId={10} />  
      <ScrollTracker />
      <UseMemo />
      <UseCallback />
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>

      <h1>Hello</h1>
      <h1>Hello</h1>

      <h1>Hello</h1>
      <h1>Hello</h1>

      <h1>Hello</h1>
      
    </>
  
  )
}

function One() {
  const [data, setData] =  useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(json => setData(json));
  }, [])
  return (
    <>
      <div>
        <h1>Post</h1>
        {data ? <p>{data.title}</p> : <p>Loading...</p>}
      </div>
    </>
  )
}

function Two({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data));
  }, [userId]);

  return (
    <div>
      {user ? <p>{user.name}</p> : "Loading..."}
    </div>
  )
}

function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // window.scrollY gives the vertical scroll position in pixels
    };

    window.addEventListener('scroll', handleScroll); // everytime the user scrolls, listen to the rendering component scroll and run this function `handleScroll`
    return () => {
      window.removeEventListener('scroll', handleScroll); // eveytime user stops scrolling, remove the listener who is listening to the scroll and stop rendering shit.
    };
  }, []);

  return <p>Scroll Y: {scrollY}</p>
}

function UseMemo() {
  const [num, setNum] = useState(0);
  const [sum, setSum] = useState(0);
  let count = useMemo(() => {
    let count = 0;
    console.log("Expensive calculation is executed!");
    for(let i =0; i <= sum; i++) {
      count += i;
    }
    return count;
  }, [sum])

  return(
    <>
      <button onClick={function() {
        setNum(num + 1);
      }}>Click {num}</button>
      <br/>
      <input type="text" placeholder='Enter number' onChange={function(e) {
        setSum(Number(e.target.value));
      }}/>
      <p>{sum} : {count}</p>
    </>
    
  )
}

function UseCallback() {
  const [count, setCount] = useState(0);
  function onClick() {
    console.log("Child clicked!");
  }

  const Child = memo(({onClick}) => {
    console.log("Child render!");
    return <div>
      <button onClick={onclick}>Button Clicked!</button>
    </div>
  })
  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click Me {count}</button>
  </div>
}

export default App;
