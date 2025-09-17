import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#7b4ce0] text-white flex items-center justify-between px-10 py-6 rounded-b-2xl shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3 font-bold text-lg">
        <img src="/images/logotipo-vitta.png" alt="Logo Vitta Web" className="w-10" />
        <span>Vitta web</span>
      </div>

      {/* Menu */}
      <nav>
        <ul className="flex list-none gap-6">
          {[
            ["/", "Minha VITTA"],
            ["/faq", "Perguntas frequentes"],
            ["/ajuda", "Ajuda"],
            ["/integrantes", "Sobre Nós"],
          ].map(([to, label]) => (
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
    </header>
  );
}
