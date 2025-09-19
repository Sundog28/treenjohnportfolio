import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Recruiter from './pages/Recruiter'
import Downloads from './pages/Downloads'
import NotFound from './pages/NotFound'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'skills', element: <Skills /> },
    { path: 'projects', element: <Projects /> },
    { path: 'resume', element: <Resume /> },
    { path: 'contact', element: <Contact /> },
    { path: 'recruiter', element: <Recruiter /> },
    { path: 'downloads', element: <Downloads /> },
    { path: '*', element: <NotFound /> }
  ]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        const t = document.createElement('div')
        t.textContent = '⚡ Portfolio ready offline!'
        Object.assign(t.style, {
          position:'fixed', bottom:'20px', right:'20px', background:'var(--accent)',
          color:'black', padding:'10px 16px', borderRadius:'8px', fontWeight:'bold',
          boxShadow:'0 0 12px rgba(0,0,0,.4)', zIndex:'9999'
        })
        document.body.appendChild(t); setTimeout(()=>t.remove(), 3500)
      }).catch(()=>{})
  })
}
