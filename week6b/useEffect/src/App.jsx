import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [selectedId, setSelectedId] = useState("");
  return (
    
    <div>
      <div>
        <button onClick={function() {setSelectedId("6876450afa806d8b90a9f5da")}}>1</button>
      </div>
      <div>
        <button onClick={function() {setSelectedId("6876563cd6395d820e34dbdd")}}>2</button>
      </div>
      <div>
        <button onClick={function() {setSelectedId("68765bba6e472fe2ff6e5742")}}>3</button>
      </div>
      <div>
        <button onClick={function() {setSelectedId("68765fc12165ca8958108665")}}>4</button>
      </div>
      <Todo id={selectedId} />
      
    </div>
  )
}

function Todo({id}) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get("http://localhost:3000/todos/" + id)
      .then(function(response) {
        setTodo(response.data.User)
      });
    }
    
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>;
  }
  return <div>
    <h2>{id}</h2>
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>
}

export default App
