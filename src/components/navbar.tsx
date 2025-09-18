import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["/", "Minha VITTA"],
    ["/faq", "Perguntas frequentes"],
    ["/ajuda", "Ajuda"],
    ["/integrantes", "Sobre Nós"],
  ];

  return (
    <header className="bg-[#7b4ce0] text-white flex items-center justify-between px-6 py-4 rounded-b-2xl shadow-md relative">
      {/* Logo */}
      <div className="flex items-center gap-3 font-bold text-lg">
        <img src="/images/logotipo-vitta.png" alt="Logo Vitta Web" className="w-10" />
        <span>Vitta web</span>
      </div>

      {/* Botão Sanduíche - só aparece em telas pequenas */}
      <button
        className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {/* Ícone hambúrguer simples */}
        <span className={`h-[3px] w-full bg-white rounded transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
        <span className={`h-[3px] w-full bg-white rounded transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`h-[3px] w-full bg-white rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
      </button>

      {/* Menu desktop */}
      <nav className="hidden md:block">
        <ul className="flex list-none gap-6">
          {links.map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile */}
      <nav
        className={`absolute top-full left-0 w-full bg-[#7b4ce0] shadow-md md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 max-h-[300px] py-4" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {links.map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                className="text-white font-bold px-4 py-2 rounded-full hover:bg-white/20 transition"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
