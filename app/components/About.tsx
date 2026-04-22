"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Wrench, MonitorSmartphone, FileText, Download } from 'lucide-react';
import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiMysql, SiJavascript } from 'react-icons/si';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="relative w-full bg-[#030303] py-24 z-30">
      <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm tracking-[0.3em] font-bold mb-2 uppercase"
          >
            Get to know me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-serif italic tracking-tight"
          >
            About Me.
          </motion.h3>
        </div>

        {/* BENTO GRID OF CARDS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          {/* CARD 1: THE DEVELOPER (Malapad - 2 Columns) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/5 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
            <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20 w-fit mb-6">
              <Code2 className="text-blue-400 w-8 h-8" />
            </div>
            <h4 className="text-3xl font-serif text-white mb-4">The Developer</h4>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              My goal is to build functional, user-friendly, and highly attractive systems. 
              I specialize in applying my computer science knowledge to real-world software 
              development, database management, and community-based system designs.
            </p>
          </motion.div>

          {/* CARD 2: EDUCATION (Square) */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#0c0c0e] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/5 transition-colors group"
          >
            <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20 w-fit mb-6">
              <GraduationCap className="text-purple-400 w-8 h-8" />
            </div>
            <h4 className="text-2xl font-serif text-white mb-4">Education</h4>
            <p className="text-slate-300 font-bold">BS Computer Science</p>
            <p className="text-purple-300/70 text-sm font-mono mb-4 italic leading-tight">Colegio De San Pascual Baylon</p>
            <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
              Magna Cum Laude
            </span>
          </motion.div>

          {/* CARD 3: TECH ARSENAL (Square) */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#0f0f11] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/5 transition-colors"
          >
            <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 w-fit mb-6">
              <Wrench className="text-emerald-400 w-8 h-8" />
            </div>
            <h4 className="text-2xl font-serif text-white mb-6">Tech Arsenal</h4>
            <div className="grid grid-cols-4 gap-4">
               <FaReact className="text-[#61DAFB] w-8 h-8" />
               <SiNextdotjs className="text-white w-8 h-8" />
               <FaPhp className="text-[#777BB4] w-8 h-8" />
               <SiMysql className="text-[#4479A1] w-8 h-8" />
               <SiFlutter className="text-[#02569B] w-8 h-8" />
               <FaJava className="text-[#007396] w-8 h-8" />
               <FaHtml5 className="text-[#E34F26] w-8 h-8" />
               <SiJavascript className="text-[#F7DF1E] w-8 h-8" />
            </div>
          </motion.div>

          {/* CARD 4: TROUBLESHOOTING (Square) */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#121214] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/5 transition-colors"
          >
            <div className="bg-orange-500/10 p-4 rounded-2xl border border-orange-500/20 w-fit mb-6">
              <MonitorSmartphone className="text-orange-400 w-8 h-8" />
            </div>
            <h4 className="text-2xl font-serif text-white mb-4">Hardware</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Highly skilled in Analyzing, Troubleshooting and maintaining PC and Laptop hardware/software issues.
            </p>
          </motion.div>

          {/* CARD 5: CV (Square/Action Card) */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#161619] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/5 transition-colors group flex flex-col justify-between"
          >
            <div>
              <div className="bg-pink-500/10 p-4 rounded-2xl border border-pink-500/20 w-fit mb-6">
                <FileText className="text-pink-400 w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-white mb-2">My Resume</h4>
              <p className="text-slate-400 text-xs">Professional journey in one page.</p>
            </div>
            <a 
              href="/resume.pdf" 
              download 
              className="mt-6 flex items-center justify-center gap-2 py-3 bg-white text-black font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-sm"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}