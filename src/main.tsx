import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles.css'

// Se monta la aplicación React en el elemento con id "root"
// StrictMode ayuda a detectar problemas potenciales durante el desarrollo
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
