import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/homepage.css";
import { Link } from "react-router-dom";


export default function Homepage() {
  return (
    <>
      <Navbar />

  <main className="main-home">
        {/* Notícia */}

        <div className="corpo-home">
        <section className="noticia-home">
          <img src="/images/noticia.png" alt="Notícia" className="img-noticia-home" />
          <div className="texto-noticia-home">
            <h3>Busca por atendimentos em saúde mental cresce após a pandemia</h3>
            <p>
              Em Ribeirão Preto, número de atendimentos em saúde mental já passa
              de 200 mil por ano
            </p>
            <a href="#" className="btn-materia-home">Ver matéria</a>
          </div>
        </section>

        <div className="conteudo-home">
          {/* Card Usuário */}
          <div className="card-usuario-home">
            <img
              src="/images/user-icon.png"
              alt="Mascote"
              className="img-usuario-home"
            />
            <div>
              <h3>Mirelly Sousa</h3>
              <p>Nascido(a) em: 16/05/2006</p>
              <p>CPF: 352.789.356-03</p>
              <p>Sexo: Feminino</p>
            </div>
          </div>

          {/* Card Saúde */}
          <div className="card-saude-home">
            <h4>Minha saúde hoje</h4>
            <ul>
              <li>Pressão -</li>
              <li>Glicemia -</li>
              <li>Respiração -</li>
              <li>Coração -</li>
            </ul>
          </div>
        </div>

        {/* Cards de Acesso Rápido */}
        <div className="acessos-home">
          <div className="card-acesso-home verde">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" width="30" height="30">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.708A2.25 2.25 0 0 1 12 19.5a2.25 2.25 0 0 1-2.857-1.792m5.714 0a48.108 48.108 0 0 0 4.036-1.103A2.25 2.25 0 0 0 19.5 14.25v-2.636a6.75 6.75 0 1 0-13.5 0v2.636a2.25 2.25 0 0 0-1.393 2.355c.84.284 2.17.736 4.036 1.103m5.714 0H9.429" />
             </svg>
            <h4>Notificações</h4>
            <p>Veja se há triagens, monitoramentos ou retornos médico aqui.</p>
            <Link to="/notificacoes">
            <button>Ver mais</button>
            </Link>
          </div>

          <div className="card-acesso-home azul">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" width="30" height="30">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.123-4.5-4.75-4.5-1.87 0-3.487 1.144-4.25 2.75-.763-1.606-2.38-2.75-4.25-2.75C5.123 3.75 3 5.765 3 8.25c0 7.108 9 12 9 12s9-4.892 9-12z" />
            </svg>
            <h4>Monitoramento</h4>
            <p>Monitore sua saúde e receba retornos automáticos!</p>
            <Link to="/monitoramento">
            <button>Ver mais</button>
            </Link>
          </div>

          <div className="card-acesso-home ciano">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <title>Agendamento de exame</title>
              <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
              <path d="M16 3v4M8 3v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="8" y1="12" x2="11" y2="15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="11" y1="15" x2="17" y2="9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h4>Agendar Teleconsulta</h4>
            <p>Entenda como agendar uma teleconsulta.</p>
           <Link to="/agendartele">
             <button>Ver mais</button>
           </Link> 
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
