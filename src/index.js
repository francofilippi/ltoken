import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './components/App';

//Import CSS
import './assets/css/animate.css'
import './assets/css/magnific-popup.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/color/theme.css'
import './assets/css/icofont.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


