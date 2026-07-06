import Navbar from "./App/Navbar"
import Home from "./App/Home"
import About from "./App/About"
import Projects from "./App/Projects"
import Contact from "./App/Contact"
import Footer from "./App/Footer"

function App() {


  return (
    <div className="min-h-screen bg-[#050a14] text-[#e8edf5] overflow-x-hidden">
      <style>{`
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
        *:hover { scrollbar-width: thin; scrollbar-color: rgba(0,212,255,0.2) transparent; }
      `}</style>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    

  )
}

export default App
