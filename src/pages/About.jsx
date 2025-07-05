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
      detail: "Focused on systems design, software engineering principles, and modern development practices.",
    },
    {
      institution: "Rashid Minhas Higher Secondary School, Alipur",
      degree: "Certificate of Higher Education (Matriculation)",
      year: "05/2019",
      detail: "Strong academic base with emphasis on science and math subjects.",
    },
    {
      institution: "Rashid Minhas Higher Secondary School, Alipur",
      degree: "Pre-Engineering",
      year: "08/2021",
      detail: "Specialized in physics and mathematics for a foundation in engineering.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
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
        <p className="text-slate-400 text-lg leading-relaxed">
          Versatile Engineering Professional and Web Application Developer with expertise in automating infrastructure,
          deploying scalable applications, and managing CI/CD pipelines. Skilled in cloud platforms, containerization,
          and secure, high-performance software delivery. Combines technical strength with creative problem-solving to
          build user-focused, scalable web applications. Collaborative, innovative, and committed to continuous improvement.
        </p>
      </motion.div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-200 mb-4">🎓 Education</h2>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="border-l-4 border-slate-600 pl-4 py-2 hover:shadow-md hover:shadow-blue-500/20 transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg text-slate-100 font-bold hover:text-blue-400 transition-colors duration-200">
                {edu.degree}
              </h3>
              <p className="text-sm text-slate-400">{edu.institution} — <i>{edu.year}</i></p>
              <p className="text-slate-500 mt-1">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-200 mb-4">🛠️ Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between text-slate-300 text-sm font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-slate-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools & Tech */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-200 mb-4">🧰 Tools & Technologies</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {["React", "JavaScript", "TailwindCSS", "Node.js", "MongoDB", "Git", "GitHub", "Figma", "REST APIs", "Firebase", "Linux", "CI/CD"].map((tool, i) => (
            <Badge
              variant="secondary"
              key={i}
              className="transition-all duration-200 hover:scale-105 hover:shadow-md shadow-blue-400/20"
            >
              {tool}
            </Badge>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-200 mb-4">📜 Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 border border-slate-700 rounded-xl bg-slate-900 hover:bg-slate-800 transition-all shadow-md shadow-sky-500/10"
          >
            <h3 className="text-slate-100 font-semibold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
              Front-End Developer – Meta
            </h3>
            <p className="text-slate-400 text-sm">Issued: June 2024</p>
            <a href="#" className="text-blue-400 underline text-sm mt-2 inline-block">View Certificate</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
