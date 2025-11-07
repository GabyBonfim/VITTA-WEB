import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Triagemd() {
  const navigate = useNavigate();

  // Estados
  const [tempo, setTempo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nivelDor, setNivelDor] = useState("5");
  const [situacao, setSituacao] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [reincidente, setReincidente] = useState("");

  // Estados de erro por pergunta
  const [erros, setErros] = useState({
    tempo: "",
    descricao: "",
    medicamento: "",
    reincidente: "",
  });

  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const novosErros = {
      tempo: tempo ? "" : "Selecione uma opção.",
      descricao: descricao ? "" : "Selecione uma opção.",
      medicamento: medicamento ? "" : "Selecione uma opção.",
      reincidente: reincidente ? "" : "Selecione uma opção.",
    };

    setErros(novosErros);

    // Verifica se tem algum erro
    const temErro = Object.values(novosErros).some((err) => err !== "");
    if (temErro) return;

    setSucesso(true);

    console.log({ tempo, descricao, nivelDor, situacao, medicamento, reincidente });

    setTimeout(() => {
      navigate("/homepage");
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-lg w-full mx-auto my-10 p-5">
        <form onSubmit={handleSubmit} className="space-y-5">

          {sucesso && (
            <p className="text-green-700 bg-green-50 border border-green-200 p-3 rounded-xl text-center font-semibold animate-pulse">
              Respostas enviadas com sucesso! Redirecionando...
            </p>
          )}

          <div className="text-center mb-5">
            <h2 className="text-2xl font-bold text-[#3b2e58] mb-1">Triagem</h2>
            <p className="text-sm text-gray-600">
              Responda as perguntas abaixo (tempo médio: 5 minutos).
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="font-semibold mb-2">
              1. Há quanto tempo está com essa dor?
            </p>
            {[
              ["menos24", "Menos de 24 horas"],
              ["1a3", "1 a 3 dias"],
              ["4a7", "4 a 7 dias"],
              ["mais1semana", "Mais de uma semana"],
            ].map(([value, label]) => (
              <label key={value} className="block mb-1">
                <input
                  type="radio"
                  name="tempo"
                  value={value}
                  checked={tempo === value}
                  onChange={(e) => setTempo(e.target.value)}
                  className="mr-2"
                />
                {label}
              </label>
            ))}
            {erros.tempo && <p className="text-red-600 text-sm mt-2">{erros.tempo}</p>}
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="font-semibold mb-2">
              2. Como você descreveria essa dor?
            </p>
            {[
              ["aguda", "Aguda (forte e repentina)"],
              ["leve", "Leve e constante"],
              ["queimando", "Queimando"],
              ["fisgada", "Fisgada/pontada"],
              ["pressao", "Pressão/peso"],
              ["latejante", "Latejante"],
              ["outra", "Outra"],
            ].map(([value, label]) => (
              <label key={value} className="block mb-1">
                <input
                  type="radio"
                  name="descricao"
                  value={value}
                  checked={descricao === value}
                  onChange={(e) => setDescricao(e.target.value)}
                  className="mr-2"
                />
                {label}
              </label>
            ))}
            {erros.descricao && <p className="text-red-600 text-sm mt-2">{erros.descricao}</p>}
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="font-semibold mb-2">
              3. Nível de dor (0 a 10):
            </p>
            <input
              type="range"
              id="nivelDor"
              name="nivelDor"
              min="0"
              max="10"
              step="1"
              value={nivelDor}
              onChange={(e) => setNivelDor(e.target.value)}
              className="w-full mt-2 accent-purple-700"
            />
            <p className="text-center mt-2 text-sm text-gray-700">
              Nível selecionado: <strong>{nivelDor}</strong>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="font-semibold mb-2">
              4. A dor piora em alguma situação?
            </p>
            <textarea
              name="situacao"
              value={situacao}
              onChange={(e) => setSituacao(e.target.value)}
              placeholder="Descreva aqui..."
              className="w-full h-20 p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-1 bg-white rounded-xl shadow-md p-5">
              <p className="font-semibold mb-2">
                5. Está tomando algum medicamento?
              </p>
              {["sim", "nao"].map((v) => (
                <label key={v} className="block mb-1">
                  <input
                    type="radio"
                    name="medicamento"
                    value={v}
                    checked={medicamento === v}
                    onChange={(e) => setMedicamento(e.target.value)}
                    className="mr-2"
                  />
                  {v === "sim" ? "Sim" : "Não"}
                </label>
              ))}
              {erros.medicamento && <p className="text-red-600 text-sm mt-2">{erros.medicamento}</p>}
            </div>

            <div className="flex-1 bg-white rounded-xl shadow-md p-5">
              <p className="font-semibold mb-2">
                6. Essa dor já aconteceu antes?
              </p>
              {["sim", "nao"].map((v) => (
                <label key={v} className="block mb-1">
                  <input
                    type="radio"
                    name="reincidente"
                    value={v}
                    checked={reincidente === v}
                    onChange={(e) => setReincidente(e.target.value)}
                    className="mr-2"
                  />
                  {v === "sim" ? "Sim" : "Não"}
                </label>
              ))}
              {erros.reincidente && <p className="text-red-600 text-sm mt-2">{erros.reincidente}</p>}
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              disabled={sucesso}
              className="bg-[#6b4fa0] hover:bg-[#5a4191] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {sucesso ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
}
