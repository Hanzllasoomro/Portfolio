import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Linux Administration", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "Web Penetration Testing", level: 70 },
    { name: "Web Hosting", level: 85 },
  ];

  const education = [
    {
      institution: "Mehran UET, Jamshoro",
      degree: "BE in Software Engineering",
      year: "01/2026 (Expected)",
      detail:
        "Focused on systems design, software engineering principles, and modern development practices.",
    },
    {
      institution: "Rashid Minhas Higher Secondary School, Alipur",
      degree: "Certificate of Higher Education (Matriculation)",
      year: "05/2019",
      detail:
        "Strong academic base with emphasis on science and math subjects.",
    },
    {
      institution: "Rashid Minhas Higher Secondary School, Alipur",
      degree: "Pre-Engineering",
      year: "08/2021",
      detail:
        "Specialized in physics and mathematics for a foundation in engineering.",
    },
  ];

  const certifications = [
    {
      title: "Software Engineer – HackerRank",
      issuer: "HackerRank",
      date: "July 2025",
      link: "https://www.hackerrank.com/certificates/iframe/853e246eeb7d",
    },
    {
      title:"SQL INJECTION DEFENSE : SECURE APPS LIKE A PRO",
      issuer: "Google Devloper Group (DevTown)",
      date: "Aug 2025",
      link: "https://cert.devtown.in/verify/Z2wnUse",
    },
    {
      title:" Linux Essentials",
      issuer: "CISCO",
      date: "Aug 2025",
      link: "https://www.credly.com/badges/b764bdaf-26d1-4e34-abb4-7a838c0b47db ",
    },
    {
      title:"SQL INJECTION DEFENSE : SECURE APPS LIKE A PRO",
      issuer: "Microsoft Student Chapter - MSIT (DevTown)",
      date: "Aug 2025",
      link: "https://www.cert.devtown.in/verify/1ybRYS",
    },
    {
      title:"Tableau - Data Visualization",
      issuer: "SLillEcted",
      date: "May 2025",
      link: "https://skillected.graphy.com/share-certificate?serialno=GH48DSDZ",
    },
    
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      date: "July 2025",
      link: "https://www.hackerrank.com/certificates/iframe/afdf7bf1eaf9",
    },
    {
      title: "Software Engineer Intern - HackerRank",
      issuer: "HackerRank",
      date: "July 2025",
      link: "https://www.hackerrank.com/certificates/iframe/c365095f557c",
    },
    
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 transition-colors duration-500">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-2">
          About Me
        </h1>
        <p className="text-slate-700 dark:text-slate-400 text-lg leading-relaxed transition-colors duration-500">
          Versatile Engineering Professional and Web Application Developer...
        </p>
      </motion.div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 transition-colors duration-500">
          🎓 Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="border-l-4 border-slate-300 dark:border-slate-600 pl-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-md transition-all duration-500 hover:shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg text-slate-800 dark:text-slate-100 font-bold hover:text-blue-500 transition-colors duration-200">
                {edu.degree}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {edu.institution} — <i>{edu.year}</i>
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                {edu.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 transition-colors duration-500">
          🛠️ Skills
        </h2>
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between text-slate-700 dark:text-slate-300 text-sm font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress
                value={skill.level}
                className="h-2 bg-slate-300 dark:bg-slate-700 transition-colors duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools & Tech */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 transition-colors duration-500">
          🧰 Tools & Technologies
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {[
            "React",
            "JavaScript",
            "TailwindCSS",
            "Node.js",
            "MongoDB",
            "Git",
            "GitHub",
            "Figma",
            "REST APIs",
            "Firebase",
            "Linux",
            "CI/CD",
          ].map((tool, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="transition-all duration-200 hover:scale-105 hover:shadow-md text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-slate-700"
            >
              {tool}
            </Badge>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 transition-colors duration-500">
          📜 Certifications
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-500 shadow-md"
            >
              <h3 className="font-semibold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
                {cert.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Issued by {cert.issuer} — {cert.date}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 underline text-sm mt-2 inline-block"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
