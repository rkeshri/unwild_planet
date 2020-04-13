import React, { Component } from "../../../node_modules/react";
import AboutComponent from "./about-component";

import $ from 'jquery';



export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  
  
  

  render() {
    return (
      <React.Fragment>
        <AboutComponent {...this.props}  />
        
      </React.Fragment>
    );
  }
}

