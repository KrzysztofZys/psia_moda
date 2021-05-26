import React from "react";
import "../../App.scss";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer container-fluid back-violet--2">
      <div className="row p-5">
        <div className="col-md d-flex justify-content-center">
          <ul className="footer__list">
            <li>
              <div className="d-flex footer__logo">
                <img
                  className="img-fluid"
                  src={require("../../photos/Xlogo.png")}
                  alt="Logo"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md">
          <ul className="footer__list">
            <li className="pb-2 mb-3 footer__header">
              <h2>Dane kontaktowe: </h2>
            </li>
            <li>
              <p>
                <a href="tel:+48509154144" className="footer__link">
                  <i className="icon-basic-smartphone footer__icon" /> +48 509
                  154 144
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="mailto:ilonadebicka5@gmaill.com"
                  className="footer__link"
                >
                  <i className="icon-basic-mail footer__icon" />
                  ilonadebicka5@gmaill.com
                </a>
              </p>
            </li>
            <li>
              <p>
                <i className="icon-basic-home footer__icon" />
                <a
                  href="http://maps.google.com/?q=Psia Moda"
                  className="footer__link"
                >
                  {" "}
                  ul.Bohaterów Monte Cassino 16
                </a>
              </p>
            </li>
            <li>
              <p>
                <i
                  style={{ marginRight: 1.7 + "em" }}
                  className="footer__icon"
                />
                <a
                  href="http://maps.google.com/?q=Psia Moda"
                  className="footer__link"
                >
                  62-300 Września
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md">
          <ul className="footer__list">
            <li className="pb-2 mb-3 footer__header">
              <h2>Godziny otwarcia: </h2>
            </li>
            <li>
              <p>
                Poniedziałek - Piątek: <span>........</span> 8:00 - 18:00
              </p>
            </li>
            <li>
              <p>
                Sobota: <span>.......................................</span>{" "}
                10:00 - 17:00
              </p>
            </li>
            <li>
              <p>
                Niedziela: <span>....................................</span>{" "}
                Zamknięte
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md">
          <ul className="footer__list">
            <li>
              <a
                className="fa"
                href="https://www.facebook.com/psi.fryzjer.salon"
              >
                <img
                  src={require("../../photos/Xfb.png")}
                  className="fa"
                  alt="fb-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <h4 className="p-5 pb-4 footer__bottom">
          © COPYRIGHT 2020 PSIA MODA made by Krzysztof Zys
        </h4>
        <span className="footer__bottom footer__bottom--down">
          Some icons are designed by Dario Ferrando
        </span>
      </div>
    </footer>
  );
}

export default Footer;
