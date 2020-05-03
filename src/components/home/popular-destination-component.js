import React, { Component } from "react";
import CardComponent from "../../common/card-component";
import CarouselComponent from "../../common/carousel-component";
import DynamicSlides from "../../common/dynamic-slides";
import global from "../../global";
import Utility from "../../utility/index";
import axios from "axios";

export default class PopularDestinationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: [],
    };
  }

  componentDidMount = () => {
    this.GetPackagesData();
  };

  GetPackagesData = () => {
    const that = this;
    axios
      .get(global.url + "/packages")
      .then((response) => {
        if (response.data.length > 0) {
          // console.log("get data========"+JSON.stringify(response.data));
          this.setState({ packages: response.data });
        }
      })

      .catch(function (error) {
        console.log("In error" + error);
        that.setState({ failureMessage: "Please try after some time" });
      });
  };

  GetPackagesList = () => {
    //console.log("props==="+JSON.stringify(this.props))
    Utility.HandlePageClick(this.props, "packages/list/1");
  };

  render() {
    return (
      <div className="popular_destination_area">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb_20">
                <h3>{this.props.title}</h3>
                <p>
                  Suffered alteration in some form, by injected humour or good
                  day randomised booth anim 8-bit hella wolf moon beard words.
                </p>
              </div>
            </div>
          </div>
          <CarouselComponent data={this.state.packages} {...this.props} />
          <div className="row">
            <div className="col-lg-12 col-md-6"></div>
            <div className="col-lg-12 col-md-6">
              <div className="more_place_btn text-center">
                <a className="boxed-btn4" onClick={this.GetPackagesList}>
                  More Trips
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
