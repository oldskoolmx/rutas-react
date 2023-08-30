//import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Dinamica from "./components/Dinamica";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container mt-5 ">
        <h1>Navbar ......</h1>
        <div className="btn-group">
          <NavLink to="/" className="btn btn-dark " activeclassname="active">
            Inicio
          </NavLink>
          <Link to="/nosotros" className="btn btn-dark ">
            Nosotros
          </Link>
          <Link to="/contacto" className="btn btn-dark ">
            Contacto
          </Link>
          <Link to="/dinamica" className="btn btn-dark ">
            Dinamica
          </Link>
        </div>
        <hr />
        <Routes>
          <Route path="/dinamica/:id" element={<User />}>

          </Route>

          <Route path="/" exact element={<Inicio />}>

          </Route>
          <Route path="/contacto" element={<Contacto />}>

          </Route>
          <Route path="/nosotros" element={<Nosotros />}>

          </Route>
          <Route path="/dinamica" element={<Dinamica />}>

          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
