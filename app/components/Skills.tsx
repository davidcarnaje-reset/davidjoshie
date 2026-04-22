"use client";
import React from 'react';
// Idinagdag natin ang 'Variants' dito para mawala ang TypeScript error!
import { motion, Variants } from 'framer-motion';
import { Layout, Database, Smartphone, Cpu } from 'lucide-react';
import { FaReact, FaPhp, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiFlutter, SiJavascript, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  // Nilagyan natin ng : Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Nilagyan natin ng : Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#030303] py-24 z-30 flex items-center justify-center overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm md:text-base tracking-[0.3em] font-bold mb-4 uppercase"
          >
            My Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-serif italic tracking-tight"
          >
            Technical Skills.
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          <motion.div variants={itemVariants} className="md:col-span-2 bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:border-blue-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-2xl">
                <Layout className="text-blue-400 w-8 h-8" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white">Frontend Development</h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SkillBar icon={<FaReact className="text-[#61DAFB]" />} name="React" level={90} />
              <SkillBar icon={<SiNextdotjs className="text-white" />} name="Next.js" level={85} />
              <SkillBar icon={<SiJavascript className="text-[#F7DF1E]" />} name="JavaScript" level={88} />
              <SkillBar icon={<SiTailwindcss className="text-[#38B2AC]" />} name="Tailwind CSS" level={92} />
              <div className="sm:col-span-2">
                <SkillBar icon={<div className="flex gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></div>} name="HTML / CSS" level={95} />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#0c0c0e] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:border-purple-500/30 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-500/10 rounded-2xl">
                  <Smartphone className="text-purple-400 w-8 h-8" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">Mobile</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Building responsive and natively compiled applications for mobile from a single codebase.
              </p>
            </div>
            
            <div className="space-y-6">
              <SkillBar icon={<SiFlutter className="text-[#02569B]" />} name="Flutter" level={80} />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#121214] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:border-orange-500/30 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-500/10 rounded-2xl">
                  <Cpu className="text-orange-400 w-8 h-8" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">Hardware & IT</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Expertise in system diagnostics, component replacement, and optimizing computer hardware performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-4 py-2 bg-white/5 rounded-full text-slate-300 text-xs font-mono border border-white/10">PC Assembly</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-slate-300 text-xs font-mono border border-white/10">Laptop Repair</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-slate-300 text-xs font-mono border border-white/10">OS Troubleshooting</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-slate-300 text-xs font-mono border border-white/10">Maintenance</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 bg-[#0f0f11] border border-white/10 p-8 md:p-10 rounded-[2rem] hover:border-emerald-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-2xl">
                <Database className="text-emerald-400 w-8 h-8" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white">Backend & Database</h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SkillBar icon={<FaPhp className="text-[#777BB4]" />} name="PHP" level={85} />
              <SkillBar icon={<SiMysql className="text-[#4479A1]" />} name="MySQL" level={82} />
              <div className="sm:col-span-2">
                <SkillBar icon={<FaJava className="text-[#007396]" />} name="Java" level={75} />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ icon, name, level }: { icon: React.ReactNode, name: string, level: number }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center text-lg">{icon}</div>
          <span className="text-white font-medium text-sm md:text-base">{name}</span>
        </div>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-blue-500/50 to-blue-400 rounded-full"
        />
      </div>
    </div>
  );
}