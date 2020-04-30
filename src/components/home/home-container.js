import React, { Component } from "../../../node_modules/react";
import SliderComponent from "./slider_component";
import ToGoComponent from "./to-go-component";
import PopularDestination from "./popular-destination-component";
//import PopularPlaces from "./popular-place-component";
import NewsLetter from "./newsletter-component";
import CollageComponent from './collage_component';
import TourWithLocalGuides from './tour_with_local_guide'
import $ from 'jquery';



export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  
  moveSlider=()=>{
    //alert('in slider')
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      alert("====e===="+e)
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction === "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <SliderComponent />
        <ToGoComponent />
        <PopularDestination title={"Our Favorite Trips"} moveSlider={this.moveSlider} {...this.props}/>
        <TourWithLocalGuides {...this.props}/>
        <NewsLetter />
        <CollageComponent {...this.props}/>
        <PopularDestination title={"Explore By Location"} moveSlider={this.moveSlider} {...this.props}/>
        <PopularDestination title={"Explore By Motivation"} moveSlider={this.moveSlider} {...this.props}/>
        <PopularDestination title={"Popular Location"} moveSlider={this.moveSlider} {...this.props}/> 
        {/* <PopularDestination title={"Popular Packages"} moveSlider={this.moveSlider} {...this.props}/> */}
        {/* <PopularDestination title={"Explore By Theme"} {...this.props}/>
        {/* <PopularPlaces /> */}
      </React.Fragment>
    );
  }
}
