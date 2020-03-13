import React, { Component } from "../../../node_modules/react";
import axios from "../../../node_modules/axios";
// import DateTimePicker from "react-datetime-picker";

export default class DownloadAppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBookLabForm: false,
      ddlCity: "Hyderabad",
      txtLabBookingDate: new Date()
    };
  }
  showBookLab = () => {
    this.setState({ showBookLabForm: !this.state.showBookLabForm });
  };
  HandleUserInput = e => {
    console.log("#########-----" + e.target.name);
    const val = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: val });
  };
  onChange = txtLabBookingDate => this.setState({ txtLabBookingDate })

  SaveBookLab = () => {
    if (
      this.state.txtFullName !== undefined &&
      this.state.txtFullName !== "" &&
      this.state.txtMobileNumber !== undefined &&
      this.state.txtMobileNumber !== "" &&
      this.state.txtLabBookingDate !== undefined &&
      this.state.txtLabBookingDate !== ""
    ) {
      axios
        .post(
          global.localurl + "/lab/booking/" + sessionStorage.getItem("user_id"),
          {
            txtFullName: this.state.txtFullName,
            txtAge: this.state.txtAge,
            txtMobileNumber: this.state.txtMobileNumber,
            txtUserEmail: this.state.txtUserEmail,
            txtappointment_date: this.state.txtLabBookingDate,
            ddlCity: this.state.ddlCity
          }
        )
        .then(response => {
          console.log("in lab booking response" + JSON.stringify(response));
          if (response.data.status === "SUCCESS") {
            this.setState({ successMessage: "Booking confirmed" });

            setTimeout(
              function() {
                this.setState({ successMessage: "", showBookLabForm: false });
              }.bind(this),
              4000
            );
          } else if (response.data.status === "FAILURE") {
            this.setState({ failureMessage: "Try after sometime" });
            setTimeout(
              function() {
                this.setState({ failureMessage: "" });
              }.bind(this),
              4000
            );
          }
          //console.log('&&&&&&--'+that.state.chkLoginWithOtp +'---type od-----'+typeof that.state.chkLoginWithOtp )
        })
        .catch(function(error) {
          //console.log("In error" + error);
          this.setState({ failureMessage: "Please try after some time" });
        });
    } else {
      this.setState({ failureMessage: "All fields are mandatory!" });
    }
  };

  render() {
    let href = "#";
    return (
      <section id="wtDownloadappSection" class="container-fluid">
        <div class="container">
          <h1 class="chat-page-heading-txt wt-center">Book Health Checkup</h1>

          <div className="row py-50">
            <div className="col-md-4 col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <img
                    src={require("../../assets/images/health_checkup_1.jpg")}
                    alt=""
                    className="img-responsive center-block"
                  />
                  <h4 className="normal-heading font-15px text-justify">
                    Compresive Young Indian Checkup
                  </h4>
                  <p className="panel-sub-heading font-12px">
                    Ideal for indivduals aged21 - 40 Years
                  </p>
                  <hr />
                  <p>
                    <i className="fa fa-flask" aria-hidden="true" />{" "}
                    <span className="font-12px">
                      <b>Includes 88 tests</b>
                    </span>
                  </p>
                  <p className="font-12px"> &emsp; T3-T4-TSH</p>
                  <p className="font-12px"> &emsp; Iron Deficiency Profile</p>
                  <p className="font-12px"> &emsp; Liver Function Tests</p>
                  <hr />
                  <span class="discount-txt-bg-green">23% off</span>
                  <span>
                    &nbsp;&nbsp;
                    <i className="fa fa-inr" aria-hidden="true" /> 2999
                  </span>
                  <del>
                    <i className="fa fa-inr" aria-hidden="true" /> 3999
                  </del>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    className="viewmore-btn"
                    style={{ float: "right" }}
                    onClick={this.showBookLab}
                    href={href}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/*card-1 end*/}
            <div className="col-md-4 col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <img
                    src={require("../../assets/images/health_checkup_2.jpg")}
                    alt=""
                    className="img-responsive center-block"
                  />
                  <h4 className="normal-heading font-15px text-justify">
                    Compresive Young Indian Checkup
                  </h4>
                  <p className="panel-sub-heading font-12px">
                    Ideal for indivduals aged21 - 40 Years
                  </p>
                  <hr />
                  <p>
                    <i class="fa fa-flask" aria-hidden="true" />{" "}
                    <span className="font-12px">
                      <b>Includes 88 tests</b>
                    </span>
                  </p>
                  <p className="font-12px"> &emsp; T3-T4-TSH</p>
                  <p className="font-12px"> &emsp; Iron Deficiency Profile</p>
                  <p className="font-12px"> &emsp; Liver Function Tests</p>
                  <hr />
                  <span class="discount-txt-bg-green">23% off</span>
                  <span>
                    &nbsp;&nbsp;
                    <i className="fa fa-inr" aria-hidden="true" /> 2999
                  </span>
                  <del>
                    <i className="fa fa-inr" aria-hidden="true" /> 3999
                  </del>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    className="viewmore-btn"
                    style={{ float: "right" }}
                    onClick={this.showBookLab}
                    href={href}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/*card-2 end*/}
            <div className="col-md-4 col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <img
                    src={require("../../assets/images/health_checkup_3.jpg")}
                    alt=""
                    className="img-responsive center-block"
                  />
                  <h4 className="normal-heading font-15px text-justify">
                    Compresive Young Indian Checkup
                  </h4>
                  <p className="panel-sub-heading font-12px">
                    Ideal for indivduals aged21 - 40 Years
                  </p>
                  <hr />
                  <p>
                    <i class="fa fa-flask" aria-hidden="true" />{" "}
                    <span className="font-12px">
                      <b>Includes 88 tests</b>
                    </span>
                  </p>
                  <p className="font-12px"> &emsp; T3-T4-TSH</p>
                  <p className="font-12px"> &emsp; Iron Deficiency Profile</p>
                  <p className="font-12px"> &emsp; Liver Function Tests</p>
                  <hr />
                  <span class="discount-txt-bg-green">23% off</span>
                  <span>
                    &nbsp;&nbsp;
                    <i className="fa fa-inr" aria-hidden="true" /> 2999
                  </span>
                  <del>
                    <i className="fa fa-inr" aria-hidden="true" /> 3999
                  </del>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    className="viewmore-btn"
                    style={{ float: "right" }}
                    onClick={this.showBookLab}
                    href={href}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/*card-3 end*/}
            {this.state.showBookLabForm === true ? (
              sessionStorage.length !== 0 ? (
                <div className="container lab-booking-popup">
                  <p>
                    <span
                      class="glyphicon glyphicon-remove"
                      onClick={this.showBookLab}
                      style={{ float: "right" }}
                    />{" "}
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <div className="wt-insurance-heading">
                        <h1>Wetreat BookLab </h1>
                      </div>
                      <div
                        className="wt-insurance-form"
                        style={{ marginTop: "40px" }}
                      >
                        {this.state.failureMessage !== undefined &&
                        this.state.failureMessage !== "" ? (
                          <div class="alert alert-danger">
                            <strong>{this.state.failureMessage}</strong>
                          </div>
                        ) : (
                          ""
                        )}
                        {this.state.successMessage !== undefined &&
                        this.state.successMessage !== "" ? (
                          <div class="alert alert-success">
                            <strong>{this.state.successMessage}</strong>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="form-group">
                          <label
                            htmlFor="txtFullName"
                            className="my-10 label-doc-3 full-name"
                          >
                            Full Name
                          </label>
                          <input
                            id="txtFullName"
                            type="text"
                            className="form-control"
                            name="txtFullName"
                            placeholder="Full name"
                            value={this.state.txtFullName}
                            onBlur={this.HandleUserInput}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="txtAge" className="my-10 label-doc-3">
                            Age
                          </label>
                          <input
                            id="txtAge"
                            type="text"
                            className="form-control"
                            name="txtAge"
                            value={this.state.txtAge}
                            onBlur={this.HandleUserInput}
                            placeholder="Age"
                          />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="txtMobileNumber"
                            className="my-10 label-doc-3"
                          >
                            Mobile Number
                          </label>
                          <input
                            id="txtMobileNumber"
                            type="text"
                            className="form-control"
                            name="txtMobileNumber"
                            placeholder=""
                            value={this.state.txtMobileNumber}
                            onBlur={this.HandleUserInput}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="txtUserEmail"
                            className="my-10 label-doc-3"
                          >
                            Email
                          </label>
                          <input
                            id="txtUserEmail"
                            type="email"
                            className="form-control"
                            name="txtUserEmail"
                            placeholder="xyz@gmail.com"
                            value={this.state.txtUserEmail}
                            onBlur={this.HandleUserInput}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="txtLabBookingDate"
                            className="my-10 label-doc-3"
                          >
                            Date
                          </label>
                          {/* <DateTimePicker
                            onChange={this.onChange}
                            value={this.state.txtLabBookingDate}
                            name="txtLabBookingDate"
                            id="txtLabBookingDate"
                          /> */}

                          {/* <input
                            id="txtLabBookingDate"
                            type="email"
                            className="form-control"
                            name="txtLabBookingDate"
                            placeholder="DD/MM/YYYY"
                            value={this.state.txtLabBookingDate}
                            onBlur={this.HandleUserInput}
                          /> */}
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="ddlCity"
                            className="my-10 label-doc-3"
                          >
                            City
                          </label>
                          <select
                            className="wt-popup-search-dropdown"
                            id="ddlCity"
                            name="ddlCity"
                            onChange={this.HandleUserInput}
                            value={this.state.ddlCity}
                          >
                            <option>Select city</option>
                            <option value="khammam"> khammam </option>
                            <option value="Hyderabad"> Hyderabad</option>
                          </select>
                        </div>
                        <button
                          type="button"
                          className="btn btn-success submit-button"
                          onClick={this.SaveBookLab}
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div>
                        <img
                          alt="insurance"
                          src={require("../../assets/images/insurance-handshake.png")}
                          className="img-responsive ovel"
                        />
                      </div>
                      <span>
                        {/* <h2 className="why-choose-wetreat-i">
                        Why choose Wetreat                       </h2> */}
                      </span>
                      <div>
                        {/* <ul className="insurence-react">
                        <li className="why-insurence">
                          <img
                            src={require("../../assets/images/react.jpeg")}
                            className="img-responsive" alt='insurance'
                          />
                          <span className="lorem-ipsum-lorem-ip">
                            Lorem Ipsum Lorem Lorem Ipsum Lorem
                          </span>
                        </li>
                        <li className="why-insurence">
                          <img alt='insurance'
                            src={require("../../assets/images/react.jpeg")}
                            className="img-responsive"
                          />
                          <span className="lorem-ipsum-lorem-ip">
                            Lorem Ipsum Lorem Lorem Ipsum Lorem
                          </span>
                        </li>
                        <li className="why-insurence">
                          <img alt='insurance'
                            src={require("../../assets/images/react.jpeg")}
                            className="img-responsive"
                          />
                          <span className="lorem-ipsum-lorem-ip">
                            Lorem Ipsum Lorem Lorem Ipsum Lorem
                          </span>
                        </li>
                      </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                this.setState({ showBookLabForm: false }, () => {
                  {
                    alert("Please Login first");
                  }
                })
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
}
