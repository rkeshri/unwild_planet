import React from "react";
import "./tour_with_local_guide.css";

const TourWithLocalGuideComponent = (props) => {
  return (
    <div className="container-fluid mb-20">
      <div className="banner mb-10">
        <img
          src={require("../../assets/img/home/tour_with_local_guide.jpg")}
          alt="tour with local guide"
          width="100%"
          className="responsive"
        />

        <div className="row banner-info  all-attraction">
          <div className="col-md-6 col-xs-12">
            <div class="title">
              Intrinsically planned and operated trips by{" "}
            </div>
            <div class="title2">our Local Experts</div>
          </div>
          <div className="col-md-6 col-xs-12 local-guide-points">
            <h5>Fully Custimizable</h5>
            <h5>Giving Back</h5>
            <h5>Truly Local</h5>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center mb_20">
            <h3>Celebrate the joy of exploration</h3>
            <p>
              Take a pick of what is your calling for the next trip and we will
              suggest some of our best options to choose from.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default TourWithLocalGuideComponent;
