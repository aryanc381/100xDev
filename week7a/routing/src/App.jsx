import { BrowserRouter, Routes, Route, useNavigate, lazy } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))
function App() {
  return (
    <>
      
      <Navbar />
      <BrowserRouter>
      <Navigatebuttons />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Navigatebuttons() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => {
            navigate("/dashboard");
        }}>Dashboard</button>

        <button onClick={() => {
            navigate("/");
        }}>Landing</button>
      </div>
    </>
  )
}

export default App
