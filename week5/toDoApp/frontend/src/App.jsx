import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo/CreateTodo'
import { Todos } from './components/Todos/Todos'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos") // bad way to update the component and state
  .then(async function(res) {
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
