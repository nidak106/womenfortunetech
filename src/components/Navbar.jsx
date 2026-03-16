import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG icons

function Navbar({ onInternship }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const colors = {
    navy: "#4A6E9B",
    coral: "#D97B67",
    deepNavy: "#2D4B73",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Moments", path: "/moments" },
    { name: "Ambassadors", path: "/ambassadors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white shadow-md py-3" 
          : "bg-gradient-to-b from-black/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 no-underline group z-50">
          <div className="relative w-10 h-10 flex-shrink-0">
            <img 
              src="/images/logo.jpeg" 
              alt="Logo" 
              className="w-full h-full object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-sm leading-tight transition-colors ${scrolled || menuOpen ? "text-[#2D4B73]" : "text-white"}`}>
              WOMEN FORTUNE
            </span>
            <span className="text-[#D97B67] text-[9px] font-bold tracking-[3px] uppercase">
              TECH
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-bold transition-all no-underline hover:opacity-70 ${
                scrolled ? "text-slate-600" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={onInternship}
            className="text-white text-xs font-black px-6 py-2.5 rounded-full transition-transform hover:scale-105"
            style={{ backgroundColor: colors.coral }}
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X color={colors.deepNavy} size={28} />
          ) : (
            <Menu color={scrolled ? colors.deepNavy : "white"} size={28} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-black no-underline transition-colors"
              style={{ color: colors.deepNavy }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex flex-col gap-4 w-full px-10">
            <button 
              onClick={() => { onInternship(); setMenuOpen(false); }}
              className="w-full text-white font-black py-4 rounded-xl shadow-lg"
              style={{ backgroundColor: colors.coral }}
            >
              💼 Apply for Internship
            </button>
            <button 
              className="w-full text-white font-black py-4 rounded-xl shadow-lg"
              style={{ backgroundColor: colors.navy }}
            >
              Join Community
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;