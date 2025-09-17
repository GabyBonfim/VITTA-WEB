import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Integrantes() {
  const integrantes = [
    {
      nome: "Gabriely Bonfim Silva",
      ra: "566242 | 1TDSA",
      imagem: "images/gaby.jpg",
      linkedin:
        "https://www.linkedin.com/in/gabriely-bonfim-87010a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/GabyBonfim",
    },
    {
      nome: "Mirelly Sousa Alves",
      ra: "566299 | 1TDSA",
      imagem: "images/mirelly.jpg",
      linkedin: "https://www.linkedin.com/in/mirelly-sousa-8038672b9/",
      github: "https://github.com/mirellysousa",
    },
    {
      nome: "Ruan Luca Feliciano de Carvalho",
      ra: "559567 | 1TDSA",
      imagem: "images/ruan.jpg",
      linkedin:
        "https://www.linkedin.com/in/ruan-luca-feliciano-de-carvalho-a36905267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/RuanLuca",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-[1100px] w-[90%] mx-auto my-12 px-2">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-purple-700 to-purple-500 rounded-3xl p-10 mb-12 shadow-lg text-white">
            <div className="flex flex-wrap justify-between items-center gap-10">
              <div className="flex flex-col items-start max-w-[400px]">
                <img
                  src="images/vittahc (1).png"
                  alt="Logo Vitta"
                  className="w-full max-w-[200px] drop-shadow-lg mb-3"
                />
                <p className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm w-fit font-semibold shadow">
                  Saúde que se conecta com você.
                </p>
              </div>

              <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl max-w-[600px]">
                <h3 className="text-purple-700 text-2xl font-bold mb-3">
                  Sobre nós
                </h3>
                <p className="leading-relaxed">
                  Nosso objetivo é tornar o acesso à saúde mais prático e humano.
                  No Vitta Web você encontra suas consultas agendadas, pode fazer
                  sua triagem online e se preparar para um atendimento mais
                  rápido e eficiente. Aqui, a tecnologia trabalha a favor da sua
                  saúde.
                </p>
              </div>
            </div>
          </div>

          {/* Cards dos integrantes */}
          <h2 className="text-center text-3xl font-bold text-purple-700 mb-10">
            Nossa Equipe
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {integrantes.map((i) => (
              <div
                key={i.nome}
                className="bg-[#f4f0e7] rounded-3xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={i.imagem}
                    alt={i.nome}
                    className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-purple-300 shadow-md"
                  />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-20 h-20 bg-purple-200 blur-2xl opacity-30 rounded-full"></div>
                </div>

                <h4 className="text-lg font-bold mt-4 text-purple-800">
                  {i.nome}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{i.ra}</p>

                <div className="flex justify-center gap-3">
                  <a
                    href={i.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-bold transition"
                  >
                    <i className="fab fa-linkedin mr-2"></i> LinkedIn
                  </a>
                  <a
                    href={i.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-bold transition"
                  >
                    <i className="fab fa-github mr-2"></i> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
