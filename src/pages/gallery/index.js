import React from 'react';
import './_gallery.scss';
import Head from '../../Components/Head/Head.js'
import {Link} from 'react-router-dom'

function Gallery() {
  return (
    <div className="App">
      <Head name='Galeria' src={require("../../photos/Xheadgallery.jpg")}></Head>
      <div className="container">
        <div className="row justify-content-center p-5 mt-5">
          <div className="tittle p-5">
            <h3 className="tittle--upper mb-3">Zdjęcia</h3>
            <h1 className="tittle--lower">Stylizacje piseków w psiej modzie</h1>
          </div>
        </div>
      
          <div className="row justify-content-center py-3 px-1">
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/1.png")} alt="P1" className="gallery__element"/>
            </div>
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/2.png")} alt="P2" className="gallery__element"/>
            </div>
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/3.png")} alt="P3" className="gallery__element"/>
            </div>
          </div>
          <div className="row justify-content-center py-3 px-1">
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/4.png")} alt="P1" className="gallery__element"/>
            </div>
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/5.png")} alt="P2" className="gallery__element"/>
            </div>
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/6.png")} alt="P3" className="gallery__element"/>
            </div>
          </div>
          <div className="row justify-content-center py-3 px-1">
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/7.png")} alt="P1" className="gallery__element"/>
            </div>
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/8.png")} alt="P2" className="gallery__element"/>
            </div>
            <div className="gallery__box">
            <img src={require("../../photos/Galeria/9.png")} alt="P3" className="gallery__element"/>
            </div>
          </div>
          <div className="row justify-content-center my-5 py-5">
            <Link to="/contact">
              <button className="button-def button-def--animated button-def--dark" type="button">Umów się na wizytę</button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Gallery;
