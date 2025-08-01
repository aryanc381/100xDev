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
      <Counter />
      <Component2 />
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

function Counter() {
  const [count, setCount] = useState(0);

  function alertFunction() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 1000);
  }
  return(
    <div>
      <p>You clicked on counter {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={alertFunction}>Show Alert</button>
    </div>
  )
}

function Component2 () {
  function sayHi(person) {
      const name = person.name;
      setTimeout(() => {
      alert("Hello: " + name);
    }, 3000);
  }
  
  let someone = {name: "Aryan"}
  sayHi(someone);
  return(
    <div>
      {sayHi}
    </div>
  )
}

export default App

