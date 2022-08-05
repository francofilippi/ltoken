import React, { Component } from 'react' //importo libreria react
import { Link } from 'react-router-dom';
import draw404 from '../assets/images/draw404.png'

class NotFound extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="notfound">
                    <div className="container">
                        <div className="row align-items-center text-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 banner_text">
                                <h2>We 're sorry!</h2> 
                                <h1>
                                    <span>PAGE</span> NOT FOUND
                                </h1>
                                <Link className="page-scroll btn btn-default" to="/">Back Home</Link>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                                <img src={draw404} alt="Page Not Found"/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default NotFound;
