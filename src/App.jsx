import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* 🔥 Dynamic Service Route */}
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
  );
}

export default App;