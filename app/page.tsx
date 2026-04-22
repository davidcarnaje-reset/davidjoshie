"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, useGLTF, Text, Html } from '@react-three/drei';
import { Typewriter } from 'react-simple-typewriter';
import * as THREE from 'three';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Icons for Hero
import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiMysql, SiJavascript } from 'react-icons/si';
import { Wrench } from 'lucide-react';

function AvatarModel() {
  const { scene } = useGLTF('/models/avatar.glb');
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.1);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 20, 0.1);
    }
  });
  return <group ref={group}><primitive object={scene} scale={1.5} position={[0, -0.8, 0]} /></group>;
}

function TechOrbit() {
  const orbitRef = useRef<THREE.Group>(null);
  const techIcons = [
    { name: 'React', icon: <FaReact size={28} color="#61DAFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={28} color="#ffffff" /> },
    { name: 'PHP', icon: <FaPhp size={28} color="#777BB4" /> },
    { name: 'MySQL', icon: <SiMysql size={28} color="#4479A1" /> },
    { name: 'Flutter', icon: <SiFlutter size={28} color="#02569B" /> },
    { name: 'HTML', icon: <FaHtml5 size={28} color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={28} color="#1572B6" /> },
    { name: 'JavaScript', icon: <SiJavascript size={28} color="#F7DF1E" /> },
    { name: 'Java', icon: <FaJava size={28} color="#007396" /> },
    { name: 'PC Repair', icon: <Wrench size={28} color="#A0AEC0" /> },
  ];
  const radius = 3.5;
  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += 0.002; 
      orbitRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15; 
    }
  });
  return (
    <group ref={orbitRef} position={[0, 0.5, -6]}>
      {techIcons.map((item, index) => {
        const angle = (index / techIcons.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle * 4) * 1.5;
        return (
          <Html key={index} position={[x, y, z]} transform sprite zIndexRange={[100, 0]}>
            <div className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {item.icon}
            </div>
          </Html>
        );
      })}
    </group>
  );
}

export default function Home() {
  return (
    <main className="relative w-full bg-[#030303] text-white overflow-x-hidden scroll-smooth">
      <Navbar />
      <section id="home" className="relative h-screen w-full flex flex-col">
        <div className="absolute top-24 md:top-28 left-0 w-full flex flex-col items-center z-20 pointer-events-none">
            <h2 className="text-blue-500 font-mono text-sm md:text-xl tracking-[0.3em] font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">HELLO, I AM</h2>
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 40 }} gl={{ alpha: true }}> 
            <ambientLight intensity={0.5} /><pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <Environment preset="city" /> 
              <mesh position={[0, 0.5, -6]}>
                <sphereGeometry args={[2.5, 64, 64]} /><MeshDistortMaterial color="#00185e" speed={2} distort={0.5} radius={1} opacity={0.8} transparent />
              </mesh>
              <TechOrbit />
              <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                <Text position={[0, 1.4, -2]} fontSize={1.0} color="#ffffff" fillOpacity={0.85} textAlign="center" lineHeight={0.8} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjQ.ttf">
                  DAVID{"\n"}JOSH
                </Text>
              </Float>
              <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}><AvatarModel /></Float>
            </Suspense>
          </Canvas>
        </div>
        <div className="absolute bottom-[8%] md:bottom-[10%] left-0 w-full flex flex-col items-center z-20 pointer-events-none px-4 text-center">
          <div className="text-xl md:text-3xl font-light text-slate-200 drop-shadow-lg mb-6 bg-black/30 px-6 py-2 rounded-full backdrop-blur-md border border-white/10 pointer-events-auto hover:bg-white/10">
            <Typewriter words={['Full-Stack Developer', 'Next.js & PHP Expert', 'Magna Cum Laude']} loop={0} cursor cursorStyle='|' typeSpeed={50} />
          </div>
          <div className="flex gap-4 pointer-events-auto">
            <a href="#about" className="px-6 py-3 md:px-8 md:py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">View About</a>
            <a href="#skills" className="px-6 py-3 md:px-8 md:py-3 border border-white/20 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 shadow-lg bg-black/40">View Skills</a>
          </div>
        </div>

    </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}