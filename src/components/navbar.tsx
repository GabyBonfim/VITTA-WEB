import { Link } from "react-router-dom";
import "../assets/css/nav-footer.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-navbar">
        <img src="/images/logotipo-vitta.png" alt="Logo Vitta Web" />
        <span>Vitta web</span>
      </div>

      <nav className="menu-navbar">
        <ul>
          <li><Link to="/">Minha VITTA</Link></li>
          <li><Link to="/faq">Perguntas frequentes</Link></li>
          <li><Link to="/ajuda">Ajuda</Link></li>
          <li><Link to="/integrantes">Sobre Nós</Link></li>
        </ul>
      </nav>
    </header>
  );
}
