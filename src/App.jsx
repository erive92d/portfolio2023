import './App.css'
import Footer from './pages/Footer'
import Navigation from './components/Navigation'

import { Routes, Route } from "react-router-dom";
import Projects from './pages/Projects'
import Contact from './pages/Contacts';
import Skills from "./pages/Skills"
import Home from './pages/Home';


function App() {

  return (
    <div className=''>
      <div className='text-black bg-bg-custom-cyan flex flex-col text-custom-white '>
        <Navigation />
        <div className=''>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
