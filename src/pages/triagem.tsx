import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function Triagem() {
  const [bolinhas, setBolinhas] = useState<{ x: number; y: number }[]>([]);
  const bonecoRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!bonecoRef.current) return;

    const boneco = bonecoRef.current.getBoundingClientRect();

    // Calcula posição relativa ao container
    const x = ((e.clientX - boneco.left) / boneco.width) * 100;
    const y = ((e.clientY - boneco.top) / boneco.height) * 100;

    setBolinhas((prev) => [...prev, { x, y }]);
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="triagem-container">
          <h2>Triagem</h2>
          <p>Marque no boneco abaixo onde está sua dor.</p>

          <div className="boneco-container" ref={bonecoRef} onClick={handleClick}>
            <img src="images/boneco.png" alt="Boneco Humano" />
            {/* Renderiza todas as bolinhas */}
            {bolinhas.map((b, index) => (
              <div
                key={index}
                className="bolinha"
                style={{
                  left: `${b.x}%`,
                  top: `${b.y}%`,
                }}
              ></div>
            ))}
          </div>

          <Link to="/triagemd">
            <button className="btn-continuar">Continuar</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
