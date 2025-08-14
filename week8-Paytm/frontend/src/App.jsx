import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/signup/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin/SIgnin'
import Dash from './pages/Dashboard/Dash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/dash' element={<Dash />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
