import React, { Component } from 'react' //importo libreria react
import { Animated } from "react-animated-css";


class Token extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="token" className="how_work">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="title_dark">
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <h2>About
                                            The Loop Token</h2>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <p>The Loop Token is a
                                            community driven project with aims to be the next revolution on the Binance Smart Chain. TLT
                                            holders will be able to vote on proposals from the community through the most secure and
                                            decentralized governance model that provides control over the future development of the
                                            platform and services that emerge from it.</p>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <h2>Deflationary Model</h2>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <p>TLT has a quarterly
                                            buy-back and burn mechanism implemented in its model, making it a deflationary token. These
                                            burns remove about 1% of the circulating supply and the tokens that remain in circulation
                                            became more valuable.</p>
                                    </Animated>
                                </div>
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <div className="title_dark mt-5">
                                        <h2>TOKENOMICS</h2>
                                        <p className="mb-1">Token Symbol: TLT</p>
                                        <p className="mb-1">Token Name: The Loop Token</p>
                                        <p className="mb-1">Total Supply: 100.000.000</p>
                                        <p className="mb-1">Decimals: 18</p>
                                    </div>
                                </Animated>
                            </div>

                        </div>
                    </div>
                    <div className="shape shap1"></div>
                </section>
            </React.Fragment>
        );
    }
}

export default Token;
