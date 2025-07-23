import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then(function(response) {
        setTodos(response.data.todos)
      })

  }, []);

  return (
    <>
      {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({ title, description }) {
  return <div>
    
    <h1>{title}</h1>
    {description}
  </div>
}

export default App
