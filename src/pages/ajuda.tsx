import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Ajuda() {
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-[700px] w-[90%] mx-auto text-center">
          <h2 className="text-purple-900 text-xl mb-8">Suporte a você</h2>

          {/* Card de e-mail */}
          <div className="bg-[#f4f0e7] p-5 rounded-2xl shadow-md mb-8">
            <p>Você pode nos contatar através do nosso EMAIL:</p>
            <div className="bg-[#7b4ce0] text-white font-bold px-5 py-2 rounded-full inline-block mt-4">
              FAQVittaweb@gmail.com
            </div>
          </div>

          {/* Formulário de suporte */}
          <form
            className="bg-[#f4f0e7] p-6 rounded-2xl shadow-md text-left"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mensagem enviada com sucesso!");
            }}
          >
            <label htmlFor="mensagem" className="block mb-4 text-base">
              Descreva abaixo os problemas que você está enfrentando ao utilizar nosso site.
              Busque detalhar o problema enfrentado, se possível anexe uma imagem do problema (um print da tela).
            </label>

            <textarea
              id="mensagem"
              name="mensagem"
              required
              className="w-full border border-[#390147] rounded-xl p-4 resize-none text-sm mb-5 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-700"
              rows={5}
            ></textarea>

            <div className="flex justify-between flex-wrap gap-3">
              {/* Botão de upload */}
              <label
                htmlFor="print"
                className="bg-[#7b4ce0] text-white font-bold px-5 py-2 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-[#8e79af] transition-colors"
              >
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

              {/* Botão de enviar */}
              <button
                type="submit"
                className="bg-purple-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-[#7b4ce0] transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
