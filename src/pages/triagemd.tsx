import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Triagemd() {
  return (
    <>
      <Navbar />

      <main className="max-w-lg w-full mx-auto my-10 p-5">
        <form id="form-triagem-dois" className="space-y-5">
          {/* Título */}
          <div className="text-center mb-5">
            <h2 className="text-2xl font-bold text-[#3b2e58] mb-1">Triagem</h2>
            <p className="text-sm text-gray-600">
              Responda as perguntas abaixo (tempo médio: 5 minutos).
            </p>
          </div>

          {/* Pergunta 1 */}
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
                <input type="radio" name="tempo" value={value} className="mr-2" />
                {label}
              </label>
            ))}
          </div>

          {/* Pergunta 2 */}
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
                  className="mr-2"
                />
                {label}
              </label>
            ))}
          </div>

          {/* Pergunta 3 */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="font-semibold mb-2">
              3. Considere que essa barra indica o seu nível de dor, arraste a
              barra até indicar o nível de dor mais aproximado sentido por você.
            </p>
            <input
              type="range"
              id="nivelDor"
              name="nivelDor"
              min="0"
              max="10"
              step="1"
              defaultValue="5"
              className="w-full mt-2 accent-purple-700"
            />
          </div>

          {/* Pergunta 4 */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="font-semibold mb-2">
              4. A dor piora em alguma situação específica (Ex: ao caminhar,
              respirar fundo, deitado...)
            </p>
            <textarea
              name="situacao"
              placeholder="Descreva aqui..."
              className="w-full h-20 p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Perguntas 5 e 6 lado a lado */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-1 bg-white rounded-xl shadow-md p-5">
              <p className="font-semibold mb-2">
                5. Está tomando algum medicamento?
              </p>
              <label className="block mb-1">
                <input type="radio" name="medicamento" value="sim" className="mr-2" />
                Sim
              </label>
              <label className="block">
                <input type="radio" name="medicamento" value="nao" className="mr-2" />
                Não
              </label>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow-md p-5">
              <p className="font-semibold mb-2">
                6. Essa dor já aconteceu antes?
              </p>
              <label className="block mb-1">
                <input type="radio" name="reincidente" value="sim" className="mr-2" />
                Sim
              </label>
              <label className="block">
                <input type="radio" name="reincidente" value="nao" className="mr-2" />
                Não
              </label>
            </div>
          </div>

          {/* Botão */}
          <div className="text-center mt-6">
            <Link to="/homepage">
              <button
                type="submit"
                id="enviar"
                className="bg-[#6b4fa0] hover:bg-[#5a4191] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-colors"
              >
                Enviar
              </button>
            </Link>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
}
