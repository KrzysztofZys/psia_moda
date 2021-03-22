import React from "react";
import "../../App.scss";
import "./Nav.scss";
import logo from "./logo_big_bright_circle.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav navbar navbar-expand-lg px-5">
      <div className="nav__logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="dropdown"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="nav__icon"></div>
        <div className="nav__icon"></div>
        <div className="nav__icon"></div>
      </button>
      <div
        className="justify-content-end collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="nav__list navbar-nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="nav__links nav-item p-5">Psia moda</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className="nav__links nav-item p-5">O mnie</li>
          </Link>
          <Link to="/gallery" style={{ textDecoration: "none" }}>
            <li className="nav__links nav-item p-5">Galeria</li>
          </Link>
          <Link to="/prices" style={{ textDecoration: "none" }}>
            <li className="nav__links nav-item p-5">Cennik</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="nav__links nav-item p-5">Kontakt</li>
          </Link>
          <li className="nav-item p-5">
            <a href="tel:+48509154144" className="nav__links">
              +48 509 154 144
            </a>
          </li>
          <li className="nav-item p-3">
            <a className="fa" href="https://www.facebook.com/psi.fryzjer.salon">
              <img
                src={require("../../photos/Xfb.png")}
                className="fa"
                alt="fb-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
