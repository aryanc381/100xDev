import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Basic } from './basic'
import { Task1 } from './task1'
import { Task2 } from './task2'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/basic' element={<Basic />} />
        <Route path='/task1' element={<Task1 />} />
        <Route path='/task2' element={<Task2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
