import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const user = {
  name: "Aryan",
  imageUrl: "https://kaleidousercontent.com/removebg/designs/4621cf76-fb41-4177-bc33-f12a67816592/thumbnail_image/change-background-thumbnail.png",
  imgSize: 90,

};

const chars = [
  {name: "Kakarot", power: 100, id: 1},
  {name: "Vegeta", power: 120, id: 2},
  {name: "Piccolo", power: 80, id: 3}
];

function App() {
  return (
    <>
    <div>
      <h1>Hello, welcome to my app!</h1>
      <MyButton/>
      <Profile />
      <Admin />
      <Iterator />
      <Fruits />
      <Alert />
    </div>
    <div><Counter /></div>
    <div><Counter /></div>
    </>
  );
}

export function MyButton() { // 
  return(
    <button>I'm a button</button>
  );
}

export function Profile() {
  return(
    <>
      <h1>{user.name}</h1>
      <img className='avatar'
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imgSize
      }}
      />
    </>
  );
}

export function Admin() {
  const [name, setName] = useState("");
  return(
    <div>
      <input type='text'
       placeholder='Enter name'
       style={{
        fontFamily: "cursive",
        textAlign: "left",
       }} 
       value={name}
       onChange={(e) => setName(e.target.value)}
      />

      {name === "Aryan" ? (
        <p>Hi aryan</p>
      ) : (
        <p>Wrong name</p>
      )}

    </div>

    
  );
}

export function Iterator() {
  const listItems = chars.map(character => 
      <li key={character.id}>
        {character.name} {character.power}
      </li>
    ) 
  return(
    <ul>{listItems}</ul>
  );
}

const products = [
  {title: "Carrot", isFruits: false, id: 1},
  {title: "Banana", isFruits: true, id: 2},
  {title: "Apple", isFruits: true, id: 3},
];

export function Fruits() {
  const listItems = products.map(product => 
    <li key={product.id}
    style={{
      color: product.isFruits ? 'green' : 'blue'
    }}
    >
      {product.title}
    </li>
  )

  return(
    <ul>{listItems}</ul>
  )
}

export function Alert() {

  function handleClick() {
    alert("Hi you have clicked me!");
  }

  return(
    <button onClick={handleClick}>Click Me!</button>
  )
}

export function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return(
    <div>
      <button onClick={handleClick}>
      Clicked {count} times
      </button>
      <button onClick={handleClick}>
      Clicked {count} times
      </button>
    </div>
  )
}
export default App;
