import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Monitoramento() {
  const [temDiabetes, setTemDiabetes] = useState("nao");
  const [pressao, setPressao] = useState("");
  const [glicemia, setGlicemia] = useState("");
  const [respiracao, setRespiracao] = useState("normal");
  const [batimentos, setBatimentos] = useState("normal");

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log({
    pressao,
    temDiabetes,
    glicemia,
    respiracao,
    batimentos,
  });
  alert("Monitoramento enviado com sucesso!");
};

  return (
    <>
      <Navbar />
      <main className="monitoramento-container">
        <h2>Preencha seu monitoramento de hoje</h2>

        <form id="form-monitoramento" onSubmit={handleSubmit}>
          <label htmlFor="pressao">Pressão arterial (mmHg):</label>
          <input
            type="number"
            id="pressao"
            value={pressao}
            onChange={(e) => setPressao(e.target.value)}
            required
          />

          <label htmlFor="temDiabetes">Você tem diabetes?</label>
          <select
            id="temDiabetes"
            value={temDiabetes}
            onChange={(e) => setTemDiabetes(e.target.value)}
          >
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>

          {temDiabetes === "sim" && (
            <div id="campoGlicemia">
              <label htmlFor="glicemia">Glicemia (mg/dL):</label>
              <input
                type="number"
                id="glicemia"
                value={glicemia}
                onChange={(e) => setGlicemia(e.target.value)}
              />
            </div>
          )}

          <label htmlFor="respiracao">Como está sua respiração?</label>
          <select
            id="respiracao"
            value={respiracao}
            onChange={(e) => setRespiracao(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="irregular">Irregular</option>
            <option value="difícil">Difícil</option>
          </select>

          <label htmlFor="batimentos">Como estão seus batimentos cardíacos?</label>
          <select
            id="batimentos"
            value={batimentos}
            onChange={(e) => setBatimentos(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="acelerado">Acelerado</option>
            <option value="lento">Lento</option>
          </select>

          <button type="submit">Enviar monitoramento</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
