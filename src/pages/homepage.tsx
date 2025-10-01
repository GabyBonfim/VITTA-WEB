import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface DadosMonitoramento {
  pressao: string;
  glicemia: string;
  batimentos: string;
  respiracao: string;
  data: string;
}

export default function Homepage() {


    const noticias = [
    {
      img: "/images/moco.png",
      titulo: "Busca por atendimentos em saúde mental cresce após a pandemia",
      texto:
        "Em Ribeirão Preto, número de atendimentos em saúde mental já passa de 200 mil por ano",
      link: "https://jornal.usp.br/campus-ribeirao-preto/busca-por-atendimentos-em-saude-mental-cresce-apos-a-pandemia/",
    },
    {
      img: "/images/hc.png",
      titulo: "Hospital das Clínicas da USP se torna centro de referência internacional no combate ao câncer",
      texto:
        "Acordo oficial foi realizado nesta terça-feira (16) na sede da agência, em Viena, Áustria. Instituição vai atuar como polo regional de conhecimento especializado e treinamento.",
      link: "https://g1.globo.com/sp/sao-paulo/noticia/2025/09/16/hospital-das-clinicas-da-usp-se-torna-centro-de-referencia-internacional-no-combate-ao-cancer.ghtml",
    },
    {
      img: "/images/exposicao.png",
      titulo: "Exposição mostra mobilização do Hospital das Clínicas de SP no combate à pandemia da Covid-19",
      texto:
        "Exposição em cartaz no mês de junho mostra o percurso da doença desde os primeiros casos registrados até o início da vacinação no país",
      link: "https://www.saude.sp.gov.br/coordenadoria-de-controle-de-doencas/noticias/24062025-exposicao-mostra-mobilizacao-do-hospital-das-clinicas-de-sp-no-combate-a-pandemia-da-covid-19",
    },
  ];

  const [indexAtual, setIndexAtual] = useState(0);

  // Funções para avançar e voltar
  const proximaNoticia = () => {
    setIndexAtual((prev) => (prev + 1) % noticias.length);
  };

  const noticiaAnterior = () => {
    setIndexAtual((prev) => (prev - 1 + noticias.length) % noticias.length);
  };


    const [dadosMonitoramento, setDadosMonitoramento] = useState<
      DadosMonitoramento | undefined
    >(undefined); 

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("monitoramento");
    if (dadosSalvos) {
      try {
        const dados = JSON.parse(dadosSalvos) as DadosMonitoramento;
        setDadosMonitoramento(dados);
      } catch (e) {
        console.error("Erro ao fazer o parse dos dados de monitoramento:", e);
      }
    }
  }, []); 


  const formatarValor = (valor: string | undefined, unidade: string) => {
    return valor ? `${valor} ${unidade}` : "Não informado";
  };
  
  const textoDefault = "Aguardando monitoramento";

  const dataFormatada = dadosMonitoramento?.data 
    ? `Monitoramento de ${dadosMonitoramento.data}` 
    : textoDefault;
  return (
    <>
      <Navbar />

<main className="w-full px-5">

  <div className="max-w-[1100px] mx-auto">
    {/* Carrossel de Notícias */}
    <section className="bg-white rounded-xl p-5 shadow-md mb-10 mt-10 relative">
      <div className="flex items-center gap-5">
        <img
          src={noticias[indexAtual].img}
          alt="Notícia"
          className="w-[250px] rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {noticias[indexAtual].titulo}
          </h3>
          <p className="text-gray-700 mb-3">{noticias[indexAtual].texto}</p>
          <a
            href={noticias[indexAtual].link}
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition"
          >
            Ver matéria
          </a>
        </div>
      </div>

      {/* Botões do Carrossel */}
      <button
        onClick={noticiaAnterior}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-800 transition"
      >
        ◀
      </button>
      <button
        onClick={proximaNoticia}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-800 transition"
      >
        ▶
      </button>
    </section>

    {/* Conteúdo - Usuário + Saúde */}
    <div className="flex flex-wrap gap-8 mb-10 justify-center">
      {/* Card Usuário */}
      <div className="bg-purple-200 p-5 rounded-2xl flex items-center gap-4 shadow-md flex-1 min-w-[280px]">
        <img src="/images/user-icon.png" alt="Mascote" className="w-[100px]" />
        <div>
          <h3 className="font-bold mb-1">Adriano Milanez</h3>
          <p>Nascido(a) em: 16/05/2006</p>
          <p>CPF: 352.789.356-03</p>
          <p>Sexo: Masculino</p>
        </div>
      </div>

   {/* Card Saúde - ATUALIZADO */}
            <div className="bg-orange-50 p-5 rounded-2xl shadow-md flex-1 min-w-[280px]">
              <h4 className="font-semibold text-lg mb-3">
                {dataFormatada}
              </h4>
              <ul className="space-y-2">
                <li className="bg-amber-200 font-bold px-3 py-2 rounded-md">
                  Pressão -{" "}
                  {formatarValor(dadosMonitoramento?.pressao, "mmHg")}
                </li>
                <li className="bg-amber-200 font-bold px-3 py-2 rounded-md">
                  Glicemia -{" "}
                  {formatarValor(dadosMonitoramento?.glicemia, "mg/dL")}
                </li>
                <li className="bg-amber-200 font-bold px-3 py-2 rounded-md">
                  Respiração -{" "}
                  {dadosMonitoramento?.respiracao || "Não informado"}
                </li>
                <li className="bg-amber-200 font-bold px-3 py-2 rounded-md">
                  Coração -{" "}
                  {dadosMonitoramento?.batimentos || "Não informado"}
                </li>
              </ul>
            </div>
          </div>

        {/* Cards de Acesso Rápido */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Notificações */}
          <div className="flex-1 min-w-[250px] max-w-[350px] rounded-2xl p-6 text-white text-justify shadow-lg bg-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="30"
              height="30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.708A2.25 2.25 0 0 1 12 19.5a2.25 2.25 0 0 1-2.857-1.792m5.714 0a48.108 48.108 0 0 0 4.036-1.103A2.25 2.25 0 0 0 19.5 14.25v-2.636a6.75 6.75 0 1 0-13.5 0v2.636a2.25 2.25 0 0 0-1.393 2.355c.84.284 2.17.736 4.036 1.103m5.714 0H9.429"
              />
            </svg>
            <h4 className="mt-3 mb-2 text-lg font-semibold">Notificações</h4>
            <p className="mb-3">
              Veja se há triagens, monitoramentos ou retornos médico aqui.
            </p>
            <Link to="/notificacoes">
              <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition">
                Ver mais
              </button>
            </Link>
          </div>

          {/* Monitoramento */}
          <div className="flex-1 min-w-[250px] max-w-[350px] rounded-2xl p-6 text-white text-justify shadow-lg bg-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="30"
              height="30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.123-4.5-4.75-4.5-1.87 0-3.487 1.144-4.25 2.75-.763-1.606-2.38-2.75-4.25-2.75C5.123 3.75 3 5.765 3 8.25c0 7.108 9 12 9 12s9-4.892 9-12z"
              />
            </svg>
            <h4 className="mt-3 mb-2 text-lg font-semibold">Monitoramento</h4>
            <p className="mb-3">
              Monitore sua saúde e receba retornos automáticos!
            </p>
            <Link to="/monitoramento">
              <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition">
                Ver mais
              </button>
            </Link>
          </div>

          {/* Agendar Teleconsulta */}
          <div className="flex-1 min-w-[250px] max-w-[350px] rounded-2xl p-6 text-white text-justify shadow-lg bg-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <title>Agendamento de exame</title>
              <rect
                x="3"
                y="5"
                width="18"
                height="16"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 3v4M8 3v4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="8"
                y1="12"
                x2="11"
                y2="15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="11"
                y1="15"
                x2="17"
                y2="9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className="mt-3 mb-2 text-lg font-semibold">
              Agendar Teleconsulta
            </h4>
            <p className="mb-3">Entenda como agendar uma teleconsulta.</p>
            <Link to="/agendartele">
              <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition">
                Ver mais
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>

      <Footer />
    </>
  );
}
