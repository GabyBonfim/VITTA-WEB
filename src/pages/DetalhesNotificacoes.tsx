import { useParams, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function DetalhesNotificacao() {
  const { id } = useParams();

  const notificacoes = [
    {
      id: 1,
      titulo: "Resultado de Exames Disponível",
      data: "02/11/2025",
      descricao:
        "Os resultados dos seus exames de rotina foram analisados e estão disponíveis para visualização. Recomendamos revisá-los com seu médico durante a próxima consulta.",
      extra: "Última atualização: laboratório central às 09h42.",
    },
    {
      id: 2,
      titulo: "Atualização de Cadastro",
      data: "30/10/2025",
      descricao:
        "Há informações pendentes em seu cadastro, como telefone e endereço. Atualize seus dados para manter seu perfil ativo e receber notificações corretamente.",
      extra: "Acesse o menu 'Perfil' e clique em 'Editar informações'.",
    },
    {
      id: 3,
      titulo: "Lembrete de Vacinação",
      data: "28/10/2025",
      descricao:
        "Está chegando o momento de tomar sua vacina anual de reforço. Verifique os postos mais próximos e mantenha sua carteira de vacinação em dia.",
      extra: "Campanha de vacinação disponível até 30/11/2025.",
    },
    {
      id: 4,
      titulo: "Aviso Importante",
      data: "05/11/2025",
      descricao:
        "O sistema passará por manutenção preventiva amanhã entre 02h e 04h. Durante esse período, algumas funcionalidades poderão ficar temporariamente indisponíveis.",
      extra: "Agradecemos pela compreensão!",
    },
  ];

  const notificacao = notificacoes.find((n) => n.id === Number(id));

  if (!notificacao) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
        <h1 className="text-2xl font-semibold mb-2">
          Notificação não encontrada 😕
        </h1>
        <Link to="/notificacoes" className="text-blue-600 hover:underline">
          Voltar às notificações
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#f4f0e7] to-white py-12 px-6 flex justify-center">
        <div className="bg-[#f4f0e7] w-full max-w-2xl shadow-xl rounded-2xl p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-[#7b4ce0] text-center mb-6">
            {notificacao.titulo}
          </h1>

          <p className="text-gray-600 text-sm text-center mb-8">
            📅 {notificacao.data}
          </p>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>{notificacao.descricao}</p>
            <div className="bg-[#7b4ce0] text-white rounded-xl p-4 shadow-md text-sm italic">
              {notificacao.extra}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/notificacoes"
              className="inline-block bg-[#7b4ce0] text-white px-6 py-2 rounded-xl shadow-md hover:bg-purple-800 transition-all"
            >
              Voltar às notificações
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
