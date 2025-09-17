import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Integrantes() {
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-[1100px] w-[90%] mx-auto my-8 px-2">
          {/* Container com logo + slogan + texto */}
          <div className="bg-purple-600 rounded-lg p-10 mb-8">
            <div className="flex flex-wrap justify-between gap-10 mb-12 w-full">
              {/* Logo + slogan */}
              <div className="flex flex-col items-start max-w-[400px] w-full">
                <img
                  src="images/vittahc (1).png"
                  alt="Logo Vitta"
                  className="w-full max-w-[180px] mb-2"
                />
                <p className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm w-fit">
                  Saúde que se conecta com você.
                </p>
              </div>

              {/* Texto sobre */}
              <div className="bg-[#f4f0e7] p-8 rounded-2xl shadow-md max-w-[800px] w-full">
                <h3 className="text-purple-700 text-xl font-semibold mb-2">
                  Sobre nós
                </h3>
                <p className="text-gray-800">
                  Este site foi desenvolvido com o objetivo de facilitar o acesso à
                  saúde. Aqui você pode encontrar suas consultas agendadas, acessá-las
                  através de um único botão e fazer o processo de triagem para ter um
                  atendimento mais efetivo. Aqui a saúde é acessível.
                </p>
              </div>
            </div>
          </div>

          {/* Integrantes */}
          <div className="flex justify-center flex-wrap gap-8 mt-8 mb-24">
            {/* Card 1 */}
            <div className="bg-[#f4f0e7] rounded-2xl p-5 text-center w-[277px] shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              <img
                src="images/gaby.jpg"
                alt="Gabriely Bonfim Silva | 566242"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h4 className="text-base font-semibold">Gabriely Bonfim Silva</h4>
              <p className="text-sm mb-4">566242 | 1TDSA</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/gabriely-bonfim-87010a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="bg-purple-900 text-white py-2 rounded-lg font-bold hover:bg-purple-800 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/GabyBonfim"
                  className="bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f4f0e7] rounded-2xl p-5 text-center w-[277px] shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              <img
                src="images/mirelly.jpg"
                alt="Mirelly Sousa Alves | 566299"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h4 className="text-base font-semibold">Mirelly Sousa Alves</h4>
              <p className="text-sm mb-4">566299 | 1TDSA</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/mirelly-sousa-8038672b9/"
                  className="bg-purple-900 text-white py-2 rounded-lg font-bold hover:bg-purple-800 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mirellysousa"
                  className="bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f4f0e7] rounded-2xl p-5 text-center w-[277px] shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              <img
                src="images/ruan.jpg"
                alt="Ruan Luca Feliciano de Carvalho | 559567"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h4 className="text-base font-semibold">
                Ruan Luca Feliciano de Carvalho
              </h4>
              <p className="text-sm mb-4">559567 | 1TDSA</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/ruan-luca-feliciano-de-carvalho-a36905267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="bg-purple-900 text-white py-2 rounded-lg font-bold hover:bg-purple-800 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/RuanLuca"
                  className="bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
