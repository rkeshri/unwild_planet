import React from "react";

const PackageDetailComponent = props => {
  return (
    <React.Fragment>
      <div class="destination_banner_wrap overlay">
        <div class="destination_text text-center">
          <h3>Saintmartine Iceland</h3>
          <p>Pixel perfect design with awesome contents</p>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row destination_text overlay">
          <div class="col-xl-4 col-md-4 col-xs-12 text-center">
            <h4>2 Nights PACKAGE All Inclusive</h4>
            <p>Tromsø, Norway</p>
            <p>5.0 13 reviews (13)</p>
            <div class="row">
              <button type="button" class="btn col-xl-4 col-md-4">
                Active Adeveture
              </button>
              <button type="button" class="btn col-xl-4 col-md-4">
                Hiking
              </button>
              <button type="button" class="btn col-xl-4 col-md-4">
                Tour
              </button>
            </div>
          </div>
          <div class="col-xl-8 col-md-8 col-xs-12 text-center">
            <h5>
              Join us on this all inclusive 2 nights package! CAPACITY MAX 4
              PEOPLE!!!
            </h5>
            <div class="row">
              <div class="col-xl-3 col-md-3 col-sm-6">
                <span>
                  <i class="fa fa-circle-o-notch" aria-hidden="true"></i>
                  <br />
                  Duration
                  <br />3 days
                </span>
              </div>
              <div class="col-xl-3 col-md-3 col-sm-6">
                <span>
                  <i class="fa fa-users" aria-hidden="true"></i>
                  <br />
                  Group size
                  <br />
                  Up to 4 people
                </span>
              </div>
              <div class="col-xl-3 col-md-3 col-sm-6">
                <span>
                  <i class="fa fa-circle-o-notch" aria-hidden="true"></i>
                  <br />
                  Activity Level
                  <br />
                  Moderate
                </span>
              </div>
              <div class="col-xl-3 col-md-3 col-sm-6">
                <span>
                  <i class="fa fa-weixin" aria-hidden="true"></i>
                  <br />
                  Hosted in
                  <br />
                  English
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="destination_details_info">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-md-4 col-xs-12">
              <h3>Description</h3>
            </div>
            <div class="col-lg-8 col-md-9">
              <div class="destination_info">
                <h3>Description</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing.
                </p>
                <p>
                  Variations of passages of lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isn't anything embarrassing.
                </p>
              </div>

              <div class="bordered_1px"></div>
            </div>
            <div class="col-xl-4 col-md-4 col-xs-12">
              <h3>What you'll do</h3>
            </div>
            <div class="col-lg-8 col-md-9">
              <div class="destination_info">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing.
                </p>
                <p>
                  Variations of passages of lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isn't anything embarrassing.
                </p>
              </div>
              <div class="bordered_1px"></div>
            </div>
            <div class="col-xl-4 col-md-4 col-xs-12">
              <h3>What's included</h3>
            </div>
            <div class="col-lg-8 col-md-9">
              <div class="row">
                <div class="col-xl-4 col-md-4 col-xs-6">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <img
                        src={require("../../assets/img/common/accommodation.png")}
                        alt="wetreat logo"
                        height="100px"
                        width="100px"
                      />
                      <h5>Accommodation</h5>
                      <p>2 nights in a cabin</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 col-xs-6">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <img
                        src={require("../../assets/img/common/food.png")}
                        alt="wetreat logo"
                        height="100px"
                        width="100px"
                      />
                      <h5>Food</h5>
                      <p>2 breakfasts, 2 dinners, 1 lunch, snacks, dessert</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 col-xs-6">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <img
                        src={require("../../assets/img/common/drink.png")}
                        alt="wetreat logo"
                        height="100px"
                        width="100px"
                      />
                      <h5>Drink</h5>
                      <p>Water, tea, coffee</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 col-xs-6">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <img
                        src={require("../../assets/img/common/transport.png")}
                        alt="wetreat logo"
                        height="100px"
                        width="100px"
                      />
                      <h5>Transport</h5>
                      <p>3 car rides</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 col-xs-6">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <img
                        src={require("../../assets/img/common/equipment.png")}
                        alt="wetreat logo"
                        height="100px"
                        width="100px"
                      />
                      <h5>Equipment</h5>
                      <p>Sports equipment, outdoor gear</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bordered_1px"></div>
            </div>
            <div class="col-xl-4 col-md-4 col-xs-12">
              <h3>Your itinerary</h3>
            </div>
            <div class="col-lg-8 col-md-9">
              <div class="destination_info">
                <div class="single_destination">
                  <h4>Day-01</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                </div>
                <div class="single_destination">
                  <h4>Day-02</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                </div>
                <div class="single_destination">
                  <h4>Day-03</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                </div>
              </div>
              <div class="bordered_1px"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PackageDetailComponent;
