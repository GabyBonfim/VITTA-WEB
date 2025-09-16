import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import AgendarTele from "./pages/agendartele";
import Ajuda from "./pages/ajuda";
import Faq from "./pages/faq";
import Integrantes from "./pages/integrantes";
import Monitoramento from "./pages/monitoramento";
import Notificacoes from "./pages/notificacoes";
import Triagem from "./pages/triagem";
import Triagemd from "./pages/triagemd";
import './App.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/agendartele" element={<AgendarTele />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/triagem" element={<Triagem />} />
        <Route path="/triagemd" element={<Triagemd />} />

      </Routes>
    </BrowserRouter>
  );
}
