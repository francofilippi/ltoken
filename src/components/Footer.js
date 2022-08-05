import React, { Component } from 'react' //importo libreria react
// import Identicon from 'identicon.js' //importo la libreria para usar el iconito de la address
import ScrollArrow from './ScrollArrow';
import { Animated } from "react-animated-css";

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="top_footer text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                    <div className="newsletter_form large_space">
                                        <Animated animationIn="fadeInUp" isVisible={true}>
                                            <h4 className="footer_title">
                                                Contact Us:</h4>
                                        </Animated>
                                    </div>
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <ul className="list_none footer_social">

                                            <li><a
                                                href="https://t.me/thelooptoken" target="_blank" rel="noopener noreferrer"><i
                                                    className="icofont-paper-plane"></i></a>
                                            </li>
                                            <li><a
                                                href="https://twitter.com/thelooptoken" target="_blank" rel="noopener noreferrer"><i
                                                    className="icofont-twitter"></i></a>
                                            </li>
                                            <li><a
                                                href="https://github.com/TheLoopToken" target="_blank" rel="noopener noreferrer"><i
                                                    className="icofont-github"></i></a>
                                            </li>
                                        </ul>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                        <div className="rounded_shape light_rounded_shape2"></div>
                    </div>
                    <div className="bottom_footer staggered-animation-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <Animated animationIn="fadeInLeft" isVisible={true}>
                                        <p className="copyright" data-animation-delay="0.1s">Copyright © 2021
                                            All Rights Reserved.</p>
                                    </Animated>
                                </div>
                                <div className="col-md-6">
                                    <Animated animationIn="fadeInRight" isVisible={true}>
                                        <ul className="list_none footer_menu " data-animation="fadeInRight" data-animation-delay="0.1s">
                                            <li><a href="https://t.me/thelooptoken" target="_blank" rel="noopener noreferrer">Telegram Group</a></li>
                                        </ul>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <ScrollArrow />
            </React.Fragment>
        );
    }
}

export default Footer;
