import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react"; // For icons (make sure you have lucide-react installed)

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300"
        >
          Hanzlla Soomro
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300",
                location.pathname === link.path &&
                  "text-slate-900 dark:text-white font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Resume Button (Desktop only) */}
          <a href="/HanzllaSoomro.pdf" className="hidden md:block">
            <Button
              size="sm"
              variant="outline"
              className="transition-colors duration-300 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Resume
            </Button>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded text-slate-800 dark:text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on navigation
              className={cn(
                "block text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300",
                location.pathname === link.path &&
                  "text-slate-900 dark:text-white font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Resume Button (Mobile) */}
          <a href="/HanzllaSoomro.pdf" className="block">
            <Button
              size="sm"
              variant="outline"
              className="mt-2 w-full transition-colors duration-300 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Resume
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
