import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Notificacoes() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center my-12 px-4">
        <div className="max-w-xl w-full text-center">
          <p className="text-gray-700 text-base">
            Aqui você pode visualizar se há triagens para fazer em caso de consulta.
          </p>

          <div className="bg-purple-700 text-white p-6 shadow-md mt-6 rounded-xl max-w-lg mx-auto">
            <h4 className="text-lg font-bold mb-3">ALERTA DE CONSULTA</h4>
            <p className="text-sm mb-4">
              Olá, user. Você tem uma Teleconsulta agendada para o dia XX/XX/XXXX às XX:00 via TEAMS.
            </p>

            <Link to="/triagem">
              <button className="bg-white text-black font-bold rounded-2xl py-2 px-4 w-full max-w-xs mx-auto flex justify-center items-center shadow hover:bg-purple-300 hover:text-white transition">
                Triagem
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
