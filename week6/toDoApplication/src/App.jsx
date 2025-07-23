import React, {useState, Fragment} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Time: 7AM-9AM"
    },
    {
      id: 2,
      title: "Watch a movie",
      description: "Time: 9:30AM-12:30PM"
    },
    {
      id: 3,
      title: "PARTY ALL NIGHT",
      description: "Time: 9PM-4AM"
    }
  ])

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function addTodo() {
  const newTodo = [];
  for(let i = 0; i < newTodo.length; i++) {
    newTodo.push(todos[i]);
  }
  newTodo.push({
    id: newTodo.length + 1,
    title: Math.random(),
    description: Math.random()
  })
}


function  Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
