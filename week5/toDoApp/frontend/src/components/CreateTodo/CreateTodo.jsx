import '../CreateTodo/CreateTodo.css'
import { useState } from 'react';

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");



    return <div id="input">
        <input 
        type="text" 
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // e is the event object, target is the DOM element and value is the text inside the box
        />
        <br/>
        
        <input 
        type="text" 
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        />
        <br/>

        <button id="toDoButton" onClick={() => {
            // axios library study karle bhai
           fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
           }) 
           .then(async function(res) {
            const json = await res.json();
            alert("Todo added!");
           })
        }}>Add a todo</button>
    </div>
}

