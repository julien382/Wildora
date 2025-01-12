import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import GaleriePage from "./pages/GaleriePage/GaleriePage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  const location = useLocation(); // Récupère les infos sur la route actuelle

  useEffect(() => {
    window.scrollTo(0, 0); // Définit le défilement en haut de la page
  }, [location.pathname]); // S'exécute chaque fois que l'URL change

  return (
    <div id="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/a_propos" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/galerie" element={<GaleriePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
