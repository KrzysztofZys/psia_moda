import React from "react";
import "./_home.scss";
import Carousel from "../../Components/Carousel/Carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="header mb-b">
        <div className="header__text-box">
          <p>Salon Groomerski</p>
          <p>Psia Moda</p>
        </div>
        <div className="carousel">
          <div className="carousel--box">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="tittle p-5">
            <h3 className="tittle--upper mb-3">
              Salon dla psów i kotów we Wrześni
            </h3>
            <h1 className="tittle--lower">WITAMY W PSIEJ MODZIE</h1>
          </div>
        </div>
        <div className="about row pb-5 mb-5">
          <div className="col-lg mx-5 px-5">
            <div className="row justify-content-center">
              <h2 className="about__header">
                "Prawdziwy przyjaciel pozostawi ślady łap na Twoim sercu"
              </h2>
              <div className="about__text py-3 px-3">
                <p>
                  Mam zaszczyt zaprosić Was do miejsca, które stanowi realizację
                  moich marzeń i pasji. W Psiej Modzie czeka na Was przyjazna
                  atmosfera. Każdym Pieskiem i Kotkiem zaoopiekuję się zgodnie z
                  najwyższymi standardami, żeby zwierzak mógł poczuć się
                  bezpiecznie i komfortowo. Zapewniam szeroki wachlarz
                  profesjonalnie wykonywanych usług, który zaspokoi nawet
                  najbardziej wymagającego klienta. Salon wyposażony jest w
                  najwyżej jakości sprzęt. Cały czas uczestniczę w kursach,
                  warsztatach i seminariach groomerskich by podnieść swoje
                  kwalifikacje i być na czasie z najnowszymi trendami
                  strzyżenia.
                </p>
              </div>
              <div className="pb-5">
                <Link to="/about">
                  <button
                    className="button-def button-def--animated button-def--dark"
                    type="button"
                  >
                    Dowiedz się więcej
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg justify-content-center">
            <img
              src={require("../../photos/Xhomebaddy.jpg")}
              alt="baddy"
              className="about__photo"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid section-work">
        <div className="container">
          <div className="row  mb-5">
            <div className="col-lg feature-box">
              <i className="feature-box__icon icong-bath"></i>
              <h3 className="feature-box__header">Kąpanie</h3>
              <p className="feature-box__text">
                Pies jest kąpany w szamponach najwyższej jakości przeznaczonych
                specjalnie dla psów. Są one bezpiecznie oraz zachwycają
                zapachem, który jeszcze długo po myciu utrzymuje się na sierści
                pupila.
              </p>
            </div>
            <div className="col-lg feature-box">
              <i className="feature-box__icon icong-scissors"></i>
              <h3 className="feature-box__header">Strzyżenie</h3>
              <p className="feature-box__text">
                Strzyżenie przeprowadzane jest w bezpiecznych i komfortowych dla
                psa warunkach. Używane są maszynki i trymery z najwyżej półki,
                by można było zapewnić najlepszą jakość usługi, a pupil pozostał
                spokojny.
              </p>
            </div>
            <div className="col-lg feature-box">
              <i className="feature-box__icon icong-comb"></i>
              <h3 className="feature-box__header">Stylizacja</h3>
              <p className="feature-box__text">
                Stylizacja jest najważniejszym elementem pracy groomera. W
                Psiej Modzie stawia się na styl i elegancje zgodnie z
                najnowszymi trendami mody.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container justify-content-center mb-5 pb-5">
        <h2 className="tittle tittle--lower p-5 m-5">Recenzje klientów</h2>
        <div className="row">
          <div className="col-lg review mx-4 px-5 py-3">
            <div className="review__text">
              <p>
                <i>
                  Fantastyczne miejsce! Można zostać z pieskiem na czas
                  strzyżenia, aby czuł się bardziej komfortowo. Przemiła
                  obsługa, pani zna się na rzeczy. Strzyże fachowo, szybko i z
                  zachowaniem wszystkich zasad higieny. Jak najbardziej polecam
                  wszystkim właścicielom czworonogów.
                </i>
              </p>
            </div>
            <h3 className="review__name">Kamila</h3>
          </div>
          <div className="col-lg review mx-4 px-5 py-3">
            <div className="review__text">
              <p>
                <i>
                  Myślę, że nie każda osoba nadaje się do tego zawodu, ale Pani
                  Ilonka jest odpowiednią osobą na odpowiednim miejscu. Pełen
                  profesjonalizm i zaangażowanie całym sercem w wykonywaną
                  pracę. Usługi groomerskie na najwyższym poziomie.
                </i>{" "}
              </p>
            </div>
            <h3 className="review__name">Karolina</h3>
          </div>
          <div className="col-lg review mx-4 px-5 py-3">
            <div className="review__text">
              <p>
                <i>
                  Zdecydowanie polecam! Nasz husky w ciągu niecałej godziny ze
                  sfilcowanego przybrudzonego liniejącego nieszczęścia zamienił
                  się w pięknego puchatego huskoksięcia. Podszerstek dobrze
                  wyczesany sierść miękka i błyszcząca. Pies zadowolony
                  absolutnie niezestresowany a ja pozbyłam się ton puchu
                  fruwającego po całym domu.
                </i>
              </p>
            </div>
            <div className="review__name">
              <h3>Inga</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
