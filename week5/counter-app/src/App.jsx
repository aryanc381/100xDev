// // little tricky to understand the syntax, i'll take time

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// // let state = {
// //   count: 0
// // }

// function App() {
//   // seetting up the state variables bc
//   const [count, setCount] = useState(0);

//   // I have to return the count and setCount that has been changed from the CustomButton function.
//   return (
//     <div>
//       <CustomButtom count={count} setCount={setCount}></CustomButtom>
//       <CustomButtom count={count + 1} setCount={setCount}></CustomButtom>
//       <CustomButtom count={count - 1} setCount={setCount}></CustomButtom>
//       <CustomButtom count={count * 100} setCount={setCount}></CustomButtom>
//       <CustomButtom count={count / 100} setCount={setCount}></CustomButtom>
//     </div>
//   )

//   // component - CustomButton that has the button changes
//   function CustomButtom(props) {
//     // onClickHandler - adds the count and sets it to the correct value
//     function onClickHandler() {
//     props.setCount(props.count + 1);
//   }
//     // return the html button element wese
//     return <button onClick={onClickHandler}>
//       Counter {props.count}
//     </button>
//   }
// }

// export default App


import { set } from 'mongoose';
import './App.css'
import {useState} from "react"

// let state = {
//   count: 0
// }

// function App() {
//   const [count, setCount] = useState(0);
//   console.log(count);
//   console.log(setCount);

//   function onClickHandler() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <CustomButtom count={count} setCount={setCount}></CustomButtom>
//       <CustomButtom count={count + 1} setCount={setCount}></CustomButtom>
//       <CustomButtom count={count - 1} setCount={setCount}></CustomButtom>
//       <CustomButtom count={count * 100} setCount={setCount}></CustomButtom>
//     </div>
//   )
// }

// function CustomButtom(props) {
//   function onClick() {
//     props.setCount(props.count + 1)
//   }

//   return <button onClick={onClick}>
//     Counter {props.count}
//   </button>
// }

function App() {
  const [todos, setTodos] = useState([ // our state variables
    {
      title: "Go to Gym",
      time: "7AM",
      completed: false
    }, {
      title: "Study DSA",
      time: "9AM",
      completed: true
    }
  ]);
  const [count, setCount] = useState(0);

  return ( // main return statement
    <div>

      <button onClick={addTodo}>GO TO BB</button>
      <button onClick={countTodo}>Count</button>
      {<h1>Total todos: {count}</h1>}
      {todos.map(function(todo) {
        return <Todo title={todo.title} time={todo.time} />
      })}
    </div>
  )

  function Todo(props) { // rendering function for components
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.time}</h2>
    </div>
  }

  function addTodo() { // function for adding a todo component
    setTodos([...todos, {
      title: "Basketball",
      time: "8PM"
    }])
  }

  function countTodo() {
    let counter = 0;
    setCount(todos.length);
  }
}

export default App;