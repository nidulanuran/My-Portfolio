import { useEffect, useState } from "react"

function Footer(){

    const [date,setDate]=useState(new Date().getFullYear())

    useEffect(()=>{
        setDate(new Date().getFullYear())
    },[])

    return(
        <footer className="py-8 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
                <span
                className="text-[#7a8ba8] text-sm"
                style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  &copy;  {date} Nidula Nuran · Built with React + Tailwind
                </span>

            </div>
        </footer>
    )
}
export default Footer