import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type FaqCardProps = {
  pergunta: string;
  resposta: string;
};

function FaqCard({ pergunta, resposta }: FaqCardProps) {
  return (
    <div className="bg-[#f4f0e7] p-5 mb-5 rounded-2xl shadow-md text-left">
      <p className="mb-2 text-base font-semibold">{pergunta}</p>
      <p className="text-base">{resposta}</p>
    </div>
  );
}

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState(""); // estado para o input

  const faqs = [
    {
      pergunta: "1. É possível receber lembretes das minhas teleconsultas?",
      resposta:
        'Sim! Ao acessar a aba "notificações" na tela "Minha VITTA" você poderá ver se há teleconsultas agendadas, caso não, aparecerá a mensagem "não há teleconsultas marcadas".',
    },
    {
      pergunta: "2. Como funciona a triagem online?",
      resposta:
        "Na triagem online, você responde algumas perguntas simples sobre seus sintomas. Com isso, ajudamos a direcionar você para o atendimento mais adequado.",
    },
    {
      pergunta: "3. O site é acessível para pessoas com deficiência?",
      resposta:
        "Sim! Buscamos ao máximo tornar a saúde digital mais acessível, facilitando com textos, ícones, descrições e outros recursos para melhorar sua experiência como usuário.",
    },
    {
      pergunta: "4. Esqueci minha senha. Como posso recuperá-la?",
      resposta:
        'Clique em "Esqueci minha senha" na tela de login e siga as instruções para redefini-la por e-mail ou SMS.',
    },
    {
      pergunta: "5. Posso alterar meus dados pessoais no site?",
      resposta:
        "Sim! Basta acessar o menu 'Minha Conta', onde você poderá editar suas informações como nome, telefone, e-mail e endereço de forma segura.",
    },
    {
      pergunta: "6. Como agendar uma nova consulta?",
      resposta:
        "Na aba 'Consultas', clique em 'Agendar Consulta', escolha a especialidade, data e horário disponíveis e confirme para finalizar o agendamento.",
    },
    {
      pergunta: "7. Preciso pagar algo para usar a plataforma?",
      resposta:
        "O uso da plataforma é gratuito para pacientes cadastrados. Alguns serviços específicos podem exigir pagamento, mas você será informado antes de confirmar.",
    },
    {
      pergunta: "8. Posso usar a plataforma no celular?",
      resposta:
        "Sim! Nosso site é responsivo e funciona bem em celulares e tablets. Além disso, estamos trabalhando em um aplicativo dedicado para facilitar ainda mais o acesso.",
    },
    {
      pergunta: "9. Meus dados estão seguros?",
      resposta:
        "Sim. Utilizamos criptografia e seguimos as normas da LGPD (Lei Geral de Proteção de Dados) para garantir a segurança e privacidade das suas informações.",
    },
    {
      pergunta: "10. Como entro em contato com o suporte?",
      resposta:
        "Você pode acessar o chat de suporte pelo rodapé do site ou enviar um e-mail para suporte@vitta.com. Nosso time atende de segunda a sexta, das 8h às 18h.",
    },
  ];

  // Filtra FAQs com base no termo de pesquisa
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.resposta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main>
        <div className="max-w-[700px] w-[90%] mx-auto my-5 text-center">
          {/* Barra de pesquisa */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Digite aqui uma palavra chave, exemplo: 'triagem'"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-4/5 max-w-[400px] p-3 text-base border-2 border-[#9583B6] rounded-xl outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          <h2 className="text-purple-900 text-2xl mb-8">
            Perguntas Frequentes
          </h2>

          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FaqCard key={index} pergunta={faq.pergunta} resposta={faq.resposta} />
            ))
          ) : (
            <p className="text-gray-500">Nenhuma pergunta encontrada.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}