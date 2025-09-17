import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AgendarTele() {
  return (
    <>
      <Navbar />

      <main>
        <div className="flex flex-col items-center gap-5 my-8 px-5">
          {/* Card Saúde Digital */}
          <div className="bg-yellow-200 shadow-md max-w-[600px] w-full p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <p className="font-bold text-black">
              Cada caso é um caso! Nem todos estão aptos a receber teleatendimento.
              Nesta seção, é possível entender o porquê.
            </p>
            <hr className="border-t border-gray-400 my-5" />

            <h2 className="text-xl text-purple-900 mt-5">O que é saúde digital?</h2>
            <p className="text-gray-800 mt-2 leading-relaxed">
              Com o objetivo de romper barreiras e trazer inovações para os nossos
              pacientes, apresentamos a Saúde Digital. A teleconsulta é realizada
              pela equipe médica e multidisciplinar com o propósito de proporcionar
              qualidade de vida, praticidade e inclusão social.
            </p>

            <h2 className="text-xl text-purple-900 mt-5">Como realizo o agendamento?</h2>
            <p className="text-gray-800 mt-2 leading-relaxed">
              Converse com o seu médico e verifique a possibilidade de realizar o
              atendimento virtual. Caso você se enquadre nos critérios, dirija-se
              ao setor da Saúde Digital para realizar o agendamento e obter
              demais informações.
            </p>
          </div>

          {/* Card Primeiro Acesso */}
          <div className="bg-yellow-200 shadow-md max-w-[600px] w-full p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl text-purple-900 mt-5">Primeiro Acesso Portal do Paciente HC</h2>
            <ol className="bg-[#f4f0e7] p-10 rounded-xl shadow-md max-w-[700px] my-5 leading-relaxed text-gray-800 text-base list-decimal">
              <li>Acesse o Portal do Paciente HC pelo site ou aplicativo.</li>
              <li>Clique na opção <strong>"Cadastrar Senha"</strong>.</li>
              <li>Digite o número do CPF do paciente e clique em <strong>“Localizar Paciente”</strong>.</li>
              <li>Informe dados para contato, confirme as informações pessoais e registre uma senha de acesso.</li>
              <li>Clique novamente em <strong>"Cadastrar Senha"</strong> e depois em <strong>“Acessar Agora”</strong>.</li>
              <li>Digite o CPF e a senha cadastrada.</li>
              <li>Acesse o Portal, selecione a opção <strong>“Teleconsultas”</strong> e aceite o termo de autorização se estiver de acordo.</li>
              <li>Selecione o teleatendimento desejado. Habilite câmera, microfone e aguarde o profissional entrar na sala.</li>
            </ol>

            <a
              href="https://portaldopaciente.hc.fm.usp.br/"
              className="bg-purple-900 text-white rounded-xl h-12 flex items-center justify-center w-[200px] hover:bg-black transition-colors"
            >
              Acessar Portal
            </a>
          </div>

          {/* Card Tutorial */}
          <div className="bg-yellow-200 shadow-md max-w-[600px] w-full p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
            <p className="text-gray-800 leading-relaxed">
              Abaixo você poderá ver um tutorial de como baixar e acessar o portal do paciente do HC (você pode optar por
              usar o app ou acessar o site online). Basta clicar no botão abaixo.
            </p>
            <p className="text-gray-800 leading-relaxed mt-2">
              Você pode ajustar o tamanho das páginas por meio dos sinais de "+" e "-", caso queira ter uma melhor
              experiência de visualização do arquivo, clique no ícone de baixar.
            </p>

            <iframe
              src="images/Tutorial_Portal.pdf"
              className="w-full h-[600px] mt-4 rounded-md shadow"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
