import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar /> {/* Navbar siempre se muestra */}
   <App></App>
    <Routes>
      <Route path="/mapa" element={App} /> {/* Página mapa */}
      <Route path="/conecta" element={App} /> {/* Página Conecta */}
      <Route path="/reporta" element={App} /> {/* Página Reporta */}
      <Route path="/notas" element={App} /> {/* Página Reporta */}
      <Route path="/listado" element={App} /> {/* Página Reporta */}

    </Routes>
  </Router>,


);
