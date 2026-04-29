import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 🔥 Dynamic Service Route */}
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
  );
}

export default App;