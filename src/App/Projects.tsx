import {motion,AnimatePresence} from "motion/react"
import { AiFillGithub } from "react-icons/ai"
import { ExternalLink,Brain,Bot,Database,Eye } from "lucide-react"
import EquieHireImg from '../assets/equihire.png'
import VSRMSImg from '../assets/VSMRS_Img.png'

const projects=[
    {
        id:1,
        title:"Multi Model RAG System",
        description:"An end-to-end Retrieval-Augmented Generation system that ingests PDF documents and enables conversational, context-aware Q&A over their combined text, tables, and images. ",
        tags:["Python","LangChain","Unstructured","HuggingFace","ChromaDB","Groq"],
        icon:Bot,
        image:"https://images.unsplash.com/photo-1677784976154-816c3ceca511?w=800&h=450&fit=crop&auto=format",
        github:"https://github.com/nidulanuran/Multi-Model-RAG-System.git",
        demo:"",
        featured:false
    },
    {
        id:2,
        title:"RAG System",
        description:"An end-to-end Retrieval-Augmented Generation system that ingests text files and enables semantic question-answeringover them. The ingestion pipeline loads text files, splits them into chunks, and embeds them into apersistent vector database, while the retrieval pipeline performs similarity search to fetch the most relevant chunks for a user query. ",
        tags:["Python","LangChain","HuggingFace","ChromaDB","Groq"],
        icon:Brain,
        image:"https://images.unsplash.com/photo-1757466762489-52fea38071ad?w=800&h=450&fit=crop&auto=format",
        github:"https://github.com/nidulanuran/RAG-System.git",
        demo:"",
        featured:false
    },
    {
        id:3,
        title:"EquiHire-Core: The Agentic Bias Firewall",
        description:"Detect cognitive biases in technical recruitment to notify candidates of assessment results, assign personalized growth feedback, and track the hiring pipeline of evaluated individuals. ",
        tags:["Ballerina" , "Google Gemini API" , "HuggingFace" ,"React  + TypeScript + Vite" , " Supabase" , "PostgreSQL" ,  "WSO2 Asgardeo" , "Cloudflare R2"],
        icon:Eye,
        image:EquieHireImg,
        github:"https://github.com/nidulanuran/EquiHire-Core.git",
        demo:"https://equihire-core.vercel.app/",
        featured:true
    },
    {
        id:4,
        title:"Vehicle Service & Repair Management System (VSRMS)",
        description:"VSRMS is a full-stack mobile application connecting vehicle owners with service workshops. It provides vehicle management, appointment booking, a full service history log, workshop discovery with ratings, and a location-based 'find nearest workshop' feature. ",
        tags:["React Native (Expo)" , "Node.js + Express" , "MongoDB Atlas" ,"Asgardeo (WSO2) OIDC / OAuth 2.0" , "Cloudflare R2"],
        icon:Database,
        image:VSRMSImg,
        github:"https://github.com/nidulanuran/vehicle-repair-rms.git",
        demo:"",
        featured:true
    }
]

function Projects(){

    return(
        <section id="projects" className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
                >
                    <h2
                    className="text-3xl md:text-4xl text-white mt-3"
                    style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700 }}
                    >
                        My Projects
                    </h2>

                </motion.div>
            </div>

            <AnimatePresence mode="popLayout">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project,i)=>{
                        const Icon=project.icon
                        return(
                            <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="group bg-[#0c1526] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00d4ff]/20 transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-44 overflow-hidden bg-[#0f1a2e]">
                                    <img src={project.image}
                                         alt={project.title}
                                         className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                                         />
                                         <div className="absolute inset-0 bg-gradient-to-t from-[#0c1526] via-transparent to-transparent"/>
                                         {project.featured && (
                                            <span
                                            className="absolute top-3 left-3 px-2 py-0.5 bg-[#00d4ff]/20 border border-[#00d4ff]/40 text-[#00d4ff] text-xs rounded"
                                            style={{ fontFamily: "'Geist Mono', monospace" }}
                                            >
                                                Featured
                                            </span>
                                         )}
                                         <div className="absolute bottom-3 right-3 p-2 bg-[#050a14]/60 rounded-lg">
                                            <Icon size={18} className="text-[#00d4ff]"/>
                                         </div>

                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <h3 
                                    className="text-white mb-2 leading-snug"
                                    style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                    className="text-[#7a8ba8] text-sm leading-relaxed flex-1"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 my-4">
                                        {project.tags.map((tag)=>(
                                        <span
                                        key={tag} 
                                        className="px-2 py-0.5 bg-[#111d33] text-[#7a8ba8] text-xs rounded"
                                        style={{ fontFamily: "'Geist Mono', monospace" }}>
                                            {tag}
                                        </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 pt-2 border-t border-white/5">
                                        <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[#7a8ba8] hover:text-[#e8edf5] text-sm transition-colors"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            <AiFillGithub size={14}/> Code
                                        </a>

                                        {project.demo && (
                                            <a 
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-[#7a8ba8] hover:text-[#00d4ff] text-sm transition-colors"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                            >
                                                <ExternalLink size={14}/>Live Link
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                    )}
                </div>
            </AnimatePresence>
        </section>
    )
}
export default Projects