
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/signin';
import User from './pages/user';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
    
    
  )
}

export default App
