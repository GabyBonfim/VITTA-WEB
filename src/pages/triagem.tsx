import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import "../assets/css/triagem.css";

export default function Triagem() {
  const [bolinhas, setBolinhas] = useState<{ x: number; y: number }[]>([]);
  const bonecoRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!bonecoRef.current) return;

    const boneco = bonecoRef.current.getBoundingClientRect();
    const x = ((e.clientX - boneco.left) / boneco.width) * 100;
    const y = ((e.clientY - boneco.top) / boneco.height) * 100;

    setBolinhas((prev) => [...prev, { x, y }]);
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Triagem</h2>
        <p className="text-gray-800 mb-6">
          Marque no boneco abaixo onde está sua dor.
        </p>

        <div
          className="relative inline-block w-full max-w-[300px]"
          ref={bonecoRef}
          onClick={handleClick}
        >
          <img
            src="images/boneco.png"
            alt="Boneco Humano"
            className="w-full h-auto rounded-lg"
          />
          {bolinhas.map((b, index) => (
            <div
              key={index}
              className="absolute w-3.5 h-3.5 bg-red-600 rounded-full pointer-events-none animate-[pop_0.2s_ease_forwards]"
              style={{ left: `${b.x}%`, top: `${b.y}%` }}
            />
          ))}
        </div>

        <Link to="/triagemd">
          <button className="mt-6 bg-purple-900 hover:bg-purple-300 hover:text-black text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors">
            Continuar
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
