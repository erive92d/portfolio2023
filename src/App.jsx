import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

import Footer from './pages/Footer'
import AboutNew from './pages/About'
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import { capTitle } from './utils/helpers'
function App() {
  const [page, setPage] = useState("about")

  const handlePage = (e) => {
    e.preventDefault()
    const { name } = e.target

    if (name === "about") {
      setPage("about")
    }
    if (name === "projects") {
      setPage("projects")
    }
    if (name === "contacts") {
      setPage("contacts")
    }
    if (name === "resume") {
      setPage("resume")
    }


  }



  document.title = "D.E: " + capTitle(page)

  return (
    <div className='min-h-screen bg-gray-300'>
      <Logo />
      <div className='flex min-h-screen'>
        <Navigation handlePage={handlePage} page={page} />
        <div className=' p-3 lg:p-10 md:p-2  mx-auto'>
          <Home page={page} />

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default App
