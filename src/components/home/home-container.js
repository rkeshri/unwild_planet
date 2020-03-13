import React, { Component } from "../../../node_modules/react";
import SliderComponent from "./slider_component";
import ToGoComponent from "./to-go-component";
import PopularDestination from "./popular-destination-component";
import PopularPlaces from "./popular-place-component";
import NewsLetter from "./newsletter-component";
import $ from "jquery";

import Utility from "../../utility/index";


export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <SliderComponent />
        <ToGoComponent />
        <PopularDestination />
        <NewsLetter />
        <PopularPlaces />
      </React.Fragment>
    );
  }
}
