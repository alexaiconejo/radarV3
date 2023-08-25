import * as React from "react";
import './navbar.css';
import {
  Link,
  Outlet,

} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="heading">
      <div id="logo">
        <img id="logoImg" src="../src/assets/logo.png" alt="" />
      </div>
      <div id="menu">
        <div id="menuPCBox">
          <ul id="menuPC">
            <li>
              {/* Enlace a la ruta REPORTA */}
              <Link to="/reporta">Reporta</Link>
            </li>
            <li>
              {/* Enlace a la ruta MAIN2 */}
              <Link to="/radarV3/main2">Main2</Link>
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
