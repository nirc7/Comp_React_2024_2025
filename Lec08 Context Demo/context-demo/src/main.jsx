import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HobbyContextProvider from './HobbyContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HobbyContextProvider>
      <App />
    </HobbyContextProvider>
  </StrictMode>,
)
