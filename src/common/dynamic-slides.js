import React, { Component } from "react";
import Slider from "react-slick";

export default class DynamicSlides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [1, 2, 3, 4, 5, 6],
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { slides } = this.state;
    this.setState({
      slides:
        slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6],
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div
        className="container"
        style={{
          // margin: "0 auto",
          padding: "40px",
          // width: "100%",
          background: "#ccc",
        }}
      >
        {/* <h2>Dynamic slides</h2>
        <button className="button" onClick={this.click}>
          Click to change slide count
        </button>
        <Slider {...settings}>
          {this.state.slides.map(function(slide) {
            return (
              <div key={slide} style={{backgroundColor:'blue'}}>
                <h3>{slide}</h3>
              </div>
            );
          })}
        </Slider> */}
        <div class="owl-carousel owl-theme">
          
           {this.state.slides.map(function(slide) {
            return (
              <div key={slide} style={{backgroundColor:'blue'}}>
                <h3>{slide}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
