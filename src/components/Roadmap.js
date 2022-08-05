import React, { Component } from 'react' //importo libreria react
import { Animated } from "react-animated-css";


class Roadmap extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="roadmap" className="section_light_bg">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-8 col-md-12 offset-lg-2">
                                <div className="title_dark">
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <span>Road Map</span>
                                    </Animated>
                                    <Animated animationIn="fadeInUp" isVisible={true}>
                                        <h2>thelooptoken.net
                                        </h2>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                        <Animated animationIn="swing" isVisible={true}>
                            <div className="roadmap owl-carousel small_space">
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>July 2021</h6>
                                            <p>Platform launched, Presale and Crowd Funding Started</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>August 2021</h6>
                                            <p>TLT listed on Pancakeswap</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>September, 2021</h6>
                                            <p>TLT Presale Distribution</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>October, 2021</h6>
                                            <p>Open aggregate Defi platform</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>November 25th, 2021</h6>
                                            <p>Listing on Hotbit, Okex & Coinbase</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>December 2021</h6>
                                            <p>Launch TLT DeFi auto trading machine</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>January 2022</h6>
                                            <p>Launch of Mobile Apps</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>Quarter 2 2022</h6>
                                            <p>thelooptoken.net derivatives trading platform</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="roadmap_box">
                                        <div className="roadmap_inner">
                                            <div className="roadmap_icon icon_gradient_box"></div>
                                            <h6>December 2022</h6>
                                            <p>New release and updates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animated>

                        <div id="mobileapp" className="mobileapp text_md_center">
                            <div className="divider large_divider"></div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="title_dark">
                                        <Animated animationIn="fadeInUp" isVisible={true}>
                                            <span>Loop Token App</span>
                                        </Animated>
                                        <Animated animationIn="fadeInUp" isVisible={true}>
                                            <h2>Mobile App Soon</h2>
                                        </Animated>
                                        <Animated animationIn="fadeInUp" isVisible={true}>
                                            <p>Loop Token
                                                APP will
                                                be build for
                                                easier access to decentralized wallets, defi, and to reduce the stress of operating the
                                                platform.</p>
                                        </Animated>
                                        <Animated animationIn="fadeInUp" isVisible={true}>
                                            <p>The app
                                                brings
                                                Yield data,
                                                Protected decentralized wallet, Unlimited scalability, and smoothness on Defi
                                                aggregator.</p>
                                        </Animated>
                                    </div>
                                    <div>
                                        <button onClick={()=>{alert('We understand how smooth the mobile app is! thelooptoken android app will be released as we scheduled on our roadmap. Thanks')}} className="btn btn-default"><span
                                            className="icofont-brand-android-robot"></span>Google
                                            Store <i className="icofont-arrow-right"></i></button>
                                        <button onClick={()=>{alert('We understand how smooth the mobile app is! thelooptoken ios app will be released as we scheduled on our roadmap. Thanks')}} className="btn btn-default"><span
                                            className="icofont-brand-apple"></span>Apple Store <i
                                                className="icofont-arrow-right"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                                    <Animated animationIn="fadeInRight" isVisible={true}>
                                        <div className="res_md_mt_50 res_sm_mt_30">
                                            <img className="glowing-border-celu" src="/assets/images/mobile.png" alt="mobile" />
                                        </div>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_wave2"></div>
                    <div className="section_wave"></div>
                </section>
            </React.Fragment>
        );
    }
}

export default Roadmap;
