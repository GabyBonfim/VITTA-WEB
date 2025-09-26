import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Monitoramento() {
  const navigate = useNavigate();

  const [temDiabetes, setTemDiabetes] = useState("nao");
  const [pressao, setPressao] = useState("");
  const [glicemia, setGlicemia] = useState("");
  const [respiracao, setRespiracao] = useState("normal");
  const [batimentos, setBatimentos] = useState("normal");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação
    if (!pressao) {
      setErro("Por favor, preencha sua pressão arterial.");
      return;
    }
    if (temDiabetes === "sim" && !glicemia) {
      setErro("Por favor, informe sua glicemia.");
      return;
    }

    setErro("");
    setSucesso(true); 

    console.log({ pressao, temDiabetes, glicemia, respiracao, batimentos });

      const dadosMonitoramento = {
      pressao,
      glicemia,
      batimentos,
      respiracao,
      data: new Date().toLocaleDateString("pt-BR"),
    };
    localStorage.setItem("monitoramento", JSON.stringify(dadosMonitoramento));
    
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto my-12 bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-center text-purple-800 text-2xl font-bold mb-8">
          Preencha seu monitoramento de hoje
        </h2>

        <form
          id="form-monitoramento"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
    
          {erro && (
            <p className="text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl text-sm">
              {erro}
            </p>
          )}

          {sucesso && (
            <p className="text-green-700 bg-green-50 border border-green-200 p-3 rounded-xl text-center font-semibold animate-pulse">
              ✅ Monitoramento enviado com sucesso! Redirecionando...
            </p>
          )}

          <div className="flex flex-col">
            <label htmlFor="pressao" className="font-semibold text-gray-700">
              Pressão arterial (mmHg):
            </label>
            <input
              type="number"
              id="pressao"
              value={pressao}
              onChange={(e) => setPressao(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-xl bg-gray-50 text-base focus:outline-none focus:border-purple-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="temDiabetes" className="font-semibold text-gray-700">
              Você tem diabetes?
            </label>
            <select
              id="temDiabetes"
              value={temDiabetes}
              onChange={(e) => setTemDiabetes(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-xl bg-gray-50 text-base focus:outline-none focus:border-purple-400 transition"
            >
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>
          </div>

          {temDiabetes === "sim" && (
            <div className="flex flex-col animate-fadeIn">
              <label htmlFor="glicemia" className="font-semibold text-gray-700">
                Glicemia (mg/dL):
              </label>
              <input
                type="number"
                id="glicemia"
                value={glicemia}
                onChange={(e) => setGlicemia(e.target.value)}
                className="p-3 border-2 border-gray-300 rounded-xl bg-gray-50 text-base focus:outline-none focus:border-purple-400 transition"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="respiracao" className="font-semibold text-gray-700">
              Como está sua respiração?
            </label>
            <select
              id="respiracao"
              value={respiracao}
              onChange={(e) => setRespiracao(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-xl bg-gray-50 text-base focus:outline-none focus:border-purple-400 transition"
            >
              <option value="normal">Normal</option>
              <option value="irregular">Irregular</option>
              <option value="difícil">Difícil</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="batimentos" className="font-semibold text-gray-700">
              Como estão seus batimentos cardíacos?
            </label>
            <select
              id="batimentos"
              value={batimentos}
              onChange={(e) => setBatimentos(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-xl bg-gray-50 text-base focus:outline-none focus:border-purple-400 transition"
            >
              <option value="normal">Normal</option>
              <option value="acelerado">Acelerado</option>
              <option value="lento">Lento</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={sucesso}
            className="bg-purple-400 text-white py-3 text-lg font-bold rounded-xl hover:bg-purple-500 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {sucesso ? "Enviando..." : "Enviar monitoramento"}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
