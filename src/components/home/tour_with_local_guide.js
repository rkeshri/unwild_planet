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
            <div class="title">Tour</div>
            <div class="title2">with local experts</div>
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
                  Carefully curated trips for you to
                </p>
              </div>
            </div>
          </div>
      <div className="row">
        <div className=" col-md-2 col-xs-6">
          <div className="panel panel-default">
            <div className="panel-body">
              <img
                src={require("../../assets/img/common/accommodation.png")}
                alt="wetreat logo"
                height="100px"
                width="100px"
              />
              <h4>Detox & Well Being</h4>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-xs-6">
          <div className="panel panel-default">
            <div className="panel-body">
              <img
                src={require("../../assets/img/common/food.png")}
                alt="wetreat logo"
                height="100px"
                width="100px"
              />
              <h4>Food & Drink</h4>
            </div>
          </div>
        </div>
        <div className=" col-md-2 col-xs-6">
          <div className="panel panel-default">
            <div className="panel-body">
              <img
                src={require("../../assets/img/common/drink.png")}
                alt="wetreat logo"
                height="100px"
                width="100px"
              />
              <h4>Breaking Barriers</h4>
            </div>
          </div>
        </div>
        <div className=" col-md-2 col-xs-6">
          <div className="panel panel-default">
            <div className="panel-body">
              <img
                src={require("../../assets/img/common/transport.png")}
                alt="wetreat logo"
                height="100px"
                width="100px"
              />
              <h4>Festival & Events</h4>
              <p> </p>
            </div>
          </div>
        </div>
        <div className=" col-md-2 col-xs-6">
          <div className="panel panel-default">
            <div className="panel-body">
              <img
                src={require("../../assets/img/common/equipment.png")}
                alt="wetreat logo"
                height="100px"
                width="100px"
              />
              <h4>Hard Core</h4>
            </div>
          </div>
        </div>
        <div className=" col-md-2 col-xs-6">
          <div className="panel panel-default">
            <div className="panel-body">
              <img
                src={require("../../assets/img/common/equipment.png")}
                alt="wetreat logo"
                height="100px"
                width="100px"
              />
              <h4>Must See , Must Do</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourWithLocalGuideComponent;
