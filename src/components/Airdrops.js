import React, { Component } from 'react' //importo libreria react
import { Animated } from "react-animated-css"
import tlt_icon from '../assets/images/coins/tlt.png'


class Airdrops extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="airdrops">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-8 col-md-12 offset-lg-2">
                                <div className="title_dark">
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <span style={{ 'fontWeight': 'bold' }}>CURRENT ✨AIRDROPs🐱‍🏍 TLT</span>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <h1>🎁 Enter presale to WIN TLT! 🎁
                                        </h1>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center small_space benefit_wrap">
                            <div className="col-lg-6 col-md-6 mt-3">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="benefit_box2">
                                        <h2>SOFT CAP AIRDROP</h2>
                                        <p style={{ 'color': '#f1b0ef', 'fontSize': '25px' }}>Prize: 100.000 TLT <img src={tlt_icon} height='32' alt="" /></p>
                                        <h6>To participate: <a href="/#PurchaseBox" style={{ 'color': 'white' }}> Buy <span style={{ 'fontStyle': 'italic' }}>+1.000 TLT's</span> in Presale</a>
                                        </h6>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-3">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="benefit_box2">
                                        <h2>HARD CAP AIRDROP</h2>
                                        <p style={{ 'color': '#f1b0ef', 'fontSize': '25px' }}>Prize: 1.000.000 TLT <img src={tlt_icon} height='32' alt="" /><img src={tlt_icon} height='32' alt="" /></p>
                                        <h6>To participate: <a href="/#PurchaseBox" style={{ 'color': 'white' }}> Buy <span style={{ 'fontStyle': 'italic' }}>+10.000 TLT's</span> in Presale </a>
                                        </h6>
                                    </div>
                                </Animated>
                            </div>
                        </div>
                        <div className="row text-center small_space benefit_wrap">
                            <div className="col-12">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="benefit_box" style={{ 'margin': '30px', 'borderRadius': '0px' }}>
                                        <h6 style={{ 'color': 'white', 'marginTop': '0' }}>Only addresses registered in the presale will
                                            participate on the airdrop</h6>
                                    </div>
                                </Animated>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Airdrops;
