import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = 20;
      const rows = 12;
      const cw = canvas.width / cols;
      const ch = canvas.height / rows;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * cw;
          const y = j * ch;
          const dist = Math.sqrt(
            Math.pow(i - cols / 2, 2) + Math.pow(j - rows / 2, 2)
          );
          const wave = Math.sin(dist * 0.6 - t * 0.04) * 0.5 + 0.5;
          const alpha = wave * 0.25;
          ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Horizontal lines
      for (let j = 0; j <= rows; j++) {
        const y = j * ch;
        const wave = Math.sin(j * 0.8 - t * 0.03) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(0, 212, 255, ${wave * 0.06})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let i = 0; i <= cols; i++) {
        const x = i * cw;
        const wave = Math.sin(i * 0.5 - t * 0.025) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(124, 58, 237, ${wave * 0.05})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      animId = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(animId);
    }
    }, { threshold: 0 });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

function Home(){


    return(
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <AnimatedGrid/>

            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/5 blur-[120px]" />
                <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/5 blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4"
                >

                <span
                className="text-sm tracking-[0.3em] text-[#00d4ff] uppercase"
                style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                    AI Engineering Student
                </span>
                </motion.div>

                <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="text-5xl md:text-7xl text-white mb-6 leading-tight"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800 }}
                >
                    Hi I'm{" "}
                    <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                        Nidula Nuran</span>

                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-[#7a8ba8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    Building intelligent systems at the intersection of{" "}
                    <span className="text-[#e8edf5]">machine learning</span>,{" "}
                    <span className="text-[#e8edf5]">large language models</span>, and{" "}
                    <span className="text-[#e8edf5]">real-world engineering</span>.

                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >

                    <button onClick={()=>
                        document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})}
                        className="px-8 py-3 bg-[#00d4ff] text-[#050a14] rounded hover:bg-[#00b8d9] transition-colors duration-200 text-sm tracking-wide cursor-pointer"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                    >
                        My Projects
                    </button>

                    <button onClick={()=>{
                        document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}}
                        className="px-8 py-3 border border-[#7a8ba8]/40 text-[#e8edf5] rounded hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-200 text-sm tracking-wide cursor-pointer"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Get In Touch
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex gap-6 justify-center"
                    >
                    {[
                    {icon:AiFillGithub,href:"https://github.com/nidulanuran",label:"GitHub"},
                    {icon:AiFillLinkedin,href:"https://linkedin.com/in/nidula-nuran",label:"Linkedin"},
                    {icon:Mail,href:"mailto:nidulanura22@gmail.com",label:"Email"}  
                    ]
                    .map(({icon:Icon,href,label})=>
                    <a key={label} href={href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a8ba8] hover:text-[#00d4ff] transition-colors duration-200"
                    aria-label={label}>

                        <Icon size={20}/>
                    </a>
                    )
                    }
                
                </motion.div>
            </div>

                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#7a8ba8] animate-bounce"
                >
                  
                    <ArrowDown size={20} onClick={()=>document.querySelector("#about")?.scrollIntoView({behavior:"smooth"})} style={{cursor:"pointer"}}/>
                </motion.div>
            
        </section>);
}
export default Home