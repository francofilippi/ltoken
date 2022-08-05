import React, { Component } from 'react' //importo libreria react
import { Parallax } from 'react-parallax';

import HomeHeader from '../components/HomeHeader';
import Token from '../components/Token'
import About from '../components/About'
import Airdrops from '../components/Airdrops'
import Roadmap from '../components/Roadmap'
import Partners from '../components/Partners'
import PurchaseBox from '../components/PurchaseBox'

// 
// import Contador from './Contador'
import Loader from "react-loader-spinner";

class Home extends Component {

    componentWillMount() {
        // Antes de que el componente se monte
    }

    componentDidMount() {

        const script6 = document.createElement("script");
        script6.src = "../assets/js/particles.min.js";
        script6.async = true;
        document.body.appendChild(script6);

        const script8 = document.createElement("script");
        script8.src = "../assets/js/alertas.js";
        script8.async = true;
        document.body.appendChild(script8);

        this.setState({ loading: false })
    }

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null
        }
    }

    render() {
        if (this.state.loading) { //si loading es true, mostramos el cartel de Loading, sino asignamos a content el componente Main
            return (
                <div className="d-flex justify-content-center align-items-center flex-column" style={{ 'minHeight': '100vh' }}>
                    <h4 style={{ 'color': 'white' }}>Loading</h4>
                    <Loader
                        type="Circles"
                        color="#6669c5"
                        height={70}
                        width={70}
                    />
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    <HomeHeader />
                    <Parallax bgImage="/assets/images/how_it_work_bg.png" bgImageAlt="The Loop Token" strength={600} bgImageStyle={{ height: '1600px', maxWidth: '1600px', opacity: '.5' }}>
                        <Token />
                        <About />
                        <PurchaseBox />
                        <Airdrops />
                    </Parallax>
                    <Roadmap />
                    <Partners />
                </React.Fragment>
            );
        }
    }
}

export default Home;
