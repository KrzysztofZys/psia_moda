import React from 'react';
import {Link} from 'react-router-dom'
import './Head.scss'

class Head extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row head__over">
            <img src={this.props.src} alt="header" className="head__photo"/>
            <img src={require("../../photos/Xlogo.png")} alt="logo" className="head__logo"/>
            <div className="head">
              <h1 className="head__tittle">{this.props.name}</h1>
              <h4 className="head__navigation">
                <Link to="/" style={{textDecoration:'none'}}><span className="head__link">Strona główna</span></Link> - {this.props.name}
              </h4>
            </div>
          </div>
        </div>
      )}
}

export default Head;