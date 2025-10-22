import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Pacientes() {
  const pacientes = [
    { id: 1, nome: "Ana Souza" },
    { id: 2, nome: "João Silva" },
    { id: 3, nome: "Maria Oliveira" },
    { id: 4, nome: "Pedro Santos" },
    { id: 5, nome: "Clara Martins" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-160px)] bg-slate-50 py-10 px-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-10 text-center">
          Lista de Pacientes
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {pacientes.map((p) => (
            <Link
              key={p.id}
              to={`/DetalhesPaciente/${p.id}`}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center group"
            >
              <div className="bg-blue-100 text-blue-700 rounded-full w-12 h-12 flex items-center justify-center font-semibold text-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {p.id}
              </div>
              <h2 className="text-xl font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                {p.nome}
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Clique para ver detalhes</p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
