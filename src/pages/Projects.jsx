import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const allProjects = [
  {
    title: "Portfolio Website",
    image: "https://drive.google.com/file/d/10yrqVlqYAJeYsm4u11I73Eu5M76zJvSG/view?usp=drive_link",
    tags: ["React", "TailwindCSS"],
    link: "https://hanzllasoomro.vercel.app/",
  },
  {
    title: "E-Commerce App",
    image: "https://drive.google.com/file/d/1OMyjga4dyVS4ObW1D-YZIdeSB8nLuRx6/view?usp=sharing",
    tags: ["React", "Firebase"],
    link: "https://www.hyperemporium.co.site/",
  },
  {
    title: "Admin Dashboard",
    image: "/images/dashboard.png",
    tags: ["React", "Chart.js"],
    link: "https://example.com",
  },
  {
    title: "Hybrid Network Services Deployment",
    image: "https://drive.google.com/file/d/1LSEy1gVuens8W61AwnhaiEt1zh-ag8Rb/view?usp=sharing",
    tags: ["Networking", "Linux", "Security"],
    link: "#",
  },
  {
    title: "Secure Multi-Service Lab",
    image: "/images/project2.png",
    tags: ["Virtualization", "DevOps", "Security"],
    link: "#",
  },
  {
    title: "Markshadows (Ecommerce Website)",
    image: "/images/project3.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Uber Clone",
    image: "https://drive.google.com/file/d/1Q_V_Zh1icNYviK3GJvef7JSMh3ZPhrOo/view?usp=sharing",
    tags: ["React", "Node.js", "Client-Server"],
    link: "#",
  },
  {
    title: "Airbnb Clone",
    image: "https://drive.google.com/file/d/1Sj33gikAKvRl9JincEYcV-EGxAGITiMP/view?usp=sharing",
    tags: ["React", "Node.js", "Client-Server"],
    link: "#",
  },
];

const tagOptions = [
  "All",
  "React", 
  "TailwindCSS", 
  "Firebase", 
  "Chart.js",
  "Node.js",
  "MongoDB",
  "Client-Server",
  "Networking",
  "Security",
  "DevOps",
  "Linux",
  "Virtualization",];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="px-6 py-16 sm:px-10 md:px-20 text-slate-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-center"
      >
        My Projects
      </motion.h2>

      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {tagOptions.map((tag, i) => (
          <Badge
            key={i}
            variant={activeTag === tag ? "outline" : "secondary"}
            className="cursor-pointer"
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden shadow-lg transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx}>{tag}</Badge>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
