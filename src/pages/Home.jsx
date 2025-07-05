import { Button } from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 sm:px-8 min-h-screen">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute right-10 top-10 w-48 h-48 hidden md:block">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 1]} />
          <Sphere visible args={[1, 100, 200]} scale={1.2}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg mb-4"
      >
        Hi, I'm Hanzlla 👋
      </motion.h1>

      {/* Typed Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-lg sm:text-xl text-slate-400 mb-4 font-medium"
      >
        <span>
          <Typewriter
            words={[
              'Full Stack Developer 💻',
              'Open Source Contributor 🌍',
              'DevOps Enthusiast ⚙️',
              'Linux Pro 🐧'
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </span>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="text-slate-400 max-w-xl leading-relaxed"
      >
        Passionate about building clean UIs, automating infrastructure, and crafting performance-driven web experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <Button
          size="lg"
          onClick={() => navigate("/projects")}
          className="gap-2 group transition-all hover:scale-105"
        >
          Explore My Work
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </Button>

        <a href="/resume.pdf" download>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 group transition-all hover:scale-105"
          >
            Download Resume
            <Download size={18} />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
