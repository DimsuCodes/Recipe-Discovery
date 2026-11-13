import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import FavoritesProvider from './context/FavoritesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* Wraps the app so every page can use favorites */}
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </StrictMode>
  </BrowserRouter>
)
