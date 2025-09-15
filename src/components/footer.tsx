import "../assets/css/nav-footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="conteudo-footer">
        <div className="logo-footer">
          <img src="/images/logotipo-vitta.png" alt="Logo Vitta Web" />
          <span>Vitta web</span>
        </div>

        <ul className="menu-footer">
          <li>
            <Link to="/politica">Política de Privacidade</Link>
          </li>
          <li>
            <Link to="/termos">Termos de Uso</Link>
          </li>
          <li>
            <Link to="/ajuda">Contato</Link>
          </li>
        </ul>
      </div>

      <p className="direitos-footer">
        © 2025 Vitta Web - Todos os direitos reservados.
      </p>
    </footer>
  );
}
