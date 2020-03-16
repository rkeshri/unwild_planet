import React from "react";

const PackageDetailComponent = props => {
  console.log("======" + JSON.stringify(props, null, 4));
  return (
    <React.Fragment>
      {props.packageState.package_details !== [] &&
      props.packageState.package_details !== undefined ? (
        <div className="destination_banner_wrap overlay">
          <div className="destination_text text-center">
            <h3>{props.packageState.package_details.title}</h3>
            <p>{props.packageState.package_details.sub_title}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container-fluid">
        {props.packageState.package_details !== [] &&
        props.packageState.package_details !== undefined ? (
          <div className="row destination_text overlay">
            {/* {console.log(
              "======props.packageState.package_details" +
                JSON.stringify(
                  props.packageState.package_details.what_includes,
                  null,
                  4
                )
            )} */}
            <div className="col-xl-4 col-md-4 col-xs-12 text-center">
              <h4>{props.packageState.package_details.remark}</h4>
              <p>{props.packageState.package_details.location}</p>
              <p>{props.packageState.package_details.reviews}</p>
              <div className="row">
                {props.packageState.package_details.what_includes.map(
                  (item, key) => {
                    return (
                      <button type="button" className="btn col-xl-4 col-md-4">
                        {item.amenities}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
            <div className="col-xl-8 col-md-8 col-xs-12 text-center">
              <h5>
                Join us on this all inclusive 2 nights package! CAPACITY MAX 4
                PEOPLE!!!
              </h5>
              <div className="row">
                <div className="col-xl-3 col-md-3 col-sm-6">
                  <span>
                    <i className="fa fa-circle-o-notch" aria-hidden="true"></i>
                    <br />
                    Duration
                    <br />3 days
                  </span>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-6">
                  <span>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <br />
                    Group size
                    <br />
                    Up to 4 people
                  </span>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-6">
                  <span>
                    <i className="fa fa-circle-o-notch" aria-hidden="true"></i>
                    <br />
                    Activity Level
                    <br />
                    Moderate
                  </span>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-6">
                  <span>
                    <i className="fa fa-weixin" aria-hidden="true"></i>
                    <br />
                    Hosted in
                    <br />
                    English
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="destination_details_info">
        <div className="container-fluid">
          {props.packageState.package_status !== false ? (
            <React.Fragment>
              <div className="row justify-content-center">
                <div className="col-xl-4 col-md-4 col-xs-12">
                  <h3>Description</h3>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="destination_info">
                    <h3>Description</h3>
                    {props.packageState.package_details !== [] &&
                    props.packageState.package_details !== undefined ? (
                      <p>{props.packageState.package_details.description}</p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="bordered_1px"></div>
                </div>
                <div className="col-xl-4 col-md-4 col-xs-12">
                  <h3>What you'll do</h3>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="destination_info">
                    {props.packageState.package_details !== [] &&
                    props.packageState.package_details !== undefined ? (
                      <p>{props.packageState.package_details.description}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="bordered_1px"></div>
                </div>
                <div className="col-xl-4 col-md-4 col-xs-12">
                  <h3>Your itinerary</h3>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="destination_info">
                    {props.packageState.package_details !== [] &&
                    props.packageState.package_details !== undefined
                      ? props.packageState.package_details.itinerary_details.map(
                          (item, key) => {
                            return (
                              <React.Fragment>
                                {console.log("key=="+item)}
                                <h4>{item.day}</h4>
                                <h5>{item.title}</h5>
                                <p>
                                  {item.small_description}
                                  {/* <a data-toggle="collapse" data-target='#description'+{key}>Collapsible</a> */}
                                </p>
                              </React.Fragment>
                            );
                          }
                        )
                      : ""}
                  </div>

                  <div className="bordered_1px"></div>
                </div>
                <div className="col-xl-4 col-md-4 col-xs-12">
                  <h3>What's included</h3>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="row">
                    <div className="col-xl-4 col-md-4 col-xs-6">
                      <div className="panel panel-default">
                        <div className="panel-body">
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
                    <div className="col-xl-4 col-md-4 col-xs-6">
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <img
                            src={require("../../assets/img/common/food.png")}
                            alt="wetreat logo"
                            height="100px"
                            width="100px"
                          />
                          <h5>Food</h5>
                          <p>
                            2 breakfasts, 2 dinners, 1 lunch, snacks, dessert
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-xs-6">
                      <div className="panel panel-default">
                        <div className="panel-body">
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
                    <div className="col-xl-4 col-md-4 col-xs-6">
                      <div className="panel panel-default">
                        <div className="panel-body">
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
                    <div className="col-xl-4 col-md-4 col-xs-6">
                      <div className="panel panel-default">
                        <div className="panel-body">
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
                  <div className="bordered_1px"></div>
                </div>
                <div className="col-xl-4 col-md-4 col-xs-12">
                  <h3>Your itinerary</h3>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="destination_info">
                    <div className="single_destination">
                      <h4>Day-01</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words.
                      </p>
                    </div>
                    <div className="single_destination">
                      <h4>Day-02</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words.
                      </p>
                    </div>
                    <div className="single_destination">
                      <h4>Day-03</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words.
                      </p>
                    </div>
                  </div>
                  <div className="bordered_1px"></div>
                </div>
              </div>

              {/**************************display card on scroll************************/}
              <div className="bottomMenu row">
                <div className="col-xl-10 col-md-10 col-xs-12"></div>
                <div className="col-xl-2 col-md-2 col-xs-12">
                  <button
                    type="button"
                    className="btn btn-info btn-lg mt-30 pd-15"
                    onClick={props.showAvailability}
                  >
                    Check Dates
                  </button>
                </div>
              </div>
            </React.Fragment>
          ) : (
            ""
          )}
          {props.packageState.availability_status !== false ? (
            <React.Fragment>
              {/**********************************Months lists*****************/}
              <div className="row">
                <div className="col-xl-8 col-md-8 col-xs-12">
                  <a className="btn btn-lg  col-md-2">March 2020</a>
                  <a className="btn  btn-lg col-md-2">March 2020</a>
                  <a className="btn  btn-lg col-md-2">April 2020</a>
                  <a className="btn  btn-lg col-md-2">May 2020</a>
                  <a className="btn  btn-lg col-md-2">June 2020</a>
                  <a className="btn  btn-lg col-md-2">July 2020</a>
                  <a className="btn  btn-lg col-md-2">August 2020</a>
                  <a className="btn  btn-lg col-md-2">September 2020</a>
                  <a className="btn  btn-lg col-md-2">October 2020</a>
                  <a className="btn  btn-lg col-md-2">November 2020</a>
                  <a className="btn  btn-lg col-md-2">December 2020</a>
                  <a className="btn  btn-lg col-md-2">January 2021</a>
                </div>
              </div>

              {/**********************************date booking info starts here*******************/}
              <div className="row">
                <div className="col-xl-8 col-md-8 col-xs-12">
                  <div className="panel panel-default">
                    <div className="panel-body row">
                      <div className="col-xl-3 col-md-3 col-xs-12">
                        <p>Thursday </p>
                        <h3>Mar 19, 2020</h3>
                      </div>
                      <div className="col-xl-3 col-md-3 col-xs-12">
                        <p>Thursday </p>
                        <h3>Mar 24, 2020</h3>
                      </div>
                      <div className="col-xl-3 col-md-3 col-xs-12">
                        <h3>₹106,944 </h3>
                      </div>
                      <div className="col-xl-3 col-md-3 col-xs-12">
                        {/* <input
                      type="button"
                      className="btn btn-info btn-lg"
                      value="Book Now"
                    /> */}
                        <button type="button" className="btn btn-info btn-lg">
                          Book Now
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="panel-body row">
                      <div className="col-xl-3 col-md-3 col-xs-12">
                        <h5>Filling Fast</h5>
                      </div>
                      <div className="col-xl-3 col-md-3 col-xs-12">
                        <h5>Multiple Room Types</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PackageDetailComponent;
