import { useParams, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function DetalhesPaciente() {
  const { id } = useParams();

  const pacientes = [
    { id: 1, nome: "Ana Souza", dataNasc: "12/04/1985", cpf: "111.222.333-44", endereco: "Rua das Flores, 123", telefone: "(11) 98765-4321", insights: "Pressão levemente alta. Recomendado reduzir sal e aumentar hidratação." },
    { id: 2, nome: "João Silva", dataNasc: "05/11/1978", cpf: "222.333.444-55", endereco: "Av. Brasil, 456", telefone: "(11) 91234-5678", insights: "Glicemia controlada. Continue mantendo bons hábitos." },
    { id: 3, nome: "Maria Oliveira", dataNasc: "22/02/1990", cpf: "333.444.555-66", endereco: "Rua Central, 789", telefone: "(11) 99999-8888", insights: "Respiração irregular detectada. Sugere-se consulta médica." },
    { id: 4, nome: "Pedro Santos", dataNasc: "30/08/1982", cpf: "444.555.666-77", endereco: "Travessa Azul, 12", telefone: "(11) 98888-7777", insights: "Batimentos normais. Nenhuma anormalidade detectada." },
    { id: 5, nome: "Clara Martins", dataNasc: "15/01/1995", cpf: "555.666.777-88", endereco: "Rua Verde, 321", telefone: "(11) 97777-6666", insights: "Glicemia elevada. Recomendado acompanhamento nutricional." },
  ];

  const paciente = pacientes.find((p) => p.id === Number(id));

  if (!paciente) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
        <h1 className="text-2xl font-semibold mb-2">Paciente não encontrado</h1>
        <Link to="/pacientes" className="text-blue-600 hover:underline">
          Voltar à lista
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-6 flex justify-center">
        <div className="bg-white w-full max-w-2xl shadow-xl rounded-2xl p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
            Detalhes do Paciente
          </h1>

          <div className="space-y-4 text-gray-800">
            <p><span className="font-semibold text-blue-700">ID:</span> {paciente.id}</p>
            <p><span className="font-semibold text-blue-700">Nome:</span> {paciente.nome}</p>
            <p><span className="font-semibold text-blue-700">Data de Nascimento:</span> {paciente.dataNasc}</p>
            <p><span className="font-semibold text-blue-700">CPF:</span> {paciente.cpf}</p>
            <p><span className="font-semibold text-blue-700">Endereço:</span> {paciente.endereco}</p>
            <p><span className="font-semibold text-blue-700">Telefone:</span> {paciente.telefone}</p>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              Últimos insights de saúde:
            </h2>
            <p className="text-gray-700 italic">{paciente.insights}</p>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/pacientes"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition-all"
            >
              ⬅ Voltar à lista
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
