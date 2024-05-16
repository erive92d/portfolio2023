import './App.css'
import Footer from './pages/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home';


function App() {

  return (
   <>
      <div className=' text-black bg-bg-custom-cyan flex flex-col text-custom-white '>
        <Navigation />
        <Home/>
      </div>
      <Footer />
    </>
  )
}

export default App
