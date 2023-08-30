import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Loader from './components/Loader.jsx';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import "./index.css";
import Marquee from './components/marquee.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Loader
      urls={{
        departamentos: "data/mapsData/departamentos-argentina.json",
        departamentosBsAs: "data/mapsData/departamentos-buenos_aires.json",
        provincias: "data/mapsData/provincias.json",
        rutas: "data/mapsData/rutas.json",
      }}
      
    />
 <Router>
    <Navbar /> {/* Navbar siempre se muestra */}
    <Marquee></Marquee>
   <App></App>
    <Routes >
    <Route path="/radarV3/" element={App} exact /> {/* Página mapa */}
      <Route path="/radarV3/conecta" element={App} /> {/* Página Conecta */}
      <Route path="/radarV3/reporta" element={App} /> {/* Página Reporta */}
      <Route path="/radarV3/notas" element={App} /> {/* Página Reporta */}
      <Route path="/radarV3/listado" element={App} /> {/* Página Reporta */}


    </Routes>
  </Router>
    
  </React.StrictMode>
);
