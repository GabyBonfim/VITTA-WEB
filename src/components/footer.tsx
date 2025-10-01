import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#7b4ce0] text-white mt-60 rounded-t-2xl text-center px-5 py-10 ">
      <div className="flex flex-wrap justify-between items-center max-w-5xl mx-auto mb-5">
        {/* Logo */}
        <div className="flex items-center gap-3 font-bold text-lg">
          <img src="/images/logotipo-vitta.png" alt="Logo Vitta Web" className="w-9" />
          <span>Vitta web</span>
        </div>

        {/* Menu */}
        <ul className="flex list-none gap-6 mt-5 sm:mt-0">
          {[
            ["/faq", "Política de Privacidade"],
            ["/sobre", "Termos de Uso"],
            ["/ajuda", "Contato"],
          ].map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                className="hover:text-[#ffcd29] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Direitos reservados */}
      <p className="text-sm mt-3">
        © 2025 Vitta Web - Todos os direitos reservados.
      </p>
    </footer>
  );
}
