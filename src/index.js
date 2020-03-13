import React from '../node_modules/react';
import ReactDOM from 'react-dom';
import App from './components/Root';
import * as serviceWorker from './serviceWorker';

import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/nice-select.css';
import './assets/css/flaticon.css';
import './assets/css/gijgo.css';
import './assets/css/animate.css';
import './assets/css/slick.css';
import './assets/css/slicknav.css';
import './assets/css/style.css';
// import './assets/css/theme-default.css';
// import './assets/css/themify-icons.css';

//attach JS files here
// import './assets/js/vendor/modernizr-3.5.0.min.js';
 //import './assets/js/vendor/jquery-1.12.4.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/owl.carousel.min.js';
// import './assets/js/isotope.pkgd.min.js';
// import './assets/js/waypoints.min.js';
// import './assets/js/jquery.counterup.min.js';
// import './assets/js/imagesloaded.pkgd.min.js';
// import './assets/js/scrollIt.js';
// import './assets/js/jquery.scrollUp.min.js';
// import './assets/js/wow.min.js';
// import './assets/js/nice-select.min.js';
// import './assets/js/jquery.slicknav.min.js';
// import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/plugins.js';
// import './assets/js/gijgo.min.js';
// import './assets/js/slick.min.js';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
