    import Navbar from "../components/navbar";
    import Footer from "../components/footer";
    import { Link } from "react-router-dom";

    export default function Triagemd() {
      return (
        <>
          <Navbar />

    <main className="main-triagemd">
    <form id="form-triagem-dois">
      <div className="triagemd-titulo">
        <h2>Triagem</h2>
        <p>Responda as perguntas abaixo (tempo médio: 5 minutos).</p>
      </div>

      <div className="triagemd-box">
        <p>1. Há quanto tempo está com essa dor?</p>
        <label><input type="radio" name="tempo" value="menos24" /> Menos de 24 horas</label>
        <label><input type="radio" name="tempo" value="1a3" /> 1 a 3 dias</label>
        <label><input type="radio" name="tempo" value="4a7" /> 4 a 7 dias</label>
        <label><input type="radio" name="tempo" value="mais1semana" /> Mais de uma semana</label>
      </div>

      <div className="triagemd-box">
        <p>2. Como você descreveria essa dor?</p>
        <label><input type="radio" name="descricao" value="aguda" /> Aguda (forte e repentina)</label>
        <label><input type="radio" name="descricao" value="leve" /> Leve e constante</label>
        <label><input type="radio" name="descricao" value="queimando" /> Queimando</label>
        <label><input type="radio" name="descricao" value="fisgada" /> Fisgada/pontada</label>
        <label><input type="radio" name="descricao" value="pressao" /> Pressão/peso</label>
        <label><input type="radio" name="descricao" value="latejante" /> Latejante</label>
        <label><input type="radio" name="descricao" value="outra" /> Outra</label>
      </div>

      <div className="triagemd-box">
        <p>3. Considere que essa barra indica o seu nível de dor, arraste a barra até indicar o nível de dor mais
          aproximado sentido por você.</p>
        <div className="triagemd-range-container">
          <input type="range" className="triagemd-range" id="nivelDor" name="nivelDor" min="0" max="10" step="1"
            value="5" />
        </div>
      </div>

      <div className="triagemd-box">
        <p>4. A dor piora em alguma situação específica (Ex: ao caminhar, respirar fundo, deitado...)</p>
        <textarea className="triagemd-textarea" name="situacao" placeholder="Descreva aqui..."></textarea>
      </div>

      <div className="triagemd-row">
        <div className="triagemd-box triagemd-box-small">
          <p>5. Está tomando algum medicamento?</p>
          <label><input type="radio" name="medicamento" value="sim" /> Sim</label>
          <label><input type="radio" name="medicamento" value="nao" /> Não</label>
        </div>

        <div className="triagemd-box triagemd-box-small">
          <p>6. Essa dor já aconteceu antes?</p>
          <label><input type="radio" name="reincidente" value="sim" /> Sim</label>
          <label><input type="radio" name="reincidente" value="nao" /> Não</label>
        </div>
      </div>

      <div className="triagemd-button">
        <Link to="/homepage">
        <button type="submit" id="enviar">Enviar</button>
        </Link>
      </div>
    </form>

  </main>
          <Footer />
        </>
      );
    }

