import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, Github, Linkedin } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Contact() {
  return (
    <section className="relative py-16 px-6 sm:px-10 md:px-20 transition-colors duration-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 min-h-screen">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-10 right-10 h-40 w-40 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* 3D Sphere */}
      <div className="absolute top-10 left-10 w-40 h-40 hidden md:block">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 1]} />
          <Sphere visible args={[1, 100, 200]} scale={1.2}>
            <MeshDistortMaterial
              color="#ec4899"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 drop-shadow"
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto space-y-6"
        action="https://formspree.io/f/mkgbazro"
        method="POST"
      >
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <div>
          <label className="block text-sm mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-lg border text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 transition-colors duration-500"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg border text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 transition-colors duration-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-3 rounded-lg border text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 transition-colors duration-500"
            placeholder="How can I help you?"
            required
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
      </motion.form>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-slate-500 dark:text-slate-400 mb-4">Or find me on</p>
        <div className="flex justify-center gap-6 text-slate-500 dark:text-slate-400 transition-colors duration-500">
          <a
            href="mailto:you@example.com"
            className="hover:text-pink-500 transition-colors duration-300"
            title="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/Hanzllasoomro"
            target="_blank"
            className="hover:text-pink-500 transition-colors duration-300"
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            className="hover:text-pink-500 transition-colors duration-300"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
