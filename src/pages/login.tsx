import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";

export default function Login() {
  const navigate = useNavigate();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Usuário e senha "fixos" para teste
    if (cpf === "11122233355" && senha === "teste") {
      localStorage.setItem("logado", "true"); 
      navigate("/homepage"); 
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <>

      <div className="flex justify-center items-center min-h-screen bg-gray">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login - VITTA WEB</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="cpf"
              placeholder="CPF: 11122233355"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="SENHA: teste"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
            <Link to="/homepage">
              Entrar
              </Link>
            </button>
          </form>
          <p className="text-sm mt-4 text-center">
            Não tem conta?{" "}
            <span
              onClick={() => navigate("/cadastro")}
              className="text-purple-600 cursor-pointer hover:underline"
            >
              Cadastre-se
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
