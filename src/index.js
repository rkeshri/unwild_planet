import React from '../node_modules/react';
import ReactDOM from 'react-dom';
import App from './components/Root';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';


import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/nice-select.css';
import './assets/css/flaticon.css';
//import './assets/css/gijgo.css';
//import './assets/css/animate.css';
import './assets/css/slick.css';
import './assets/css/slicknav.css';
import './assets/css/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './assets/js/owl.carousel.min.js'

//JS
//import './assets/js/jquery-1.12.4.min.js';
//import './assets/js/owl.carousel.min.js';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
