import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimonial.css";

const options = {
  autoplay: false,
  loop: true,
  nav: true,
  item: 2,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
};
export default class TestimonialComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("in carousel======" + JSON.stringify(this.props, null, 4));

    return (
      <div className="container-fluid" style={{backgroundColor:"#ccc"}}>
        <div className="section_title text-center mb_20">
          <h3>Customer Testimonial</h3>
        </div>
        <OwlCarousel className="owl-theme" margin={5} {...options} nav>
          <div className="panel panel-default">
            <div className="panel-body">
              {" "}
              <q>
                But man is not made for defeat. A man can be destroyed but not
                defeated.
              </q>
              <p class="author">- Ernest Hemingway</p>{" "}
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              {" "}
              <q>
                I love you the more in that I believe you had liked me for my
                own sake and for nothing else
              </q>
              <p class="author">- John Keats</p>{" "}
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              {" "}
              <q>
                I have not failed. I've just found 10,000 ways that won't work.
              </q>
              <p class="author">- Thomas A. Edison</p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              {" "}
              <q>
                But man is not made for defeat. A man can be destroyed but not
                defeated.
              </q>
              <p class="author">- Ernest Hemingway</p>{" "}
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              {" "}
              <q>
                I love you the more in that I believe you had liked me for my
                own sake and for nothing else
              </q>
              <p class="author">- John Keats</p>{" "}
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              {" "}
              <q>
                I have not failed. I've just found 10,000 ways that won't work.
              </q>
              <p class="author">- Thomas A. Edison</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
