import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  estado: string;
  regiao: string;
}

interface Paciente {
  id?: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  feedback: string;
  endereco: Endereco;
}

export default function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [editando, setEditando] = useState(false);
  const [pacienteAtual, setPacienteAtual] = useState<Partial<Paciente>>({
    endereco: {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      estado: "",
      regiao: "",
    },
  });

  // Buscar pacientes do backend
  useEffect(() => {
    fetch("http://localhost:8080/paciente")
      .then((res) => res.json())
      .then(setPacientes)
      .catch((err) => console.error("Erro ao carregar pacientes:", err));
  }, []);

  // Abrir modal
  const abrirModal = (paciente?: Paciente) => {
    setEditando(!!paciente);
    setPacienteAtual(
      paciente
        ? { ...paciente }
        : {
            endereco: {
              cep: "",
              logradouro: "",
              complemento: "",
              bairro: "",
              localidade: "",
              estado: "",
              regiao: "",
            },
          }
    );
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setPacienteAtual({
      endereco: {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        estado: "",
        regiao: "",
      },
    });
  };

  // Lidar com mudanças nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if ([
      "cep", "logradouro", "complemento", "bairro", "localidade", "estado", "regiao"
    ].includes(name)) {
      setPacienteAtual((prev) => ({
        ...prev,
        endereco: { ...prev.endereco!, [name]: value },
      }));
    } else {
      setPacienteAtual((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Buscar endereço pelo CEP
  const handleCepBlur = async () => {
    const cep = pacienteAtual.endereco?.cep?.replace(/\D/g, "");
    if (!cep || cep.length !== 8) return;

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();

      if (!data.erro) {
        setPacienteAtual((prev) => ({
          ...prev,
          endereco: {
            ...prev.endereco!,
            logradouro: data.logradouro || "",
            complemento: data.complemento || "",
            bairro: data.bairro || "",
            localidade: data.localidade || "",
            estado: data.uf || "",
          },
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  // Enviar dados ao backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editando
      ? `http://localhost:8080/paciente/${pacienteAtual.id}`
      : "http://localhost:8080/paciente";
    const metodo = editando ? "PUT" : "POST";

    await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pacienteAtual),
    });

    fecharModal();
    window.location.reload();
  };

  const excluirPaciente = async (id: number) => {
    if (confirm("Deseja realmente excluir este paciente?")) {
      await fetch(`http://localhost:8080/paciente/${id}`, { method: "DELETE" });
      setPacientes((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)] bg-white py-10 px-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#7b4ce0] mb-10 text-center">
          Lista de Pacientes
        </h1>

        <button
          onClick={() => abrirModal()}
          className="mb-8 bg-[#7b4ce0] text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all"
        >
          + Adicionar Paciente
        </button>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {pacientes.map((p) => (
            <div
              key={p.id}
              className="bg-[#f4f0e7] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center group"
            >
              <div className="bg-[#7b4ce0] text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold text-lg mb-4">
                {p.id}
              </div>
              <h2 className="text-xl font-semibold text-[#7b4ce0]">
                {p.nome}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                {p.endereco.logradouro}, {p.endereco.localidade} - {p.endereco.estado}
              </p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => abrirModal(p)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => excluirPaciente(p.id!)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalAberto && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-lg">
              <h2 className="text-2xl font-bold text-[#7b4ce0] mb-4">
                {editando ? "Editar Paciente" : "Adicionar Paciente"}
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="nome"
                  value={pacienteAtual.nome || ""}
                  onChange={handleChange}
                  placeholder="Nome"
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="cpf"
                  value={pacienteAtual.cpf || ""}
                  onChange={handleChange}
                  placeholder="CPF"
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="date"
                  name="dataNascimento"
                  value={pacienteAtual.dataNascimento || ""}
                  onChange={handleChange}
                  placeholder="Data de Nascimento"
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="telefone"
                  value={pacienteAtual.telefone || ""}
                  onChange={handleChange}
                  placeholder="Telefone"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="feedback"
                  value={pacienteAtual.feedback || ""}
                  onChange={handleChange}
                  placeholder="Feedback"
                  className="border p-2 rounded"
                />

                {/* Campos de endereço */}
                <input
                  type="text"
                  name="cep"
                  value={pacienteAtual.endereco?.cep || ""}
                  onChange={handleChange}
                  onBlur={handleCepBlur}
                  placeholder="CEP"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="logradouro"
                  value={pacienteAtual.endereco?.logradouro || ""}
                  onChange={handleChange}
                  placeholder="Logradouro"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="complemento"
                  value={pacienteAtual.endereco?.complemento || ""}
                  onChange={handleChange}
                  placeholder="Complemento"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="bairro"
                  value={pacienteAtual.endereco?.bairro || ""}
                  onChange={handleChange}
                  placeholder="Bairro"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="localidade"
                  value={pacienteAtual.endereco?.localidade || ""}
                  onChange={handleChange}
                  placeholder="Cidade"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="estado"
                  value={pacienteAtual.endereco?.estado || ""}
                  onChange={handleChange}
                  placeholder="Estado"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="regiao"
                  value={pacienteAtual.endereco?.regiao || ""}
                  onChange={handleChange}
                  placeholder="Região"
                  className="border p-2 rounded"
                />

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={fecharModal}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-[#7b4ce0] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
