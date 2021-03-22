import React from "react";
import "./_about.scss";
import Head from "../../Components/Head/Head.js";

function About() {
  return (
    <div className="App">
      <Head name="O mnie" src={require("../../photos/Xheadabout.jpg")}></Head>
      <div className="container">
        <div className="row justify-content-center p-5 mt-5">
          <div className="tittle p-5">
            <h3 className="tittle--upper mb-3">Ilona Dębicka</h3>
            <h1 className="tittle--lower">Groomerka z pasją</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row main pb-5 mb-5">
          <div className="col-xl">
            <p className="main__text">
              Pasja to czynnik motywujący do ciągłego polepszania swoich
              umiejętności i czerpania przyjemności ze swojej pracy. Moją pasją
              są psy, to dzięki nim odczuwam radość i zadowolenie. Praca, którą
              wykonuję jest połączeniem mojej wieloletniej miłości do zwierząt,
              której korzenie sięgają najmłodszych lat życia. Wychowałam się w
              domu pełnym miłości do zwierząt, gdzie psy i koty były stałymi
              towarzyszami życia. Moja przygoda z groomingiem zaczęła się w
              2017r. Wiedzę i doświadczenie nabrałam podczas 3 tygodniowego
              pobytu w salonie groomerskim w Poznaniu, gdzie pod okiem mojej
              mentorki i nauczycielki doskonaliłam swoje umiejętności
              groomerskie w strzyżeniu i pielęgnacji psów różnych ras. Dbając o
              najwyższą jakość świadczonych przeze mnie usług, staram się
              nieustannie doskonalić swój warsztat pracy. Brałam udział w ponad
              10 krajowych szkoleniach i seminariach. Na bieżąco śledzę światowe
              trendy modowe i nowości z zakresu strzyżenia psów. Warto
              wspomnieć, że mój salon strzyżenia psów Psia Moda podczas
              pielęgnacji piesków nie stosuje żadnych środków farmakologicznych!
              W swojej pracy dokładam wszelkich starań aby każdy milusiński czuł
              się jak najlepiej i w jak najmniejszym stopniu odczuwał stres.
              Posiadam kompetentną wiedzę w zakresie behawioryzmu zwierząt,
              dzięki czemu wiem, w jaki sposób podchodzić do psów, niezależnie
              od ich charakteru oraz temperamentu. Dysponuję wysokiej jakości
              sprzętem groomerskim, a do pielęgnacji używam wyłącznie
              profesjonalnych i sprawdzonych kosmetyków najwyższej jakości.
            </p>
          </div>
          <div className="col-xl align-middle justify-content-middle">
            <img
              src={require("../../photos/Xaboutmrs.png")}
              alt="MrsGroomer"
              className="main__photo"
            />
          </div>
        </div>
        <div className="row call">
          <div className="call__box">
            <div className="call__text justify-content-center p-5">
              <h1 className="call__header">
                Odwiedź Psią Modę na Facebooku{" "}
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
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
