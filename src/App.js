import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import Galeria from "./components/mainContent/proyectos/detallesProyectos/Galeria";

function App() {
  const location = useLocation();

  const hiddenHeaderRoutes = ["/galeria"]; 

  return (
    <>
      {!hiddenHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
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
