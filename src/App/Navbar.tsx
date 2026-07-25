import { useState,useEffect } from "react"
import { motion } from "motion/react"
import { Menu, X } from "lucide-react";
import { Button } from "../UI/button";

function Navbar(){

    const [scrolled,setScrolled]=useState(false)
    const [menuOpen,setMenuOpen]=useState(false)

    useEffect(()=>{
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const NavLinks=[
        {label:"Home",href:"#home"},
        {label:"About",href:"#about"},
        {label:"Projects",href:"#projects"},
        {label:"Contact",href:"#contact"}
    ]

    function handleLink(href:string){

        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({behavior:"smooth"})
    }

    return(

        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            ${scrolled
            ? "bg-[#050a14]/90 border-b border-[#00d4ff]/10"
            : "bg-transparent"
            }`}
        >

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            {/*Dekstop*/}
            <ul className="hidden md:flex gap-8">
                {NavLinks.map((Link)=>
                    <li key={Link.href}>
                        <button onClick={()=>handleLink(Link.href)}
                        className="text-[#7a8ba8] cursor-pointer hover:text-[#00d4ff] transition-colors duration-200 text-sm tracking-wide"
                        style={{ fontFamily: "'Inter', sans-serif" }}>{Link.label}</button>
                    </li>
                )}
            </ul>
    
            <Button onClick={()=>handleLink("#contact")} className="hidden md:inline-flex cursor-pointer ">
            Hire me
            </Button>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-[#00d4ff]"
            >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
      </div>

    {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#050a14]/95  border-b border-[#00d4ff]/10 px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {NavLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="text-[#7a8ba8] hover:text-[#00d4ff] transition-colors text-sm w-full text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
    
    </motion.nav>
    )
}
export default Navbar