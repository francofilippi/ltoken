import React, { Component } from 'react' //importo libreria react
import { Animated } from "react-animated-css";
import Contador from './Contador';

class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <section id="home" className="banner_section section_light_bg">
                    <div id="particles-js" className="banner_effect"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first text_md_center">
                                <Animated animationIn="fadeIn" isVisible={true}>
                                    <div className="banner_text">
                                        <h1>
                                            <span>TLT</span> - The Loop Token
                                        </h1>
                                        <p>
                                            THE LOOP TOKEN is a decentralized community token running on the BSC designed to provide
                                            high-yield returns and diversification.
                                        </p>
                                        <Animated animationIn="fadeInUp" isVisible={true}>
                                            <div className="title_dark">
                                                <span style={{ 'fontSize': 'large' }}>Presale Ends in</span>
                                                <h5> <Contador /></h5>
                                            </div>
                                        </Animated>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                                <Animated animationIn="fadeIn" isVisible={true}>
                                    <div className="banner_image_right res_md_mb_50 res_xs_mb_30">
                                        <img src="assets/images/banner_vector.png" alt="banner_vector" />
                                    </div>
                                </Animated>
                            </div>
                        </div>
                    </div>
                    <div className="section_wave"></div>
                </section>
            </React.Fragment>
        );
    }
}

export default HomeHeader;
