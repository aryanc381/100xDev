import React, { useState } from 'react'
import './App.css'

function App() {
  

  
  return (
    <>
      <HeaderWithButton />
      <Header title="Harkirat"></Header>
      <Header title="Aryan"></Header>
      <Header title="Aryan"></Header>
      <Header title="Aryan"></Header>
      <Header title="Aryan"></Header>
    </>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Aryan");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
  </div>
}

const Header = React.memo(function Header({title}) {
  return <div>
    <p>{title}</p>
  </div>
})
export default App
