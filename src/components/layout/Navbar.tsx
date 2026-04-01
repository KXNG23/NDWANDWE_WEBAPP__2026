import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://lh3.googleusercontent.com/d/1EVfCt7yLEnHxNX2yxAy4TQ9T7XIUY6bf";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img 
              src={LOGO_URL} 
              alt="Logo" 
              whileHover={{ scale: 1.05 }}
              className="h-20 md:h-24 w-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-[#76b07d]" : "text-white/80 hover:text-[#76b07d]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-[#76b07d] text-white px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-[#659a6b] transition-all shadow-lg shadow-green-900/10 uppercase tracking-widest">
              GET QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 p-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-lg font-medium ${
                isActive(link.path) ? "text-[#76b07d]" : "text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)} 
            className="text-lg font-bold text-[#76b07d] uppercase tracking-widest"
          >
            GET QUOTE
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
