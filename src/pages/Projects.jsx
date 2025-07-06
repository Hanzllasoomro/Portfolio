import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const allProjects = [
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    tags: ["React", "TailwindCSS"],
    link: "https://hanzllasoomro.vercel.app/",
  },
  {
    title: "E-Commerce App",
    image: "/images/ecommerce.png",
    tags: ["React", "Firebase"],
    link: "https://www.hyperemporium.co.site/",
  },
  {
    title: "Admin Dashboard",
    image: "https://i.imgur.com/mvxUZzC.png",
    tags: ["React", "Chart.js"],
    link: "https://example.com",
  },
  {
    title: "Hybrid Network Services Deployment",
    image: "/images/HNS.avif",
    tags: ["Networking", "Linux", "Security"],
    link: "#",
  },
  {
    title: "Secure Multi-Service Lab",
    image: "/images/Overall-architecture-of-the-ReLOAD-remote-operated-lab-system-showing-connections-of.png",
    tags: ["Virtualization", "DevOps", "Security"],
    link: "#",
  },
  {
    title: "Markshadows (Ecommerce Website)",
    image: "https://i.imgur.com/hAKRczG.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Uber Clone",
    image: "/images/uber.png",
    tags: ["React", "Node.js", "Client-Server"],
    link: "#",
  },
  {
    title: "Airbnb Clone",
    image: "/images/airbnb.png",
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
  "Virtualization",
];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="px-6 py-16 sm:px-10 md:px-20 transition-colors duration-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        My Projects
      </motion.h2>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {tagOptions.map((tag, i) => (
          <Badge
            key={i}
            variant={activeTag === tag ? "outline" : "secondary"}
            className={`cursor-pointer transition-colors duration-300 ${
              activeTag === tag
                ? "border-blue-500 text-blue-500 dark:text-blue-400"
                : "text-slate-800 dark:text-slate-300 bg-slate-200 dark:bg-slate-700"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-500"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    className="text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
