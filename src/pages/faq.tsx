import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Faq() {
  return (
    <>
      <Navbar />

      <main>
        <div className="max-w-[700px] w-[90%] mx-auto my-5 text-center">
          {/* Barra de pesquisa */}
          <div className="mb-6">
            <input
              type="text"
              id="pesquisa"
              placeholder="Digite aqui uma palavra chave, exemplo: 'triagem'"
              className="w-4/5 max-w-[400px] p-3 text-base border-2 border-[#9583B6] rounded-xl outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          <h2 className="text-purple-900 text-2xl mb-8">Perguntas Frequentes</h2>

          {/* Cards de FAQ */}
          <div className="bg-[#f4f0e7] p-5 mb-5 rounded-2xl shadow-md text-left">
            <p className="mb-2 text-base font-semibold">
              1. É possível receber lembretes das minhas teleconsultas?
            </p>
            <p className="text-base">
              Sim! Ao acessar a aba "notificações" na tela "Minha VITTA" você poderá ver se há teleconsultas agendadas,
              caso não, aparecerá a mensagem "não há teleconsultas marcadas".
            </p>
          </div>

          <div className="bg-[#f4f0e7] p-5 mb-5 rounded-2xl shadow-md text-left">
            <p className="mb-2 text-base font-semibold">
              2. Como funciona a triagem online?
            </p>
            <p className="text-base">
              Na triagem online, você responde algumas perguntas simples sobre seus sintomas. Com isso, ajudamos a
              direcionar você para o atendimento mais adequado.
            </p>
          </div>

          <div className="bg-[#f4f0e7] p-5 mb-5 rounded-2xl shadow-md text-left">
            <p className="mb-2 text-base font-semibold">
              3. O site é acessível para pessoas com deficiência?
            </p>
            <p className="text-base">
              Sim! Buscamos ao máximo tornar a saúde digital mais acessível, facilitando com textos, ícones, descrições e
              outros recursos para melhorar sua experiência como usuário.
            </p>
          </div>

          <div className="bg-[#f4f0e7] p-5 mb-5 rounded-2xl shadow-md text-left">
            <p className="mb-2 text-base font-semibold">
              4. Esqueci minha senha. Como posso recuperá-la?
            </p>
            <p className="text-base">
              Clique em "Esqueci minha senha" na tela de login e siga as instruções para redefini-la por e-mail ou SMS.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
