import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import Galeria from "./components/mainContent/proyectos/detallesProyectos/Galeria";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();

  const hiddenHeaderRoutes = ["/galeria"];
  const hiddenFooterRoutes = ["/galeria"]; // Agregar las rutas para ocultar el footer

  return (
    <>
      {!hiddenHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
      {!hiddenFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
