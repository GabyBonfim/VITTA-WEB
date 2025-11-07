import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function Notificacoes() {
  const notificacoes = [
    {
      id: 0,
      titulo: "ALERTA DE CONSULTA",
      mensagem:
        "Olá, user. Você tem uma Teleconsulta agendada para o dia XX/XX/XXXX às XX:00 via TEAMS.",
      destino: "/triagem",
      fixa: true,
    },
    {
      id: 1,
      titulo: "Resultado de Exames Disponível",
      mensagem:
        "Seus resultados de exames de rotina estão disponíveis para visualização.",
    },
    {
      id: 2,
      titulo: "Atualização de Cadastro",
      mensagem:
        "Há informações pendentes em seu cadastro. Atualize para continuar utilizando os serviços.",
    },
    {
      id: 3,
      titulo: "Lembrete de Vacinação",
      mensagem:
        "Lembre-se de agendar sua vacina anual de reforço. Clique para mais detalhes.",
    },
    {
      id: 4,
      titulo: "Aviso Importante",
      mensagem:
        "O sistema passará por manutenção programada amanhã entre 02h e 04h.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center my-12 px-4">
        <div className="max-w-xl w-full text-center">
          <p className="text-gray-700 text-base">
            Aqui você pode visualizar se há triagens e outras notificações importantes.
          </p>

          <div className="mt-6 space-y-6">
            {notificacoes.map((n) => (
              <div
                key={n.id}
                className="bg-purple-700 text-white p-6 shadow-md rounded-xl transition-transform hover:scale-[1.02]"
              >
                <h4 className="text-lg font-bold mb-3">{n.titulo}</h4>
                <p className="text-sm mb-4">{n.mensagem}</p>

                {n.fixa ? (
                  <Link to={n.destino!}>
                    <button className="bg-white text-black font-bold rounded-2xl py-2 px-4 w-full max-w-xs mx-auto flex justify-center items-center shadow hover:bg-purple-300 hover:text-white transition">
                      Triagem
                    </button>
                  </Link>
                ) : (
                  <Link to={`/notificacao/${n.id}`}>
                    <button className="bg-white text-black font-bold rounded-2xl py-2 px-4 w-full max-w-xs mx-auto flex justify-center items-center shadow hover:bg-purple-300 hover:text-white transition">
                      Ver detalhes
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
