import React, { Component } from "../../../node_modules/react";
import SliderComponent from "./slider_component";
import ToGoComponent from "./to-go-component";
import PopularDestination from "./popular-destination-component";
//import PopularPlaces from "./popular-place-component";
import NewsLetter from "./newsletter-component";
import CollageComponent from "./collage_component";
import TourWithLocalGuides from "./tour_with_local_guide";
import TestimonialComponent from "./testimonial";
import SimpleMap from "../map/simple_map";
import $ from "jquery";

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  scrollTo(id) {
   // alert("id==="+id)
   $("html, body").animate({ scrollTop: $("#" + id).offset().top }, "slow");
    return false;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" style={{ position: "relative" }}>
          <SliderComponent />

          <div
            className="row"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "434px",
              margin: 0,
            }}
          >
            <div className="col-md-offset-2"></div>
            <div
              className="col-md-8 panel panel-default"
              style={{
                borderRadius: "10px",
                boxShadow: " 0 4px 2px rgba(0,0,0,.05)",
                zIndex: 999,
              }}
            >
              <div className="panel-body"></div>
              <div className="row">
                <div
                  className=" col-md-2 col-xs-3"
                  onClick={()=>this.scrollTo("detoxAndWellBeing")}
                >
                  <img
                    src={require("../../assets/img/common/accommodation.png")}
                    alt="unwild planet"
                    height="40px"
                    width="40px"
                  />
                  <h5>Detox & Well Being</h5>
                </div>
                <div
                  className="col-md-2 col-xs-3"
                  onClick={()=>this.scrollTo("foodAndDrink")}
                >
                  <img
                    src={require("../../assets/img/common/food.png")}
                    alt="unwild planet"
                    height="40px"
                    width="40px"
                  />
                  <h5>Food & Drink</h5>
                </div>
                <div
                  className=" col-md-2 col-xs-3"
                  onClick={()=>this.scrollTo("breakingBarriers")}
                >
                  <img
                    src={require("../../assets/img/common/drink.png")}
                    alt="unwild planet"
                    height="40px"
                    width="40px"
                  />
                  <h5>Breaking Barriers</h5>
                </div>
                <div
                  className=" col-md-2 col-xs-3"
                  onClick={()=>this.scrollTo("festivalAndEvents")}
                >
                  
                  <img
                    src={require("../../assets/img/common/transport.png")}
                    alt="unwild planet"
                    height="40px"
                    width="40px"
                  />
                  <h5>Festival & Events</h5>
                </div>
                <div
                  className=" col-md-2 col-xs-3"
                  onClick={()=>this.scrollTo("hardCore")}
                >
                  
                  <img
                    src={require("../../assets/img/common/equipment.png")}
                    alt="unwild planet"
                    height="40px"
                    width="40px"
                  />
                  <h5>Hard Core</h5>
                </div>
                <div
                  className=" col-md-2 col-xs-3"
                  onClick={()=>this.scrollTo("hardCore")}
                >
                  >
                  <img
                    src={require("../../assets/img/common/equipment.png")}
                    alt="unwild planet"
                    height="40px"
                    width="40px"
                  />
                  <h5>Must See , Must Do</h5>
                </div>
              </div>
            </div>

            <div className="col-md-offset-2"></div>
          </div>
        </div>

        <div className="container-fluid mt-20">
          <div className="panel panel-default mt-50">
            <div className="panel-body">
              <p>
                <b>Covid19 Message-</b>Travel would never be the same as put out
                by researchers and the wider impact on our lifestyle is immense.
                We have worked harder to bring stringent measures to keep your
                holidays Safe and Sustainable with appropriate social distancing
              </p>
            </div>
          </div>
        </div>
        <ToGoComponent />
        <PopularDestination title={"Our Favorite Trips"} {...this.props} />
        <TourWithLocalGuides {...this.props} />
        <NewsLetter />
        {/* <CollageComponent {...this.props} /> */}
        <PopularDestination
          title={"Experiences Closer To Home"}
          {...this.props}
        />

        <PopularDestination
          title={"Detox and Well Being"}
          sectionId={"detoxAndWellBeing"}
          {...this.props}
        />
        <PopularDestination
          title={"Food and drink"}
          sectionId={"foodAndDrink"}
          {...this.props}
        />
        <PopularDestination
          title={"Breaking barriers"}
          sectionId={"breakingBarriers"}
          {...this.props}
        />
        <PopularDestination
          title={"Festival & Events"}
          sectionId={"festivalAndEvents"}
          {...this.props}
        />
        <PopularDestination
          title={"Hard Core"}
          sectionId={"hardCore"}
          {...this.props}
        />
        <SimpleMap />

        <TestimonialComponent {...this.props} />

        {/* <PopularPlaces /> */}
      </React.Fragment>
    );
  }
}
