import { useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Home from './components/sections/Home';
import About from './components/sections/About';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';


function App() {
  const [isloaded, setIsLoaded] = useState(false);


  return (
    <>
      {!isloaded ? (
        <Loading onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="h-auto w-full">
          <Navbar />
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      )}
    </>
  )
}

export default App


