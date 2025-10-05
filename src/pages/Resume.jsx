import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download, Code, Github, Briefcase, Network } from "lucide-react";

const resumeItems = [
  {
    title: "Full Stack Developer",
    icon: <Code size={24} className="text-blue-500 dark:text-blue-400" />,
    company: "DSDIGITALS - Remote (Germany)",
    date: "Jun 2025 - Sep 2025",
    description:
      "As a Full Stack Developer at DSDigitals, I work on designing, developing, and deploying high-performance web applications using modern technologies. My role involves building dynamic and responsive user interfaces with Next.js, React, and Tailwind CSS, developing RESTful APIs with Node.js and Express, and managing databases using MongoDB and MySQL. I collaborate with designers and backend teams to implement new features, improve scalability, and enhance overall user experience. I also maintain CI/CD pipelines, participate in code reviews, and follow agile development practices to ensure efficient and reliable software delivery.",
  },
  {
    title: "Full Stack Developer Intern",
    icon: <Code size={24} className="text-blue-500 dark:text-blue-400" />,
    company: "Tech Innovators",
    date: "Jun 2023 - Sep 2023",
    description:
      "Built dynamic components using React.js, integrated REST APIs, improved load times by 40%, and contributed to UI redesign.",
  },
  {
    title: "Open Source Contributor",
    icon: <Github size={24} className="text-purple-500 dark:text-purple-400" />,
    company: "GitHub Projects",
    date: "2022 - Present",
    description:
      "Contributed to UI/UX improvements, accessibility fixes, and documentation across multiple JavaScript repositories.",
  },
  {
    title: "Freelancer",
    icon: <Briefcase size={24} className="text-pink-500 dark:text-pink-400" />,
    company: "Fiverr - Remote, Pakistan",
    date: "Jul 2023 – Present",
    description:
      "Managed project and web strategic planning, contributed to backend and APIs, built reusable code, laid SEO groundwork, and held client meetings to define design preferences.",
  },
  {
    title: "Trainee Engineer",
    icon: <Network size={24} className="text-green-500 dark:text-green-400" />,
    company: "Agentnoon Inc. - Karachi, Pakistan",
    date: "May 2023 – Nov 2024",
    description:
      "Collaborated with internal support and outsourced service providers to troubleshoot network issues and improve end-user support, leading to increased user satisfaction.",
  },
];

export default function Resume() {
  return (
    <section className="relative py-24 px-6 sm:px-10 md:px-24 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200 transition-colors duration-500 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] bg-blue-400 dark:bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-center mb-12 tracking-tight"
      >
        My Experience
      </motion.h2>

      {/* Why Hire Me Section */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl mx-auto text-center text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
      >
        I bring a versatile blend of frontend and backend skills, a strong
        open-source ethic, and a passion for efficient, scalable systems.
        Whether it's crafting pixel-perfect UIs or automating deployments, I
        love turning ideas into polished, production-ready solutions.
      </motion.p>

      {/* Resume Download */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center mb-14"
      >
        <a
          href="/resumes/hanzlla-resume.pdf"
          download
          aria-label="Download Resume PDF"
        >
          <Button className="gap-2 px-6 py-3 text-base hover:scale-105 transition-transform duration-300">
            <Download size={18} />
            Download Resume
          </Button>
        </a>
      </motion.div>

      {/* Resume Cards */}
      <div className="grid gap-10 max-w-5xl mx-auto">
        {resumeItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4, type: "spring" }}
            className="bg-slate-100 dark:bg-slate-800 hover:dark:bg-slate-700 hover:bg-slate-200 transition-colors duration-300 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700/60"
          >
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100">
                {item.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              <span className="font-medium">{item.company}</span> —{" "}
              <i>{item.date}</i>
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
