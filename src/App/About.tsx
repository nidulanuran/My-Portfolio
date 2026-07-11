import { motion } from 'motion/react'
import { GraduationCap,MapPin,Calendar, icons } from 'lucide-react'
import ProfilePic from '../assets/Profile Pic.png'
import CV from '../assets/Nidula.pdf'


function About(){

    return(
        <section id='about' className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
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
                        About Me
                    </h2>

                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                    >
                        <div className="relative">
                            <div className="w-full aspect-square max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border border-[#00d4ff]/15">

                                <img 
                                    src={ProfilePic}
                                    alt="Profile Picture"
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/40 to-transparent" />

                            </div>

                            <div className="absolute -bottom-3 -right-3 w-full max-w-sm h-full rounded-2xl border-none border-[#7c3aed]/30 -z-10" />

                        </div>

                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="space-y-6"
                    >
                        <p
                        className="text-[#7a8ba8] leading-relaxed text-base"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                        I'm a third year AI Engineering student at SLIIT with a deep passion for
                        building systems that think. My work spans from training custom
                        language models to deploying production-grade ML pipelines that
                        actually scale.
                        </p>
                        <p
                        className="text-[#7a8ba8] leading-relaxed text-base"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                        I believe the most exciting frontier is where rigorous
                        engineering meets frontier AI research systems that are not just
                        smart, but reliable, efficient, and aligned with human intent.
                        </p>

                        <div className="space-y-3 pt-2">
                            {[
                                {
                                    icon:GraduationCap,
                                    text:"Bsc(Hons) in Information Technology Specialized in Artificial Intelligence"   
                                },
                                {
                                    icon:MapPin,
                                    text:"Colombo,Sri Lanka. Open to Remote"
                                },
                                {
                                    icon:Calendar,
                                    text:"Available for internships"
                                }
                            ]
                            .map(({icon:Icon,text})=>
                            <div key={text} className="flex items-center gap-3">
                                <Icon size={16} className="text-[#00d4ff] shrink-0" />

                                <span className="text-[#e8edf5] text-sm"
                                      style={{ fontFamily: "'Inter', sans-serif" }}
                                      >
                                        {text}
                                </span>
                            </div>
                                )
                            }
                        </div>

                        <a href={CV} download
                           className="inline-flex items-center gap-2 mt-2 px-6 py-3 border border-[#00d4ff]/40 text-[#00d4ff] text-sm rounded hover:bg-[#00d4ff]/10 transition-colors duration-200"
                           style={{ fontFamily: "'Inter', sans-serif" }}
                           >
                            Download Resume
                        </a>

                    </motion.div>

                </div>


            </div>

        </section>
    )
}
export default About