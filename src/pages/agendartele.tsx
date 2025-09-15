import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AgendarTele() {
  return (
    <>
      <Navbar />

      <main>
        <div className="container">
          <div className="cards-informativos">

            <div className="card-saude-digital">
              <p className="intro">
                Cada caso é um caso! Nem todos estão aptos a receber teleatendimento.
                Nesta seção, é possível entender o porquê.
              </p>
              <hr />

              <h2>O que é saúde digital?</h2>
              <p>
                Com o objetivo de romper barreiras e trazer inovações para os nossos
                pacientes, apresentamos a Saúde Digital. A teleconsulta é realizada
                pela equipe médica e multidisciplinar com o propósito de proporcionar
                qualidade de vida, praticidade e inclusão social.
              </p>

              <h2>Como realizo o agendamento?</h2>
              <p>
                Converse com o seu médico e verifique a possibilidade de realizar o
                atendimento virtual. Caso você se enquadre nos critérios, dirija-se
                ao setor da Saúde Digital para realizar o agendamento e obter
                demais informações.
              </p>
            </div>

            <div className="card-primeiro-acesso">
              <h2>Primeiro Acesso Portal do Paciente HC</h2>
              <ol className="passos-teleconsulta">
                <li>Acesse o Portal do Paciente HC pelo site ou aplicativo.</li>
                <li>Clique na opção <strong>"Cadastrar Senha"</strong>.</li>
                <li>Digite o número do CPF do paciente e clique em <strong>“Localizar Paciente”</strong>.</li>
                <li>Informe dados para contato, confirme as informações pessoais e registre uma senha de acesso.</li>
                <li>Clique novamente em <strong>"Cadastrar Senha"</strong> e depois em <strong>“Acessar Agora”</strong>.</li>
                <li>Digite o CPF e a senha cadastrada.</li>
                <li>Acesse o Portal, selecione a opção <strong>“Teleconsultas”</strong> e aceite o termo de autorização se estiver de acordo.</li>
                <li>Selecione o teleatendimento desejado. Habilite câmera, microfone e aguarde o profissional entrar na sala.</li>
              </ol>

              <a href="https://portaldopaciente.hc.fm.usp.br/" className="btn-portal-paciente">
                Acessar Portal
              </a>
            </div>

            <div className="card-tutorial">
              <p className="tutorial">
                Abaixo você poderá ver um tutorial de como baixar e acessar o portal do paciente do HC (você pode optar por
                usar o app ou acessar o site online). Basta clicar no botão abaixo.
              </p>
              <p>
                Você pode ajustar o tamanho das páginas por meio dos sinais de "+" e "-", caso queira ter uma melhor
                experiência de visualização do arquivo, clique no ícone de baixar.
              </p>

              <iframe src="images/Tutorial_Portal.pdf" width="100%" height="600" />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
