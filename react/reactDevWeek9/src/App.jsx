import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='main'>
      <div>
        <Post />
        <ToggleButton />
        <ToggleButton />
        <ToggleButton />
      </div>
    </div>
  )
}

function Post() {

  return <div> 
    <div className='post'>
    <img src='public/vite.svg' />
    <div>
      <b>Vite</b>
      <div>20,000 followers</div>
      <div>12m</div>
    </div>
    
  </div>
  <div>Want to know how to do React?</div>
  </div>
}

function ToggleButton() {
  let [isVisible, setIsVisible] = useState(true);

  function toggle() {
    setIsVisible(!isVisible);
  }
  return(
    <div>
      <button onClick={toggle}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered</p>}
    </div>
  )
}

export default App
