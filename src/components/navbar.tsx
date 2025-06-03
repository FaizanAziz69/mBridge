import React from "react";
import { useState, useEffect } from "react";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li className="relative group">
      <a
        href={href || "#"}
        onClick={onClick}
        className="relative font-medium text-white hover:text-blue-300 transition-all duration-300 ease-out transform hover:scale-105 px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
      >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolling 
          ? "bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-white/10" 
          : "bg-gray-800/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Animated Logo */}
          <a href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative flex items-center space-x-3 px-4 py-2 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">MB</span>
                </div>
                <span className="text-white text-xl lg:text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Media Bridge
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          {/* <ul className="hidden lg:flex items-center space-x-2">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul> */}

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {[
              { icon: "fa-facebook", color: "hover:text-blue-500" },
              { icon: "fa-instagram", color: "hover:text-pink-500" },
              { icon: "fa-twitter", color: "hover:text-blue-400" },
              { icon: "fa-linkedin", color: "hover:text-blue-600" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`text-white/80 ${social.color} transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/10`}
              >
                <i className={`fa-brands ${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleOpen}
            className="lg:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${open ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${open ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 px-4 bg-gray-900/95 backdrop-blur-lg rounded-2xl mx-4 mb-4 mt-2 border border-white/10">
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block text-white hover:text-blue-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            


            
            <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-white/10">
              {[
                { icon: "fa-facebook", color: "hover:text-blue-500" },
                { icon: "fa-instagram", color: "hover:text-pink-500" },
                { icon: "fa-twitter", color: "hover:text-blue-400" },
                { icon: "fa-linkedin", color: "hover:text-blue-600" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-white/80 ${social.color} transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-white/10`}
                >
                  <i className={`fa-brands ${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated border at bottom */}
      <div className={`h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-500 ${
        isScrolling ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </nav>
  );
}

export default Navbar;