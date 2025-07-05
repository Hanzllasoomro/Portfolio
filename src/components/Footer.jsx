import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
        <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} Hanzlla Soomro. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <a href="https://github.com/Hanzllasoomro" target="_blank" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
