import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from './providers/ThemeProvider'
import { AudioProvider } from './providers/AudioProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AudioProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AudioProvider>
    </ThemeProvider>
  </React.StrictMode>
)
