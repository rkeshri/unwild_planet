import React, { Component } from "../../../node_modules/react";

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let href = "#";
    return (
      <div className="" id="parentLoginContainer">
        <div className="container" id="fixedLoginContainer">
          <div className="row">
            <div className="col-md-10  col-xs-12">
              <div className="panel panel-login">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-sm-6 col-xs-6">
                      <a
                        onClick={this.props.ActiveLink}
                        className=""
                        id="login-form-link"
                        href={href}
                        style={{ float: "right" }}
                      >
                        Login
                      </a>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                      <a
                        onClick={this.props.ActiveLink}
                        id="register-form-link"
                        href={href}
                        className="active"
                        style={{ float: "left" }}
                      >
                        Register
                      </a>
                    </div>
                    <div
                      className="close-popup"
                      onClick={this.props.showLoginForm}
                    >
                      <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 16 16"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="#2A3C50"
                          fill-rule="evenodd"
                          transform="translate(-1234.000000, -114.000000)"
                        >
                          <path d="M1249.70558,114.292582 C1249.31547,113.902473 1248.68982,113.902473 1248.29971,114.292582 L1241.99908,120.593214 L1235.69845,114.292582 C1235.30834,113.902473 1234.68269,113.902473 1234.29258,114.292582 C1233.90247,114.682691 1233.90247,115.308338 1234.29258,115.698447 L1240.59321,121.99908 L1234.29258,128.299712 C1233.90247,128.689822 1233.90247,129.315469 1234.29258,129.705578 C1234.48396,129.896952 1234.74158,130 1234.99183,130 C1235.24209,130 1235.49971,129.904313 1235.69109,129.705578 L1241.99172,123.404945 L1248.29235,129.705578 C1248.48373,129.896952 1248.74135,130 1248.9916,130 C1249.24922,130 1249.49948,129.904313 1249.69086,129.705578 C1250.08097,129.315469 1250.08097,128.689822 1249.69086,128.299712 L1243.40495,121.99908 L1249.70558,115.698447 C1250.09569,115.308338 1250.09569,114.682691 1249.70558,114.292582 Z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="panel-body">
                  <div className="row ">
                    {this.props.mystate.plainLogin !== false ? (
                      <div className="col-md-6 col-sm-12 panel-login-img">
                        <img
                          src={require("../../assets/images/plain_login.png")}
                          alt="login"
                          className="img-responsive"
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    {this.props.mystate.registerDoctorScreen !== false ? (
                      <div className="col-md-6 col-sm-12 panel-login-img">
                        <img
                          src={require("../../assets/images/doctor_register.png")}
                          alt="register"
                          className="img-responsive"
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    {this.props.mystate.regPatient !== false ? (
                      <div className="col-md-6 col-sm-12 panel-login-img">
                        <img
                          src={require("../../assets/images/patient_register.png")}
                          alt="patient-register"
                          className="img-responsive"
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    {this.props.mystate.otpReceived !== false ? (
                      <div className="col-md-6 col-sm-12 panel-login-img">
                        <img
                          src={require("../../assets/images/otp_verify.png")}
                          alt="otp-received"
                          className="img-responsive"
                        />
                      </div>
                    ) : (
                      ""
                    )}

                     {/************************** Forgot Password******************************/}
                     {this.props.mystate.forgotPassword !== false ? (
                        <React.Fragment>
                          <div className="col-md-6 col-sm-12 panel-login-img">
                            <img
                              src={require("../../assets/images/otp_verify.png")}
                              alt="otp-received"
                              className="img-responsive"
                            />
                          </div>
                          <div className="col-xs-12 col-md-6">
                            <div className="form-border">
                              <form
                                id="frmUserLogin"
                                className="form-border pd-25"
                                method="post"
                                role="form"
                              >
                                <h4>Forgot Password</h4>
                                <div className="form-group">
                                  {/* <label htmlFor="txtMobileNum">
          Mobile Number / Email Id
        </label> */}
                                  <input
                                    type="number"
                                    name="txtMobileNum"
                                    id="txtMobileNum"
                                    tabindex="1"
                                    className="form-control"
                                    placeholder="Enter Mobile number "
                                    onChange={this.props.HandleUserInput}
                                    value={this.props.mystate.txtUserMobileNum}
                                  />
                                  <span
                                    id="spnErr_txtMobileNum"
                                    className="display_none"
                                  />
                                </div>

                                <div className="form-group row">
                                  <div className="col-md-6 col-xs-12" />
                                  <div className="col-md-6 col-xs-12" />
                                </div>
                                {this.props.mystate.successMessage !==
                                  undefined &&
                                this.props.mystate.successMessage !== "" ? (
                                  <div class="alert alert-success">
                                    <strong>
                                      {this.props.mystate.loginMessage}
                                    </strong>
                                  </div>
                                ) : (
                                  ""
                                )}

                                {this.props.mystate.failureMessage !==
                                  undefined &&
                                this.props.mystate.failureMessage !== "" ? (
                                  <div class="alert alert-danger mb-10">
                                    <strong>
                                      {this.props.mystate.failureMessage}
                                    </strong>
                                  </div>
                                ) : (
                                  ""
                                )}

                                <div className="form-group">
                                  <input
                                    type="button"
                                    name="register-submit"
                                    id="register-submit"
                                    tabindex="4"
                                    onClick={this.props.ForgotPassordSubmit}
                                    className="form-control btn btn-register"
                                    value="Send OTP"
                                  />
                                </div>

                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-lg-12" />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        ""
                      )}

                    <div className="col-md-6 col-xs-12">
                      {this.props.mystate.plainLogin !== false ? (
                        <div className="form-border">
                          <form
                            id="frmUserLogin"
                            className="form-border pd-25"
                            method="post"
                            role="form"
                          >
                            <div className="form-group">
                              <label htmlFor="txtMobileNum">
                                Mobile Number / Email Id
                              </label>
                              <input
                                type="number"
                                name="txtMobileNum"
                                id="txtMobileNum"
                                tabindex="1"
                                className="form-control"
                                placeholder="Mobile number / Email Id"
                                onChange={this.props.HandleUserInput}
                                value={this.props.mystate.txtUserMobileNum}
                              />
                              <span
                                id="spnErr_txtMobileNum"
                                className="display_none"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="txtLoginPassword">Password</label>
                              <input
                                type="password"
                                name="txtLoginPassword"
                                id="txtLoginPassword"
                                tabindex="2"
                                className="form-control"
                                placeholder="Password"
                                readOnly={this.props.mystate.chkLoginWithOtp}
                                onChange={this.props.HandleUserInput}
                                value={this.props.mystate.txtLoginPassword}
                              />
                            </div>
                            <div className="form-group row">
                              <div className="col-md-6 col-xs-12">
                                <input
                                  name="chkLoginWithOtp"
                                  type="checkbox"
                                  id="chkLoginWithOtp"
                                  onClick={this.props.HandleUserInput}
                                  value={this.props.mystate.chkLoginWithOtp}
                                  defaultChecked={
                                    this.props.mystate.chkLoginWithOtp
                                  }
                                  disabled={
                                    this.props.mystate.loginWithPassword
                                  }
                                />
                                <label
                                  htmlFor="chkLoginWithOtp"
                                  className="inline"
                                  style={{ marginLeft: "20px" }}
                                >
                                  Login with OTP{" "}
                                </label>
                              </div>
                              <div className="col-md-6 col-xs-12">
                                <a
                                  onClick={this.props.forgotPassword}
                                  href={href}
                                  style={{ float: "right", fontSize: "13px" }}
                                >
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                            {this.props.mystate.loginMessage !== undefined &&
                            this.props.mystate.loginMessage !== "" ? (
                              <div class="alert alert-success">
                                <strong>
                                  {this.props.mystate.loginMessage}
                                </strong>
                              </div>
                            ) : (
                              ""
                            )}

                            {this.props.mystate.failureMessage !== undefined &&
                            this.props.mystate.failureMessage != "" ? (
                              <div class="alert alert-danger mb-10">
                                <strong>
                                  {this.props.mystate.failureMessage}
                                </strong>
                              </div>
                            ) : (
                              ""
                            )}

                            <div className="form-group">
                              <input
                                type="button"
                                name="register-submit"
                                id="register-submit"
                                tabindex="4"
                                onClick={this.props.Login}
                                className="form-control btn btn-register"
                                value="Login"
                              />
                            </div>
                            <div className="form-group">
                              {/*<h6 className="content-in-line ">
                                Or Continue with
                            </h6>*/}
                              <div className="line" />
                            </div>

                            <div className="form-group">
                              <div className="row">
                                <div className="col-lg-12">
                                  {/*<div className="col-md-6 col-xs-12 btn-social-left">*/}
                                  {/**/}
                                  {/*<a class="btn-block btn-social btn-facebook btn-social-white " disabled={this.props.mystate.chkLoginWithOtp}>*/}
                                  {/*<i class="fa fa-facebook"></i> Facebook*/}
                                  {/*</a>*/}
                                  {/*</div>*/}
                                  {/*<div className="col-md-6 col-xs-12 btn-social-right">*/}
                                  {/*<a class="btn-block btn-social btn-facebook btn-social-white" disabled={this.props.mystate.chkLoginWithOtp}>*/}
                                  {/*<i class="fa fa-google"></i> Google*/}
                                  {/*</a>*/}
                                  {/*</div>*/}
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      ) : (
                        ""
                      )}                    

                      {/*Login screen design start here*/}
                      {this.props.mystate.regPatient !== false ? (
                        <div>
                          <div
                            className="form-border"
                            id=""
                            style={{ display: "block" }}
                          >
                            <div className="join-link join-text row">
                              <div className="col-md-6 col-xs-12">
                                <p>Join WeTreat</p>
                              </div>
                              <div className="col-md-6  col-xs-12 pd-9">
                                <div className="join-link-right">
                                  <span className="are-you-a-doctor">
                                    Are you a doctor?
                                  </span>
                                  <a
                                    href={href}
                                    className="register-here"
                                    onClick={
                                      this.props.ShowDoctorRegisterScreen
                                    }
                                  >
                                    Register here
                                  </a>
                                </div>
                              </div>
                            </div>
                            <form
                              id="PatientRegisterForm"
                              method="post"
                              role="form"
                              className="pd-25"
                              style={{ display: "block" }}
                            >
                              <div className="form-group">
                                <label htmlFor="txtFullName">Full Name</label>
                                <input
                                  type="text"
                                  name="txtFullName"
                                  id="txtFullName"
                                  tabindex="1"
                                  className="form-control"
                                  placeholder="Full Name"
                                  onChange={this.props.HandleUserInput}
                                  value={this.props.mystate.txtFullName}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="txtMobileNum">
                                  Mobile Number
                                </label>
                                <input
                                  type="number"
                                  name="txtMobileNum"
                                  id="txtMobileNum"
                                  tabindex="2"
                                  className="form-control"
                                  placeholder="(+91) Mobile Number"
                                  onChange={this.props.HandleUserInput}
                                  value={this.props.mystate.txtMobileNum}
                                />
                                <span id="spnErr_txtMobileNum" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="txtPassword">
                                  Create Password
                                </label>
                                <input
                                  type="password"
                                  name="txtPassword"
                                  id="txtPassword"
                                  tabindex="3"
                                  className="form-control"
                                  placeholder="Password"
                                  onChange={this.props.HandleUserInput}
                                  value={this.props.mystate.txtPassword}
                                />
                              </div>
                              {this.props.mystate.registerSuccessMessage !==
                                undefined &&
                              this.props.mystate.registerSuccessMessage !==
                                "" ? (
                                <div class="alert alert-success">
                                  <strong>
                                    {this.props.mystate.registerSuccessMessage}
                                  </strong>
                                </div>
                              ) : (
                                ""
                              )}

                              {this.props.mystate.registerFailureMessage !==
                                undefined &&
                              this.props.mystate.registerFailureMessage !==
                                "" ? (
                                <div class="alert alert-danger mb-10">
                                  <strong>
                                    {this.props.mystate.registerFailureMessage}
                                  </strong>
                                </div>
                              ) : (
                                ""
                              )}

                              <div className="form-group">
                                <input
                                  type="button"
                                  name="register-submit"
                                  id="register-submit"
                                  tabindex="4"
                                  onClick={this.props.UserRegisterFormData}
                                  className="form-control btn btn-register"
                                  value="Send OTP To Register"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {/*register screen design ends here*/}
                      {/*Otp screen design start here*/}
                      {this.props.mystate.otpReceived !== false ? (
                        <div className="form-border" id="registerDiv">
                          <div className="join-link join-text row">
                            <div className="col-md-6 col-xs-12">
                              <p>Number Verification</p>
                            </div>
                            <div className="col-md-6 pd-9" />
                          </div>
                          <form
                            id="otpReceived-form"
                            method="post"
                            className="pd-25"
                            role="form"
                          >
                            <div className="form-group">
                              {this.props.mystate.editNumber != false ? (
                                <div className="row">
                                  <p className="ml-16">Edit Number</p>
                                  <div className="col-md-8 col-xs-12">
                                    <input
                                      type="number"
                                      name="txtMobileNum"
                                      id="txtMobileNum"
                                      tabindex="2"
                                      className="form-control"
                                      placeholder="(+91) Mobile Number"
                                      onChange={this.props.HandleUserInput}
                                      value={this.props.mystate.txtMobileNum}
                                    />
                                    <p
                                      className="text-right"
                                      style={{ color: "red" }}
                                      onClick={this.props.updateNumber}
                                    >
                                      {" "}
                                      Cancel
                                    </p>
                                  </div>
                                  <div className="col-md-4 col-xs-12">
                                    <input
                                      type="button"
                                      name="btnSendOtp"
                                      id="btnSendOtp"
                                      tabindex="3"
                                      className="form-control btn btn-otp"
                                      value="Send OTP"
                                      onClick={this.props.ResendOtp}
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <p>We have sent you OTP on</p>
                                  <h3>
                                    {this.props.mystate.txtMobileNum}{" "}
                                    <i
                                      className="fa fa-pencil"
                                      onClick={this.props.updateNumber}
                                    />
                                  </h3>
                                </div>
                              )}
                            </div>
                            <div className="form-group">
                              <label htmlFor="txtLoginWithOtp">OTP</label>
                              <input
                                type="text"
                                name="txtLoginWithOtp"
                                id="txtLoginWithOtp"
                                tabindex="2"
                                className="form-control"
                                placeholder="Enter the send OTP"
                                onChange={this.props.HandleUserInput}
                                value={this.props.mystate.txtLoginWithOtp}
                                //    readOnly={this.props.mystate.editNumber}
                              />
                            </div>
                            {this.props.mystate.otpSuccessMessage !==
                              undefined &&
                            this.props.mystate.otpSuccessMessage !== "" ? (
                              <div class="alert alert-success mb-10">
                                <strong>
                                  {this.props.mystate.otpSuccessMessage}
                                </strong>
                              </div>
                            ) : (
                              ""
                            )}

                            {this.props.mystate.otpFailureMessage !==
                              undefined &&
                            this.props.mystate.otpFailureMessage !== "" ? (
                              <div class="alert alert-danger mb-10">
                                <strong>
                                  {this.props.mystate.otpFailureMessage}
                                </strong>
                              </div>
                            ) : (
                              ""
                            )}

                            <div className="form-group">
                              <input
                                type="button"
                                name="btnLoginSubmit"
                                id="btnLoginSubmit"
                                tabindex="3"
                                className="form-control btn btn-register"
                                value="Login"
                                onClick={this.props.loginWithOtp}
                                //    readOnly={this.props.mystate.editNumber}
                              />
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="text-right">
                                    <span>Still not received OTP? </span>
                                    <a
                                      href={href}
                                      tabindex="4"
                                      className="resend-link"
                                      onClick={this.props.ResendOtp}
                                      disabled={this.props.mystate.editNumber}
                                    >
                                      Resend OTP
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      ) : (
                        ""
                      )}
                      {/*Otp screen design ends here*/}
                      {/*Register doctor screen starts here*/}
                      {this.props.mystate.registerDoctorScreen !== false ? (
                        <div className="form-border" id="registerDiv">
                          <div className="join-link join-text row">
                            <div className="col-md-6">
                              <p>Join WeTreat</p>
                            </div>
                            <div className="col-md-6 pd-9">
                              <div className="join-link-right">
                                <span className="are-you-a-doctor">
                                  Are you a Patient?
                                </span>
                                <a
                                  href={href}
                                  className="register-here"
                                  onClick={this.props.ShowPatientRegisterScreen}
                                >
                                  Register here
                                </a>
                              </div>
                            </div>
                          </div>
                          <form
                            id="Doctor_register_form"
                            className="pd-25"
                            method="post"
                            role="form"
                          >
                            <div className="form-group">
                              <label htmlFor="txtDocFullName">Full Name</label>
                              <input
                                type="text"
                                name="txtDocFullName"
                                id="txtDocFullName"
                                tabindex="1"
                                className="form-control"
                                placeholder="Full Name"
                                onChange={this.props.HandleUserInput}
                                value={this.props.mystate.txtDocFullName}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="txtMobileNum">
                                Mobile Number
                              </label>
                              <input
                                type="number"
                                name="txtMobileNum"
                                id="txtMobileNum"
                                tabindex="2"
                                className="form-control"
                                placeholder="(+91) Mobile Number"
                                onChange={this.props.HandleUserInput}
                                value={this.props.mystate.txtMobileNum}
                              />
                              <span id="spnErr_txtMobileNum" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="txtDocPassword">
                                Create Password
                              </label>
                              <input
                                type="password"
                                name="txtDocPassword"
                                id="txtDocPassword"
                                tabindex="3"
                                className="form-control"
                                placeholder="Password"
                                onChange={this.props.HandleUserInput}
                                value={this.props.mystate.txtDocPassword}
                              />
                            </div>
                            {this.props.mystate.registerDoctorSuccessMessage !==
                              undefined &&
                            this.props.mystate.registerDoctorSuccessMessage !==
                              "" ? (
                              <div class="alert alert-success">
                                <strong>
                                  {
                                    this.props.mystate
                                      .registerDoctorSuccessMessage
                                  }
                                </strong>
                              </div>
                            ) : (
                              ""
                            )}

                            {this.props.mystate.registerDoctorFailureMessage !==
                              undefined &&
                            this.props.mystate.registerDoctorFailureMessage !==
                              "" ? (
                              <div class="alert alert-danger mb-10">
                                <strong>
                                  {
                                    this.props.mystate
                                      .registerDoctorFailureMessage
                                  }
                                </strong>
                              </div>
                            ) : (
                              ""
                            )}
                            <div className="form-group">
                              <input
                                type="button"
                                name="register-submit"
                                id="register-submit"
                                tabindex="4"
                                className="form-control btn btn-register"
                                onClick={this.props.DoctorRegisterFormData}
                                value="Send OTP To Register"
                              />
                            </div>
                          </form>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="panel-footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
