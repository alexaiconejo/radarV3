import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import ReportaForm from "./reporta";
import Main2 from "./main2";
import Navbar from "./Navbar";
import Conecta from "./conecta";


// export const PathConstants = { 
//   REPORTA: "/reporta",
//   MAIN2: "/main2",
// }

// const router = createBrowserRouter([
//   { path: PathConstants.REPORTA, element: <ReportaForm /> },
//   { path: PathConstants.MAIN2, element: <Main2 /> },


// ]);

// if (import.meta.hot) {
//   import.meta.hot.dispose(() => router.dispose());
// }

export default function Routes() {
  return 
  <Router>
    <Navbar />
    <Routes>
      <Route path="/reporta" element={<ReportaForm />} />
      <Route path="/conecta" element={<Conecta />} />
    </Routes>
  </Router>

  ;
}


