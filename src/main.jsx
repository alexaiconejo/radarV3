import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Loader from './components/Loader.jsx';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Main2 from "./components/Main2.jsx";
import Conecta from "./components/conecta.jsx";
import Notas from "./components/notas.jsx";
import Reporta from "./components/reporta.jsx";
import Verificado from "./components/verificado.jsx";


import Root from "./routes/Root.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      { path:"/", element:<App/>, },

      { path:"/conecta", element:< Conecta/>, },
      { path:"/reporta", element:< Reporta/>, },
      { path:"/notas", element:< Notas/>, },
      { path:"/main2", element:< Main2/>, },
      { path:"/verificado", element:< Verificado/>, },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

<RouterProvider router={router} />
  </React.StrictMode>
 );
