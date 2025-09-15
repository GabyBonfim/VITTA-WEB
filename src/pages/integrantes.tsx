import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Integrantes() {
  return (
    <>
      <Navbar />

        <main>
    <div className="sobre-container">

      <div className="container-logo-slogan-texto">
        <div className="sobre-topo">
          <div className="sobre-logo">
            <img src="images/imagotipo-vitta.png" alt="Logo Vitta" />
            <p className="slogan">Saúde que se conecta com você.</p>
          </div>

          <div className="sobre-texto">
            <h3>Sobre nós</h3>
            <p>
              Este site foi desenvolvido com o objetivo de facilitar o acesso à saúde.
              Aqui você pode encontrar suas consultas agendadas, acessá-las através de um único botão e fazer o processo
              de triagem para ter um atendimento mais efetivo.
              Aqui a saúde é acessível.
            </p>
          </div>
        </div>
      </div>

      <div className="integrantes-container">

        <div className="card-integrante">
          <img src="images/gaby.jpg" alt="Gabriely Bonfim Silva | 566242" />
          <h4>Gabriely Bonfim Silva</h4>
          <p>566242 | 1TDSA</p>
          <div className="botoes-links">
            <a href="https://www.linkedin.com/in/gabriely-bonfim-87010a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="linkedin">LinkedIn</a>
            <a href="https://github.com/GabyBonfim" className="github">GitHub</a>
          </div>
        </div>

        <div className="card-integrante">
          <img src="images/mirelly.jpg" alt="Mirelly Sousa Alves | 566299" />
          <h4>Mirelly Sousa Alves</h4>
          <p>566299 | 1TDSA</p>
          <div className="botoes-links">
            <a href="https://www.linkedin.com/in/mirelly-sousa-8038672b9/" className="linkedin">LinkedIn</a>
            <a href="https://github.com/mirellysousa" className="github">GitHub</a>
          </div>
        </div>

        <div className="card-integrante">
          <img src="images/ruan.jpg" alt="Ruan Luca Feliciano de Carvalho | 559567" />
          <h4>Ruan Luca Feliciano de Carvalho</h4>
          <p>559567 | 1TDSA</p>
          <div className="botoes-links">
            <a href="https://www.linkedin.com/in/melissa-etes-10184925b/" className="linkedin">LinkedIn</a>
            <a href="https://github.com/Melissa-Etes" className="github">GitHub</a>
          </div>
        </div>

      </div>
    </div>
    </main>
      <Footer />
    </>
  );
}
