import React from "react";
import "./_prices.scss";
import Head from "../../Components/Head/Head.js";
import { Link } from "react-router-dom";

function Prices() {
  return (
    <div className="App">
      <Head name="Cennik" src={require("../../photos/Xheadprices.jpg")}></Head>
      <div className="container">
        <div className="row justify-content-center p-5 mt-5">
          <div className="tittle p-5">
            <h3 className="tittle--upper mb-3">Oferta</h3>
            <h1 className="tittle--lower">Pakiety w psiej modzie</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg">
            <img
              src={require("../../photos/Xprices.png")}
              alt="baddy"
              className="combo-box__photo"
            />
          </div>
          <div className="col-lg combo-box">
            <h3 className="combo-box__header">Pakiet &nbsp;Czyścioszka</h3>
            <ul className="combo-box__list">
              <li className="combo-box__element">Kąpanie</li>
              <li className="combo-box__element">Rozczesywanie</li>
              <li className="combo-box__element">Suszenie</li>
              <li className="combo-box__element">Wyciąganie kleszczy</li>
              <li className="combo-box__element">Obcinanie pazurków</li>
              <li className="combo-box__element">Kosmetyka uszów</li>
            </ul>
          </div>
          <div className="col-lg combo-box">
            <h3 className="combo-box__header">Pakiet Pupila</h3>
            <ul className="combo-box__list">
              <li className="combo-box__element">Kąpanie</li>
              <li className="combo-box__element">Rozczesywanie</li>
              <li className="combo-box__element">Suszenie</li>
              <li className="combo-box__element">Trymowanie</li>
              <li className="combo-box__element">Strzyżenie</li>
              <li className="combo-box__element">Stylizacja</li>
              <li className="combo-box__element">Wyciąganie kleszczy</li>
              <li className="combo-box__element">Obcinanie pazurków</li>
              <li className="combo-box__element">Kosmetyka uszu</li>
            </ul>
          </div>
        </div>
        <div className="row prices">
          <div className="col-lg p-4">
            <h2 className="prices__tittle prices__tittle--main">Małe psy</h2>
            <h4 className="prices__tittle prices__tittle--sub">
              np. York, Maltańczyk
            </h4>
            <div className="row py-4">
              <div className="col-8">
                <p className="prices__text">Pakiet Pupila</p>
                <p className="prices__text">Pakiet Czyścioszka</p>
                <p className="prices__text">Obcinanie pazurków</p>
                <p className="prices__text">Kosmetyka uszu</p>
              </div>
              <div className="col-4">
                <p className="prices__text text-center">100 zł</p>
                <p className="prices__text text-center">80 zł</p>
                <p className="prices__text text-center">15 zł</p>
                <p className="prices__text text-center">30 zł</p>
              </div>
            </div>
          </div>
          <div className="col-lg p-4">
            <h2 className="prices__tittle prices__tittle--main">Średnie psy</h2>
            <h4 className="prices__tittle prices__tittle--sub">
              np. Cocker Spaniel, Terrier
            </h4>
            <div className="row py-4">
              <div className="col-8">
                <p className="prices__text">Pakiet Pupila</p>
                <p className="prices__text">Pakiet Czyścioszka</p>
                <p className="prices__text">Obcinanie pazurków</p>
                <p className="prices__text">Kosmetyka uszu</p>
              </div>
              <div className="col-4">
                <p className="prices__text text-center">130 zł</p>
                <p className="prices__text text-center">100 zł</p>
                <p className="prices__text text-center">15 zł</p>
                <p className="prices__text text-center">30 zł</p>
              </div>
            </div>
          </div>
          <div className="col-lg p-4">
            <h2 className="prices__tittle prices__tittle--main">Duże psy</h2>
            <h4 className="prices__tittle prices__tittle--sub">
              np. Labrador, Nowofundland
            </h4>
            <div className="row py-4">
              <div className="col-8">
                <p className="prices__text">Pakiet Pupila</p>
                <p className="prices__text">Pakiet Czyścioszka</p>
                <p className="prices__text">Obcinanie pazurków</p>
                <p className="prices__text">Kosmetyka uszu</p>
              </div>
              <div className="col-4">
                <p className="prices__text text-center">230 zł</p>
                <p className="prices__text text-center">200 zł</p>
                <p className="prices__text text-center">30 zł</p>
                <p className="prices__text text-center">40 zł</p>
              </div>
            </div>
          </div>
        </div>
        <p className="prices__text my-4">
          * Podane ceny są orientacyjne i różnią się w zależności od stanu
          sierści pupila
        </p>
        <div className="row justify-content-center py-5 mb-5">
          <Link to="/contact">
            <button
              className="button-def button-def--animated button-def--dark"
              type="button"
            >
              Zadzwoń i umów się na wizytę
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Prices;
