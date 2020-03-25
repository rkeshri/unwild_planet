import React, { Component } from "../../../node_modules/react";
import SliderComponent from "./slider_component";
import ToGoComponent from "./to-go-component";
import PopularDestination from "./popular-destination-component";
import PopularPlaces from "./popular-place-component";
import NewsLetter from "./newsletter-component";



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
        <PopularDestination title={"Mountains"}/>
        <NewsLetter />
        <PopularDestination title={"Sea"} {...this.props}/>
        <PopularDestination title={"Air"} {...this.props}/>
        <PopularDestination title={"Overland"} {...this.props}/>
        <PopularDestination title={"Wildlife"}{...this.props}/>
        <PopularDestination title={"Polar Expeditions"} {...this.props}/>
        {/* <PopularPlaces /> */}
      </React.Fragment>
    );
  }
}
