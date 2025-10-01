import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [senha, setSenha] = useState("");

const handleCadastro = (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  const user = { nome, dataNascimento, cpf, sexo };
  localStorage.setItem("user", JSON.stringify(user));

  navigate("/", { state: user });
};


  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro - VITTA WEB</h2>
          <form onSubmit={handleCadastro} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="date"
              placeholder="Data de nascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="SEXO"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Cadastrar
            </button>
          </form>
          <p className="text-sm mt-4 text-center">
            Já tem conta?{" "}
            <span
              onClick={() => navigate("/homepage")}
              className="text-purple-600 cursor-pointer hover:underline"
            >
              Faça login
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
