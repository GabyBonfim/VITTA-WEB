import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Ajuda() {
  return (
    <>
      <Navbar />
      <main>
        <div className="suporte-container">
          <h2>Suporte a você</h2>

          <div className="suporte-email-card">
            <p>Você pode nos contatar através do nosso EMAIL:</p>
            <div className="email-box">FAQVittaweb@gmail.com</div>
          </div>

          <form
            className="suporte-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mensagem enviada com sucesso!");
            }}
          >
            <label htmlFor="mensagem">
              Descreva abaixo os problemas que você está enfrentando ao utilizar nosso site.
              Busque detalhar o problema enfrentado, se possível anexe uma imagem do problema (um print da tela).
            </label>

            <textarea id="mensagem" name="mensagem" required></textarea>

            <div className="suporte-botoes">
              <label htmlFor="print" className="botao-upload">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16.5l4.5-4.5h-3v-6h-3v6h-3l4.5 4.5zM19 18H5v-2H3v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h-2v2z" />
                </svg>
                Carregar imagem/print
                <input type="file" id="print" name="print" accept="image/*" hidden />
              </label>

              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
