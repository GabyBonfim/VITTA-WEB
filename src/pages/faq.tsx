import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Faq() {
  return (
    <>
      <Navbar />

       <main>
    <div className="faq-container">

      <div className="barra-pesquisa">
        <input type="text" id="pesquisa" placeholder="Digite aqui uma palavra chave, exemplo: 'triagem'" />
      </div>

      <h2>Perguntas Frequentes</h2>

      <div className="faq-card">
        <p><strong>1. É possível receber lembretes das minhas teleconsultas?</strong></p>
        <p>Sim! Ao acessar a aba "notificações" na tela "Minha VITTA" você poderá ver se há teleconsultas agendadas,
          caso não, aparecerá a mensagem "não há teleconsultas marcadas".</p>
      </div>

      <div className="faq-card">
        <p><strong>2. Como funciona a triagem online?</strong></p>
        <p>Na triagem online, você responde algumas perguntas simples sobre seus sintomas. Com isso, ajudamos a
          direcionar você para o atendimento mais adequado.</p>
      </div>

      <div className="faq-card">
        <p><strong>3. O site é acessível para pessoas com deficiência?</strong></p>
        <p>Sim! Buscamos ao máximo tornar a saúde digital mais acessível, facilitando com textos, icones, descrições e
          entre outros para melhorar sua experiência como usuário.</p>
      </div>

      <div className="faq-card">
        <p><strong>4. Esqueci minha senha. Como posso recuperá-la?</strong></p>
        <p>Clique em "Esqueci minha senha" na tela de login e siga as instruções para redefini-la por e-mail ou SMS.</p>
      </div>
    </div>

  </main>


      <Footer />
    </>
  );
}
