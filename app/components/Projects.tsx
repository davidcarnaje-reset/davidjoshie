"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderCode, ChevronRight, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: "sisighans",
    title: "Sisighans",
    subtitle: "Web-based Ordering System",
    description: "Developed an online ordering website for a local food business with admin functionalities for managing menus, customers, and orders. Features a sleek interface for food selection and a robust backend for order tracking.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    mainImage: "/images/sisig.png",
    gallery: ["/images/sisig2.png", "/images/sisig3.png"],
    color: "from-orange-500/20",
    githubLink: "https://github.com/davidcarnaje-reset/sisighanfinal", 
    liveLink: ""
  },
  {
    id: "eidetic",
    title: "Eidetic",
    subtitle: "Printing Service Platform",
    description: "A web-based printing service platform that allows customers to upload files, place print orders online, and pick them up in-store once completed. Implemented simple order tracking and service management features.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    mainImage: "/images/eide.png",
    gallery: ["/images/eide2.png", "/images/eide3.png"],
    color: "from-blue-500/20",
    githubLink: "https://github.com/davidcarnaje-reset/eideticad", 
    liveLink: ""
  },
  {
    id: "pulse",
    title: "Pulse PH",
    subtitle: "Mobile Emergency App",
    description: "Developed a mobile application using Flutter and Firebase to enhance communication and emergency reporting within local barangays. Integrated geolocation verification and real-time alerts.",
    tech: ["Flutter", "Firebase", "Dart", "Geolocation"],
    mainImage: "/images/pulse.png",
    gallery: ["/images/pulse2.png", "/images/pulse3.png"],
    color: "from-red-500/20",
    githubLink: "", 
    liveLink: "https://pulse-ph.flutterflow.app/"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [currentDisplayImage, setCurrentDisplayImage] = useState(projectsData[0].mainImage);

  // Function para sa pag-switch ng project mula sa sidebar
  const handleProjectSwitch = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setCurrentDisplayImage(project.mainImage);
  };

  return (
    <section id="projects" className="relative w-full min-h-screen bg-[#030303] py-24 z-30">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8">
        
        <div className="mb-12">
          <h2 className="text-blue-500 font-mono text-sm tracking-[0.3em] font-bold mb-2 uppercase text-center md:text-left">Selected Works</h2>
          <h3 className="text-white text-5xl md:text-7xl font-serif italic tracking-tight text-center md:text-left">Projects Showcase.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* =========================================================
              MAIN DISPLAY PORTION (Ang Malaking Portion)
              ========================================================= */}
          <div className="lg:col-span-8 bg-[#0a0a0a] rounded-[3rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl">
            {/* BIG IMAGE PREVIEW */}
            <div className="relative h-[300px] md:h-[550px] w-full bg-black/40 p-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDisplayImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full rounded-2xl bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${currentDisplayImage})` }}
                />
              </AnimatePresence>
            </div>

            {/* PROJECT DETAILS */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                <div>
                  <motion.h4 
                    key={`title-${selectedProject.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif italic text-white mb-2"
                  >
                    {selectedProject.title}
                  </motion.h4>
                  <p className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold">{selectedProject.subtitle}</p>
                </div>

                <div className="flex gap-4">
                    {/* GITHUB BUTTON */}
                    <a 
                    href={selectedProject.githubLink} // Ito yung kukuha sa data sa itaas
                    target="_blank" // Para mag-open sa bagong tab
                    rel="noopener noreferrer" 
                    className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-white"
                    >
                        <FaGithub size={22} />
                    </a>

                    {/* VISIT LIVE BUTTON */}
                    <a 
                    href={selectedProject.liveLink} // Ito yung kukuha sa data sa itaas
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                    >
                        Visit Live <Globe size={18} />
                    </a>
                </div>
              </div>

              <motion.p 
                key={`desc-${selectedProject.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-slate-300 text-lg leading-relaxed font-light max-w-3xl"
              >
                {selectedProject.description}
              </motion.p>

              {/* TECH STACK TAGS */}
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                    {t}
                  </span>
                ))}
              </div>

              {/* GALLERY MINIATURES (Interactive) */}
              <div className="mt-12">
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-4">View Gallery</p>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {[selectedProject.mainImage, ...selectedProject.gallery].map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentDisplayImage(img)}
                      className={`w-32 h-20 rounded-xl border-2 transition-all shrink-0 cursor-pointer bg-cover bg-center ${
                        currentDisplayImage === img ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'border-white/10 hover:border-white/30'
                      }`}
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              SIDEBAR SELECTOR (Bento-style list)
              ========================================================= */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => handleProjectSwitch(project)}
                whileHover={{ x: 10 }}
                className={`relative group cursor-pointer p-6 rounded-[2rem] border transition-all duration-300 flex items-center gap-4 ${
                  selectedProject.id === project.id 
                  ? 'bg-white/10 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div 
                  className={`w-16 h-16 rounded-2xl bg-cover bg-center border border-white/10 transition-all duration-500 ${selectedProject.id === project.id ? 'grayscale-0 scale-110' : 'grayscale'}`}
                  style={{ backgroundImage: `url(${project.mainImage})` }} 
                />
                
                <div className="flex-1">
                  <h5 className="text-white font-bold text-lg">{project.title}</h5>
                  <p className="text-slate-500 text-xs font-mono">{project.subtitle}</p>
                </div>

                <ChevronRight className={`transition-transform duration-300 ${selectedProject.id === project.id ? 'text-blue-500 translate-x-2' : 'text-slate-600'}`} />
              </motion.div>
            ))}

            {/* GitHub Action Box */}
            <div className="mt-auto p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex flex-col items-center text-center group">
                <FolderCode className="text-blue-400 w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-white font-bold mb-2">Want to see more?</h5>
                <p className="text-slate-400 text-xs mb-6 italic leading-relaxed">Check out my other repositories and small experiments on GitHub.</p>
                <a href="https://github.com/davidcarnaje-reset" target="_blank" className="w-full text-white bg-blue-600 py-3 rounded-full text-xs font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                    Visit GitHub
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}