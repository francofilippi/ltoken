import React, { Component } from 'react' //importo libreria react
import { Link } from 'react-router-dom';
import { Animated } from "react-animated-css";

class Navbar extends Component {


  constructor(props) { //corre cuando el componente se crea
    super(props) //llama a la funcion constructor del componente que estamos extendiendo arriba (extends Component)
    this.state = { //default state
      scrolleado: ''
    }
  }
  // "header_wrap fixed-top"
  render() {
    return (
      <React.Fragment>
        <header className="header_wrap fixed-top nav-fixed">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <Animated animationIn="fadeInLeft" isVisible={true}>
                <Link className="navbar-brand page-scroll" to="/">
                  <img className="logo_dark" style={{ width: '260px', height: 'auto' }} src="./assets/images/LOOP_LOGO.png"
                    alt="logo" />
                </Link>
              </Animated>
              <Animated animationIn="fadeInRight" isVisible={true}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"> <span
                    className="icofont-navigation-menu"></span>
                </button>
              </Animated>

              <div className="collapse navbar-collapse justify-content-end" id="navbarToggleExternalContent">
                <Animated animationIn="fadeInDown" isVisible={true}>
                  <ul className="navbar-nav nav_btn">
                    <li><a className="nav-link page-scroll" href="/#token">Token</a></li>
                    <li><a className="nav-link page-scroll" href="/#roadmap">Road Map</a></li>
                    <li><a className="nav-link page-scroll btn-secondary" href="/#airdrops">{'\u2728'}AIRDROPs!{'\u2728'}</a></li>
                    <li><a className="page-scroll btn btn-default" href="/#PurchaseBox">BUY TLT</a></li>
                    {/* <li><a className="btn btn-default" onClick={this.props.loadBlockchainData}>Connect</a></li> */}
                  </ul>
                </Animated>
              </div>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
