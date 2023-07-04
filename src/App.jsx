import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navigation from './pages/Navigation'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contacts'
import Resume from './pages/Resume'
import Footer from './pages/Footer'

function App() {

  return (
    <div className=' bg-gray-800 min-h-screen'>

      <Navigation />
      <div className='space-y-10'>
        <About />
        <Projects />
        <Contact />
        <Resume />
      </div>
      <Footer />
    </div>
  )
}

export default App
