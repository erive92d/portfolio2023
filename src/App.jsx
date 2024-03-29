import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Navigation from './components/Navigation'
import { capTitle } from './utils/helpers'

function App() {
  //about
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
    <div className='bg-cyan-950 text-gray-300 font-mono'>
      <div className='flex flex-col'>
        <Navigation handlePage={handlePage} page={page} />
        <div className=' lg:w-5/6 lg:mx-auto'>
          <Home page={page} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
