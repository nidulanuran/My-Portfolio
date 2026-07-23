import { lazy,Suspense } from "react"
import Home from './App/Home'
import Navbar from './App/Navbar'
import Loader from "./UI/Loader"
// const Navbar=lazy(()=>import('./App/Navbar'))
// const Home=lazy(()=>import('./App/Home'))
const About=lazy(()=>import('./App/About'))
const Projects=lazy(()=>import('./App/Projects'))
const Contact=lazy(()=>import('./App/Contact'))
const Footer=lazy(()=>import('./App/Footer'))

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
      <Suspense fallback={<Loader/>}>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </Suspense>
        
    </div>
    

  )
}

export default App
