import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png"; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "INICIO", href: "#inicio" },
    { label: "SOBRE MI", href: "#sobre-mi" },
    { label: "TECNOLOGIAS", href: "#tecnologias" },
    { label: "MIS PROYECTOS", href: "#mis-proyectos" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white font-sans shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo o título si querés */}
        <div className="text-yellow-400 font-bold text-lg">
          <a href="#inicio">
            <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
          </a>

        </div>

        {/* Botón Hamburguesa - Solo visible en mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links en horizontal - solo visible en sm+ */}
        <div className="hidden sm:flex space-x-6">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="hover:text-yellow-400 transition-colors duration-300 font-semibold text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Menú desplegable - solo en mobile */}
      {isOpen && (
        <div className="sm:hidden bg-black px-6 pb-4 flex flex-col space-y-3">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-semibold text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
