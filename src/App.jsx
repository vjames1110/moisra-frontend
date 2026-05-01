import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import Clients from "./components/Clients";
import Contact from "./pages/Contact"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 🔥 Dynamic Service Route */}
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
  );
}

export default App;