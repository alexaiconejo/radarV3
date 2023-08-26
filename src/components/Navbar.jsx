import * as React from "react";
import './navbar.css';
import {
  Link,
  Outlet,

} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="heading">
      
      <div id="menu">
        <div id="menuPCBox">
          <ul id="menuPC">
          <li>
              {/* Enlace a la ruta MAIN2 */}
              <Link to="/mapa"><div id="logo">
        <img id="logoImg" src="../src/assets/logo.png" alt="" />
      </div></Link>
            </li>
            <li>
              {/* Enlace a la ruta REPORTA */}
              <Link to="/reporta">Reporta</Link>
            </li>
            <li>
              {/* Enlace a la ruta REPORTA */}
              <Link to="/notas">Notas</Link>
            </li>
            <li>
              {/* Enlace a la ruta REPORTA */}
              <Link to="/conecta">Conecta</Link>
            </li>
            
            
          </ul>
        </div>
      </div>
      <div id="botonMenu">
        <img id="menuImg" src="../src/assets/menu.png" alt="" />
      </div>
    </div>
    
  );
}
