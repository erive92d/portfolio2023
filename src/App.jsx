import './App.css'
import Footer from './pages/Footer'
import Navigation from './components/Navigation'
import { Routes, Route } from "react-router-dom";
import AboutNew from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contacts';
import Skills from "./pages/Skills"


function App() {

  return (
    <div className=' font-mono'>
      <div className='text-white flex flex-col bg-gradient-to-b from-cyan-700 to-black from-30% to-80% '>
        <Navigation/>
        <div className='w-4/5 mx-auto py-10'>
          <Routes>
            <Route path="/" element={<AboutNew/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contacts" element={<Contact/>}/>
            <Route path="/skills" element={<Skills/>}/>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
