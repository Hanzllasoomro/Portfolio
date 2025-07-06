import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

const resumeItems = [
  {
    title: "Full Stack Developer Intern",
    company: "Tech Innovators",
    date: "Jun 2023 - Sep 2023",
    description:
      "Built dynamic components using React.js, integrated REST APIs, improved load times by 40%, and contributed to UI redesign."
  },
  {
    title: "Open Source Contributor",
    company: "GitHub Projects",
    date: "2022 - Present",
    description:
      "Contributed to UI/UX improvements, accessibility fixes, and documentation across multiple JavaScript repositories."
  },
  {
    title: "Freelancer",
    company: "Fiverr - Remote, Pakistan",
    date: "Jul 2023 – Present",
    description:
      "Managed project and web strategic planning, contributed to backend and APIs, built reusable code, laid SEO groundwork, and held client meetings to define design preferences.",
  },
  {
    title: "Trainee Engineer",
    company: "Agentnoon Inc. - Karachi, Pakistan",
    date: "May 2023 – Nov 2024",
    description:
      "Collaborated with internal support and outsourced service providers to troubleshoot network issues and improve end-user support, leading to increased user satisfaction.",
  }
];

export default function Resume() {
  return (
    <section className="py-16 px-6 sm:px-10 md:px-20 text-slate-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
      >
        Resume
      </motion.h2>

      <div className="flex justify-center mb-10">
        <a href="https://drive.google.com/file/d/1W1lwIz01CZmc6B3O9wS3mc3b40k0B4R_/view?usp=drive_link" download>
          <Button className="gap-2">
            <Download size={18} /> Download PDF
          </Button>
        </a>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {resumeItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-slate-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl text-slate-100 font-semibold">{item.title}</h3>
            <p className="text-sm text-slate-400">{item.company} — <i>{item.date}</i></p>
            <p className="text-slate-300 mt-2 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}