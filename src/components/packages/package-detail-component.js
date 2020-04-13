import React, { Component } from "react";
import "./package-detail.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import tooltip from "react-bootstrap/Tooltip";
import ModalComponent from "../../common/modal-component";

export default class PackageDetailComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("=======" + JSON.stringify(this.props, null, 4));
    return (
      <React.Fragment>
        {this.props.packageState.package_details !== [] &&
        this.props.packageState.package_details !== undefined ? (
          <div className="destination_banner_wrap overlay">
            <div className="destination_text text-center">
              <h3>{this.props.packageState.package_details.title}</h3>
              <p>{this.props.packageState.package_details.sub_title}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="container-fluid">
          {this.props.packageState.package_details !== [] &&
          this.props.packageState.package_details !== undefined ? (
            <div className="row destination_text overlay">
              <div className="col-xl-4 col-md-4 col-xs-12 text-center">
                <h4>{this.props.packageState.package_details.remark}</h4>
                <p>{this.props.packageState.package_details.location}</p>
                <p>
                  Reviews -{this.props.packageState.package_details.reviews}
                </p>
                <div className="row">
                  {this.props.packageState.package_details.what_includes.map(
                    (item, key) => {
                      return (
                        <button
                          type="button"
                          className="btn col-xl-4 col-md-4 amenities"
                        >
                          {item.amenities}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="col-xl-8 col-md-8 col-xs-12 text-center package-description">
                <h5>
                  Join us on this all inclusive 2 nights package! CAPACITY MAX 4
                  PEOPLE!!!
                </h5>
                <div className="row">
                  <div className="col-xl-3 col-md-3 col-sm-6">
                    <span>
                      <i
                        className="fa fa-circle-o-notch"
                        aria-hidden="true"
                      ></i>
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
                      <i
                        className="fa fa-circle-o-notch"
                        aria-hidden="true"
                      ></i>
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
            {this.props.packageState.package_status !== false ? (
              <React.Fragment>
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-4 col-xs-12">
                    <h3>Description</h3>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <div className="destination_info">
                      {/* <h3>Description</h3> */}
                      {this.props.packageState.package_details !== [] &&
                      this.props.packageState.package_details !== undefined ? (
                        <p>
                          {this.props.packageState.package_details.description}
                        </p>
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
                      {this.props.packageState.package_details !== [] &&
                      this.props.packageState.package_details !== undefined ? (
                        <p>
                          {this.props.packageState.package_details.description}
                        </p>
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
                      {this.props.packageState.package_details !== [] &&
                      this.props.packageState.package_details !== undefined
                        ? this.props.packageState.package_details.itinerary_details.map(
                            (item, key) => {
                              return (
                                <React.Fragment>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <img src={item.day_img} />
                                    </div>
                                    <div className="col-md-8">
                                      <h4>{item.day}</h4>
                                      <h5>{item.title}</h5>
                                      <p
                                        onClick={() =>
                                          this.props.handleModalClose(key)
                                        }
                                      >
                                        {item.small_description}
                                        {/* <a data-toggle="collapse" data-target='#description'+{key}>Collapsible</a> */}
                                      </p>
                                    </div>
                                  </div>

                                  {/* ***********************Modal starts here********************* */}
                                  
                                    <Modal dialogClassName="my-modal"
                                      show={
                                        this.props.packageState.itinaryDayModal[
                                          key
                                        ]
                                      }
                                      bsSize="large"
                                      onHide={()=>this.props.handleModalClose(key)}
                                    >
                                      <ModalComponent data ={item}/>
                                      {/* <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        <h4>Text in a modal</h4>
                                        <p>
                                          Duis mollis, est non commodo luctus,
                                          nisi erat porttitor ligula.
                                        </p>

                                        <h4>Popover in a modal</h4>
                                       

                                        <hr />

                                        <h4>
                                          Overflowing text to show scroll
                                          behavior
                                        </h4>
                                        <p>
                                          Cras mattis consectetur purus sit amet
                                          fermentum. Cras justo odio, dapibus ac
                                          facilisis in, egestas eget quam. Morbi
                                          leo risus, porta ac consectetur ac,
                                          vestibulum at eros.
                                        </p>
                                        <p>
                                          Praesent commodo cursus magna, vel
                                          scelerisque nisl consectetur et.
                                          Vivamus sagittis lacus vel augue
                                          laoreet rutrum faucibus dolor auctor.
                                        </p>
                                        <p>
                                          Aenean lacinia bibendum nulla sed
                                          consectetur. Praesent commodo cursus
                                          magna, vel scelerisque nisl
                                          consectetur et. Donec sed odio dui.
                                          Donec ullamcorper nulla non metus
                                          auctor fringilla.
                                        </p>
                                        <p>
                                          Cras mattis consectetur purus sit amet
                                          fermentum. Cras justo odio, dapibus ac
                                          facilisis in, egestas eget quam. Morbi
                                          leo risus, porta ac consectetur ac,
                                          vestibulum at eros.
                                        </p>
                                        <p>
                                          Praesent commodo cursus magna, vel
                                          scelerisque nisl consectetur et.
                                          Vivamus sagittis lacus vel augue
                                          laoreet rutrum faucibus dolor auctor.
                                        </p>
                                        <p>
                                          Aenean lacinia bibendum nulla sed
                                          consectetur. Praesent commodo cursus
                                          magna, vel scelerisque nisl
                                          consectetur et. Donec sed odio dui.
                                          Donec ullamcorper nulla non metus
                                          auctor fringilla.
                                        </p>
                                        <p>
                                          Cras mattis consectetur purus sit amet
                                          fermentum. Cras justo odio, dapibus ac
                                          facilisis in, egestas eget quam. Morbi
                                          leo risus, porta ac consectetur ac,
                                          vestibulum at eros.
                                        </p>
                                        <p>
                                          Praesent commodo cursus magna, vel
                                          scelerisque nisl consectetur et.
                                          Vivamus sagittis lacus vel augue
                                          laoreet rutrum faucibus dolor auctor.
                                        </p>
                                        <p>
                                          Aenean lacinia bibendum nulla sed
                                          consectetur. Praesent commodo cursus
                                          magna, vel scelerisque nisl
                                          consectetur et. Donec sed odio dui.
                                          Donec ullamcorper nulla non metus
                                          auctor fringilla.
                                        </p>
                                      </Modal.Body> */}
                                    </Modal>
                                  
                                  
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
                    <h3>Your itinerary 2</h3>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <div className="destination_info">
                      <div className="single_destination">
                        <h4>Day-01</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words.
                        </p>
                        {/************************Modal starts here********************* */}
                        {/* {this.this.props.packageState.itinaryDayModal[key] !==
                      false ? (
                        <Modal
                          show={this.this.props.packageState.itinaryDayModal[key]}
                          onHide={this.handleModalClose(key)}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <h4>Text in a modal</h4>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </p>

                            <h4>Popover in a modal</h4>
                            <p>
                              there is a{" "}
                              <OverlayTrigger overlay={popover}>
                                <a href="#popover">popover</a>
                              </OverlayTrigger>{" "}
                              here
                            </p>

                            <h4>Tooltips in a modal</h4>
                            <p>
                              there is a{" "}
                              <OverlayTrigger overlay={tooltip}>
                                <a href="#tooltip">tooltip</a>
                              </OverlayTrigger>{" "}
                              here
                            </p>

                            <hr />

                            <h4>Overflowing text to show scroll behavior</h4>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={this.this.props.handleModalClose(key)}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      ) : (
                        ""
                      )} */}

                        {/*************************Modal ends here********************** */}
                      </div>
                      <div className="single_destination">
                        <h4>Day-02</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words.
                        </p>
                      </div>
                      <div className="single_destination">
                        <h4>Day-03</h4>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words.
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
                      onClick={this.props.showAvailability}
                    >
                      Check Dates
                    </button>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              ""
            )}
            {this.props.packageState.availability_status !== false ? (
              <React.Fragment>
                {/**********************************Months lists*****************/}
                <div className="row">
                  <div className="col-xl-8 col-md-8 col-xs-12">
                    <a className="btn  btn-lg btnMonths col-md-2">March 2020</a>
                    <a className="btn  btn-lg  btnMonths col-md-2">
                      April 2020
                    </a>
                    <a className="btn  btn-lg  btnMonths col-md-2">May 2020</a>
                    <a className="btn  btn-lg btnMonths col-md-2">June 2020</a>
                    <a className="btn  btn-lg btnMonths col-md-2">July 2020</a>
                    <a className="btn  btn-lg btnMonths col-md-2">
                      August 2020
                    </a>
                    <a className="btn  btn-lg btnMonths col-md-2">
                      September 2020
                    </a>
                    <a className="btn  btn-lg btnMonths col-md-2">
                      October 2020
                    </a>
                    <a className="btn  btn-lg btnMonths col-md-2">
                      November 2020
                    </a>
                    <a className="btn  btn-lg btnMonths col-md-2">
                      December 2020
                    </a>
                    <a className="btn  btn-lg btnMonths col-md-2">
                      January 2021
                    </a>
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
  }
}
