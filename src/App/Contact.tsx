import { useState } from "react"
import {motion} from "motion/react"
import {Send,Mail} from "lucide-react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Contact(){

    const [form,setForm]=useState({name:"",email:"",message:""})
    const [status,setStatus]=useState<"idle"|"sending"|"sent">("idle")

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        setStatus("sending")
        setTimeout(()=>{
            setStatus("sent")
            setForm({name:"",email:"",message:""})
        },1400)
        
    }

    return(
        <section id="contact" className="py-28 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
                >
                    <h2
                    className="text-3xl md:text-4xl text-white mt-3"
                    style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700 }}
                    >
                        Contacts
                    </h2>

                    <p
                    className="text-[#7a8ba8] mt-4 max-w-xl"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                    I'm actively looking for research opportunities, AI engineering
                    internships, and interesting collaborations. Drop me a message.
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">

                    <motion.form
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    >
                        {[
                            {id:"name",label:"Name",type:"text",placeholder:"Jane Smith"},
                            {id:"email",label:"Email",type:"text",placeholder:"jane@company.com"}
                        ]
                        .map((f)=><div key={f.id}>

                                    <label 
                                    htmlFor={f.id}
                                    className="block text-[#7a8ba8] text-sm mb-2"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {f.label}
                                    </label>

                                    <input
                                    key={f.id}
                                    type={f.type}
                                    placeholder={f.placeholder}
                                    value={form[f.id as keyof typeof form]}
                                    onChange={(e)=>setForm({...form,[f.id]:e.target.value})}
                                    required
                                    className="w-full bg-[#0c1526] border border-white/10 rounded-lg px-4 py-3 text-[#e8edf5] placeholder-[#3a4a60] text-sm focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                    />
                                  </div>
                                )
                        }

                        <div>
                            <label 
                            htmlFor="message"
                            className="block text-[#7a8ba8] text-sm mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            >

                                Message

                            </label>

                            <textarea 
                            id="message"
                            value={form.message}
                            rows={5}
                            placeholder="Tell me about the opportunity..."
                            onChange={(e)=>setForm({...form,message:e.target.value})}
                            required
                            className="w-full bg-[#0c1526] border border-white/10 rounded-lg px-4 py-3 text-[#e8edf5] placeholder-[#3a4a60] text-sm focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            />
                            
                        </div>

                        <button
                        type="submit"
                        disabled={status !=="idle"}
                        className="flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#050a14] rounded-lg text-sm hover:bg-[#00b8d9] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}

                        >
                        {
                            status=="sending" ?(
                                <>
                                    <span className="w-4 h-4 border-2 border-[#050a14]/30 border-t-[#050a14] rounded-full animate-spin">
                                    Sending...</span>
                                </>
                            ):

                            status=="sent"?(
                                "Message Sent ✓"
                            ):

                            <>
                                <Send size={15}/>
                                    Send Message
                                
                            </>                                                       
                        }
                        </button>

                    </motion.form>

                    <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-8"
                    >
                        <div className="bg-[#0c1526] border border-white/5 rounded-2xl p-6">
                        
                            <h3
                            className="text-white mb-4 text-sm"
                            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                            >
                                Get In Touch
                            </h3>

                            <div className="space-y-3">

                                <a 
                                href="mailto:nidulanura22@gmail.com"
                                className="flex items-center gap-3 text-[#7a8ba8] hover:text-[#00d4ff] text-sm transition-colors"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                                >

                                <Mail/>nidulanuran22@gmail.com
                                </a>

                            </div>

                        </div>

                        <div className="bg-[#0c1526] border border-white/5 rounded-2xl p-6">
                        
                            <h3
                            className="text-white mb-4 text-sm"
                            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
                            >Find Me Online
                            </h3>

                            <div className="space-y-3">
                                {
                                    [
                                        {icon:AiFillGithub,label:"github.com/nidulanuran",href:"https://github.com/nidulanuran"},
                                        {icon:AiFillLinkedin,label:"linkedin.com/in/nidula-nuran",href:"https://linkedin.com/in/nidula-nuran"}
                                    ]
                                    .map(({icon:Icon,label,href})=>(
                                        <a 
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-[#7a8ba8] hover:text-[#00d4ff] text-sm transition-colors"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                        > 
                                        <Icon size={16} className="text-[#00d4ff]" /> 
                                        {label}
                                        
                                        </a>
                                    ))
                                }
                            </div>

                        </div>

                        <div
                        className="border border-[#00d4ff]/20 rounded-2xl p-6"
                        style={{ background: "linear-gradient(135deg, #00d4ff08, #7c3aed08)" }}
                        >
                            <p
                            className="text-[#7a8ba8] text-sm leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Currently Available For{" "}
                                <span className="text-[#00d4ff]">Internships</span>{". "}
                                Response time usually within 24 hours.
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )

}
export default Contact