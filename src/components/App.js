import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./PaginaPrincipal";
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
