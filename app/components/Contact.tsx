"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Globe } from 'lucide-react';

export default function Contact() {
  // State para sa form validation gaya ng nasa HTML mo
  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const isFormValid = formState.fullname && formState.email && formState.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#030303] py-24 z-30">
      <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm tracking-[0.3em] font-bold mb-2 uppercase"
          >
            Get in touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-serif italic tracking-tight"
          >
            Contact.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: MAP & INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* GOOGLE MAP BOX */}
            <div className="w-full h-[300px] rounded-[2.5rem] overflow-hidden border border-white/10 grayscale-[1] hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15431.5746764539!2d120.9168!3d14.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzM2LjAiTiAxMjDCsDU1JzAwLjQiRQ!5e0!3m2!1sen!2sph!4v1713830000000!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Mail size={20}/></div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Email Me</p>
                  <p className="text-sm text-white font-medium">carnajedavidjosh@gmail.com</p>
                </div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400"><Globe size={20}/></div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Location</p>
                  <p className="text-sm text-white font-medium">Obando, Bulacan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            {/* Form Title */}
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              Send a Message <div className="h-0.5 w-12 bg-blue-500 rounded-full"></div>
            </h4>

            {/* FORM CONNECTION: Pwede mong palitan ang action URL ng Formspree ID mo */}
            <form action="https://formspree.io/f/xqewgkjz" method="POST" className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <input 
                    type="text" 
                    name="fullname" 
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address"
                    required
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <textarea 
                  name="message" 
                  placeholder="Your Message"
                  rows={5}
                  required
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={!isFormValid}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg ${
                  isFormValid 
                  ? 'bg-white text-black hover:scale-[1.02] active:scale-95 shadow-white/10' 
                  : 'bg-white/10 text-white/30 cursor-not-allowed border border-white/5'
                }`}
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}