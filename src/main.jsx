import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './App/NavBar.jsx'
import Section from './App/Section.jsx'

createRoot(document.getElementById('root')).render(
  <div className='container'>
    <NavBar/>
    <Section />
  </div>,
)
