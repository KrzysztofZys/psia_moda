import React from 'react';
import './_contact.scss';
import Head from '../../Components/Head/Head.js'
import ContactForm from '../../Components/ContactForm/ContactForm.js'

function Contact() {
  return (
    <div className="App">
      <Head name='Kontakt' src={require("../../photos/Xheadcontact.jpg")}></Head>
      <div className="container contact">
        <div className="row justify-content-center p-5 mt-5">
          <div className="tittle p-5">
            <h3 className="tittle--upper mb-3">Kontakt</h3>
            <h1 className="tittle--lower">Umów się na wizytę</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg">
            <div className="row justify-content-center">
              <p className="contact__text py-3"><i className="contact__icon contact__icon--big icong-scissors"></i>Chcecie zadbać o swojego pupila? Nie jesteście zadowoleni z jego wyglądu? A może szukacie dobrego specjalisty od stylizacji? Jeżeli tak, zapraszam do mojego salonu groomerskiego we Wrześni.</p>
              <p className="contact__text py-3">Zapraszam klientów i klientki ze swoimi pupilami nie tylko z Wrześni! Skontaktuj się, a doradzę w jaki sposób przygotować pieska do strzyżenia by było ono najmniej stresujące.</p>
              <p className="contact__text py-3">Dla mnie najważniejsze jest Wasze zadowolenie. Dlatego wszelkie uwagi przesyłaj na adres: <a href="mailto:ilonadebicka5@gmaill.com" className="contact__link">ilonadebicka5@gmail.com</a></p>
            </div>
          </div>
          <div className="col-lg">
          <ul className="contact__list p-5 m-5">
            <li>
              <p><a href="tel:+48509154144" className="contact__link"><i className="icon-basic-smartphone contact__icon mr-3  "/> +48 509 154 144</a></p>
            </li>
            <li>
              <p><a href="mailto:ilonadebicka5@gmaill.com" className="contact__link"><i className="icon-basic-mail contact__icon mr-3"/>ilona5.debicka@gmail.com</a></p>
            </li>
            <li>
              <p><i className="icon-basic-home contact__icon mr-3"/><a href="http://maps.google.com/?q=Psia Moda" className="contact__link"> ul.Bohaterów Monte Cassino 16, Września</a></p>
            </li>
            <li>
              <p><i className="icon-basic-clock contact__icon mr-3"/><span className="contact__link">Godziny otwarcia:</span></p>
              <ul className="contact__list mx-3">
                <li>Poniedziałek - Piątek: 8:00 - 18:00</li>
                <li>Sobot: 10:00 - 17:00</li>
                <li>Niedziela: Zamknięte</li>
              </ul>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid contact-back">
        <div className="row justify-content-center px-5 mt-3">
          <div className="tittle pb-5">
            <h1 className="tittle--lower py-5">Napisz do nas</h1>
          </div>
        </div>
        <div className="container">
        <div className="row pb-5">
          <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
