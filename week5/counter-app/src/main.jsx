import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // root div ke andar joh hein, woh sab render karo
  <StrictMode>
    <App />
  </StrictMode>,
)
