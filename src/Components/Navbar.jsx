import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const handleTheme = () => {
    dispatch({ type: "HANDLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="nav-logo">
        <img src="/images/DH-odonto.png" alt="Logo" className="logo" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favoritos">Favoritos</Link>
      </div>
      
      <button onClick={handleTheme} className="handleThemeButton">
      {state.theme === "light" ? "🌙" : "☀️"} 
      </button>
    </nav>
  );
};

export default Navbar;
