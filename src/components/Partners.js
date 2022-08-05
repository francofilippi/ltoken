import React, { Component } from 'react' //importo libreria react
import { Animated } from "react-animated-css";


class Partners extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="partners" style={{ 'backgroundColor': '#6669c5'}}>
                    <div className="container-fluid">
                        <div className="row align-items-lg-center text-center">
                            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                <a href="https://www.hotbit.io/" className="d-inline-block m-3">
                                    <img src="/assets/images/partners/hotbit.png" alt="Hotbit" height="40px" />
                                </a>
                                <a href="https://bscscan.com/token/0x775ecd5c1501e16d477e236cc7f0ec7a8c0d1b48"
                                    className="d-inline-block m-3">
                                    <img src="/assets/images/partners/logo-bscscan.svg" alt="BscScan Contract" height="40px" />
                                </a>
                                <a href="https://coinmarketcap.com/" className="d-inline-block m-3">
                                    <img src="/assets/images/partners/coinmarketcap_1.svg" alt="Hotbit" height="40px" />
                                </a>
                                <a href="http://pancakeswap.finance" className="d-inline-block m-3">
                                    <img src="/assets/images/partners/pancakeswap.png" alt="Pancakeswap" height="30px" />
                                </a>
                                <a href="https://www.coingecko.com/" className="d-inline-block m-3">
                                    <img src="/assets/images/partners/coingecko.png" alt="Coingecko" height="40px" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Partners;
