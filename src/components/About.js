import React, { Component } from 'react' //importo libreria react
import { Animated } from "react-animated-css";


class About extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-8 col-md-12 offset-lg-2">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="title_dark">
                                        <span>Why
                                            thelooptoken.net
                                            (TLT)</span>
                                        <h2>Competitive Benefit
                                        </h2>
                                    </div>
                                </Animated>
                            </div>
                        </div>
                        <div className="row text-center small_space benefit_wrap">
                            <div className="col-lg-3 col-md-4 col-6">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="benefit_box">
                                        <img style={{ 'width': '80px', 'height': 'auto' }} src="/assets/images/secure.png" alt="secure" />
                                        <h6>Safe and Secure</h6>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="benefit_box">
                                        <img style={{ 'width': '80px', 'height': 'auto' }} src="/assets/images/payment.png" alt="payment" />
                                        <h6>Easy Payment</h6>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="benefit_box">
                                        <img style={{ 'width': '80px', 'height': 'auto' }} src="/assets/images/liquidity.png" alt="case" />
                                        <h6>Daily Cash Outs</h6>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="benefit_box">
                                        <img style={{ 'width': '80px', 'height': 'auto' }} src="/assets/images/blockchain.png" alt="app" />
                                        <h6>Smart Application</h6>
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

export default About;
