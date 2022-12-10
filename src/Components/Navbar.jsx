import React from 'react'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { removeTokenFromStorage } from "./utils/localStorage.service";
import styles from "./Navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, setDarkTheme, setLightTheme, login, setLogout } =
    useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  const logout = () => {
    setLogout();
    removeTokenFromStorage();
  };

  return (
    // <nav>
    //   {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */ }
    //   {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    //   { <button>Change theme</button> }
    // </nav>
    <header className="sticky-top">
    <nav
      className={`navbar navbar-expand-sm ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      aria-label="Third navbar example"
    >
      <div className="container">
        <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
          DH Odonto
        </Link>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarsExample03"
        >
          <ul className="navbar-nav mb-2 mb-sm-0">
            <li className={`nav-item ${styles.navBarLink}`}>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className={`nav-item ${styles.navBarLink}`}>
              <Link className="nav-link" to="/favs">
                Favs
              </Link>
            </li>
            <li className={`nav-item ${styles.navBarLink}`}>
              <Link className="nav-link" to="/contacto">
                Contact
              </Link>
            </li>

            <li className={`nav-item`}>
              <button
                className={`btn btn-${isDarkMode ? "light" : "dark"} ${
                  styles.btnStyle
                }`}
                onClick={changeTheme}
              >
                {isDarkMode ? "☀" : "🌙"}{" "}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar