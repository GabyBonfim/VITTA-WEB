import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

{/*import "../assets/css/geral.css";*/}
    
    export default function Notificacoes() {
      return (
        <>
          <Navbar />

        <main>
        <div className="container-notificacoes">
            <p>Aqui você pode visualizar se há triagens para fazer em caso de consulta.</p>
            <div className="mensagem">
                <h4>ALERTA DE CONSULTA</h4>
                <p>Olá, user. Você tem uma Teleconsulta agendada para o dia XX/XX/XXXX.às XX:00 via TEAMS.</p>
                <Link to="/triagem"> 
                <button className="btn-triagemb">Triagem</button>
                </Link>
            </div>
        </div>
        </main>

          <Footer />
        </>
      );
    }

