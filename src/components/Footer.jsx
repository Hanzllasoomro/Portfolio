import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-6 mt-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-slate-600 dark:text-slate-400 text-sm transition-colors duration-500">
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} Hanzlla Soomro. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            to="/privacy"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            Privacy
          </Link>
          <Link
            to="/contact"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
          <a
            href="https://github.com/Hanzllasoomro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
