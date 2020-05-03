import React, { Component } from "../../../node_modules/react";
import SliderComponent from "./slider_component";
import ToGoComponent from "./to-go-component";
import PopularDestination from "./popular-destination-component";
//import PopularPlaces from "./popular-place-component";
import NewsLetter from "./newsletter-component";
import CollageComponent from "./collage_component";
import TourWithLocalGuides from "./tour_with_local_guide";
import TestimonialComponent from './testimonial';
import $ from "jquery";

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount=()=>{
    
  }

  render() {
    return (
      <React.Fragment>
        <SliderComponent />
        <ToGoComponent />
        <PopularDestination title={"Our Favorite Trips"} {...this.props} />
        <TourWithLocalGuides {...this.props} />
        <NewsLetter />
        <CollageComponent {...this.props} />
        <PopularDestination title={"Explore By Location"} {...this.props} />
        <PopularDestination title={"Explore By Motivation"} {...this.props} />
        <PopularDestination title={"Popular Location"} {...this.props} />
        <TestimonialComponent {...this.props}/>
        {/* <PopularDestination title={"Popular Packages"} moveSlider={this.moveSlider} {...this.props}/> */}
        {/* <PopularDestination title={"Explore By Theme"} {...this.props}/>
        {/* <PopularPlaces /> */}
      </React.Fragment>
    );
  }
}
