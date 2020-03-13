import React, { Component } from "../../node_modules/react";

import Header from "../common/header";
import Footer from "../common/footer";
import LoginComponent from "../components/home/login-component";
import $ from "jquery";
import axios from "axios";
import global from "../global";

import Utility from "../utility";
//import { timeout } from "q";

export default class SinglePageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: false,
      otpReceived: false,
      plainLogin: false,
      defaultLogin: false,
      defaultRegister: false,
      defaultScreen: true,
      registerDoctorScreen: false,
      forgotPassword: false,
      chkLoginWithOtp: false,
      showSearchPopUp: false,
      editNumber: false,
      failureMessage: "",
      loginWithPassword: false,
      showLogin: false,
      showHeader: true
    };
  }

  componentWillMount = () => {
    let url = window.location.href;
    let key = url.split("/");
    // alert("$$$"+key[3])
    if (key[3] === "searchdata") {
      this.setState({ showHeader: false });
    }

    // let city = this.props.match.params.city;
    // let speciality = this.props.match.params.speciality;
    // let looking_for = this.props.match.params.type;
    // if(city!=='' && speciality!=="" && looking_for!==""){
    //     this.setState({showHeader:false})
    // }
    // else{
    //     this.setState({showHeader:true})
    // }
  };

  showLoginForm = () => {
    this.setState({
      showLogin: !this.state.showLogin,
      // chkLoginWithOtp: "",
      txtMobileNum: "",
      txtLoginPassword: "",
      loginMessage: "",
      failureMessage: "",
      chkLoginWithOtp: false
    });
  };

  // componentWillMount() {
  //     console.log("window.location.href------"+ window.location.href)
  //     if (window.location.href === 'http://localhost:3000/' ||window.location.href === 'http://localhost:3000/home' || window.location.href === "http://wetreat.in/" ||window.location.href =="http://wetreat.in/home") {
  //         let $header = $("header"),
  //             $clone = $header.before($header.clone().addClass("clone"));
  //
  //         $(window).on("scroll", function () {
  //             let fromTop = $(window).scrollTop();
  //             $("body").toggleClass("down", (fromTop > 400));
  //         });
  //
  //         $(window).scroll(function () {
  //             //
  //             if ($("#wtFeaturesSectionHealth")[0].getBoundingClientRect().top > 50 && $("#wtFeaturesSectionHealth")[0].getBoundingClientRect().top < 350) {
  //                 $("#wtFeaturesSectionHealth").find(".scroll-fixed-hidden").removeClass("scroll-fixed-hidden").addClass("scroll-fixed");
  //             } else {
  //                 $("#wtFeaturesSectionHealth").find(".scroll-fixed").removeClass("scroll-fixed").addClass("scroll-fixed-hidden");
  //             }
  //
  //             if ($("#wtFeaturesSectionInsurance")[0].getBoundingClientRect().top > 50 && $("#wtFeaturesSectionInsurance")[0].getBoundingClientRect().top < 350) {
  //                 $("#wtFeaturesSectionInsurance").find(".scroll-fixed-hidden").removeClass("scroll-fixed-hidden").addClass("scroll-fixed");
  //             } else {
  //                 $("#wtFeaturesSectionInsurance").find(".scroll-fixed").removeClass("scroll-fixed").addClass("scroll-fixed-hidden");
  //             }
  //
  //             if ($("#wtFeaturesSectionResource")[0].getBoundingClientRect().top > 50 && $("#wtFeaturesSectionResource")[0].getBoundingClientRect().top < 350) {
  //                 $("#wtFeaturesSectionResource").find(".scroll-fixed-hidden").removeClass("scroll-fixed-hidden").addClass("scroll-fixed");
  //             } else {
  //                 $("#wtFeaturesSectionResource").find(".scroll-fixed").removeClass("scroll-fixed").addClass("scroll-fixed-hidden");
  //             }
  //
  //         });
  //      }
  // }

  ActiveLink = e => {
    //console.log("active element---------" + e.target.id);
    if (e.target.id === "login-form-link") {
      this.setState(
        {
          plainLogin: true,
          otpReceived: false,
          regPatient: false,
          registerDoctorScreen: false
        },
        () => {
          $("#login-form")
            .delay(100)
            .fadeIn(100);
          // $("#register-form").fadeOut(100);
          $("#registerDiv").fadeOut(100);
          $("#register-form-link").removeClass("active");
          $("#login-form-link").addClass("active");
          e.preventDefault();
        }
      );
    } else if (e.target.id === "register-form-link") {
      this.setState(
        {
          otpReceived: false,
          plainLogin: false,
          regPatient: true,
          registerDoctorScreen: false
        },
        () => {
          $("#registerDiv")
            .delay(100)
            .fadeIn(100);
          $("#login-form").fadeOut(100);
          $("#login-form-link").removeClass("active");
          $("#register-form-link").addClass("active");
          e.preventDefault();
        }
      );
    }
  };

  changeState = () => {
    this.setState(prevState => ({
      formState: !prevState.formState
    }));
    $(this).addClass("active");
  };

  HandleUserInput = e => {
    // console.log("#########-----" + e.target.name);
    const val = e.target.value;
    const name = e.target.name;
    if (name === "chkLoginWithOtp") {
      //console.log("&&&&&--------" + this.state.chkLoginWithOtp);
      this.setState({
        chkLoginWithOtp: !this.state.chkLoginWithOtp
      });
      return;
    }
    if (name === "txtLoginPassword") {
      this.setState({
        loginWithPassword: !this.state.loginWithPassword
      });
    }

    if (name === "txtMobileNum") {
      for (let i = 0; i < val.length; i++) {
        if (val.charAt(i) < "0" || val.charAt(i) > "9") {
          $("#spnErr_txtMobileNum")
            .text("Enter Valid contact number")
            .css({
              color: "red",
              fontSize: "12px",
              position: "relative",
              top: "0px"
            })
            .show();
        } else if (/\s/g.test(val)) {
          $("#spnErr_txtMobileNum")
            .text("Only numbers are allowed")
            .css({
              color: "red",
              fontSize: "12px",
              position: "relative",
              top: "0px"
            })
            .show();
        } else if (val.length !== 10) {
          $("#spnErr_txtMobileNum")
            .text("Enter 10 digit contact number")
            .css({
              color: "red",
              fontSize: "12px",
              position: "relative",
              top: "0px"
            })
            .show();
        }
      }
      if (isNaN(val)) {
        $("#spnErr_txtMobileNum")
          .text("Please enter valid contact number")
          .css({
            color: "red",
            fontSize: "12px",
            position: "relative",
            top: "0px"
          })
          .show();
      } else if (parseInt(val) < 6666666666) {
        $("#spnErr_txtMobileNum")
          .text("Please enter 10 digit contact number")
          .css({
            color: "red",
            fontSize: "12px",
            position: "relative",
            top: "0px"
          })
          .show();
      } else {
        $("#spnErr_txtMobileNum")
          .text("")
          .hide();
      }
    } else {
      this.setState({ [name]: val }, () => {});
    }
    this.setState({ [name]: val });
  };

  DoLogin = () => {
    this.setState({
      otpReceived: true,
      defaultScreen: false,
      forgotPassword: false,
      plainLogin: false
    });
  };
  forgotPassword = () => {
    this.setState({
      otpReceived: false,
      defaultScreen: false,
      plainLogin: false,
      forgotPassword: true
    });
  };
  ShowDoctorRegisterScreen = () => {
    this.setState({
      registerDoctorScreen: true,
      otpReceived: false,
      plainLogin: false,
      forgotPassword: false,
      regPatient: false
    });
  };
  ShowPatientRegisterScreen = () => {
    this.setState({
      registerDoctorScreen: false,
      otpReceived: false,
      plainLogin: false,
      forgotPassword: false,
      regPatient: true
    });
  };

  DoctorRegisterFormData = () => {
    let form = document.getElementById("Doctor_register_form");
    let data = new FormData(form);
    const that = this;
    // console.log("In submit " + JSON.stringify(data, null, 4));
    if (
      this.state.txtDocFullName !== undefined &&
      this.state.txtDocFullName !== "" &&
      this.state.txtMobileNum !== undefined &&
      this.state.txtMobileNum !== "" &&
      this.state.txtDocPassword !== undefined &&
      this.state.txtDocPassword !== ""
    ) {
      //const that = this;
      axios
        .post(global.localurl + "/api/auth/register", {
          //axios.post('http://wetreat.in/api/auth/register', {
          //axios.post('/api/auth/register', {
          txtUserFullName: this.state.txtDocFullName,
          txtUserMobileNo: this.state.txtMobileNum,
          txtUserPassword: this.state.txtDocPassword,
          txtUserType: "Doctor"
        })
        .then(function(response) {
          console.log("in response" + JSON.stringify(response));

          if (response.data.userentryresponse.value === "SUCCESS") {
            that.setState(
              {
                registerDoctorSuccessMessage:
                  response.data.userentryresponse.message.value,
                otpReceived: true,
                registerDoctorScreen: false
              },
              () => {
                $("#login-form-link").addClass("active");
                $("#register-form-link").removeClass("active");
                
                  setTimeout(() => {
                    that.setState({ registerDoctorSuccessMessage: "" });
                  }, 4000)
                
              }
            );
           
          }
           else {
            if (response.data.userentryresponse.value === "FAILURE") {
             // const that = this;
              that.setState(
                {
                  registerDoctorSuccessMessage:
                    response.data.userentryresponse.message.value
                },
                () => {
                  //alert("***doc failure*****")
                  setTimeout(() => {
                    that.setState({ registerDoctorSuccessMessage: "" });
                  }, 4000)
                }
              );
            }
          }
        })
        .catch(function(error) {
          console.log("In error" + error);
          that.setState({
            registerDoctorFailureMessage: "Please try after some time"
          },()=>{
            setTimeout(() => {
              that.setState({ registerDoctorSuccessMessage: "" });
            }, 4000)
          }
        );
      });
       
    } else {
      this.setState({
        registerDoctorFailureMessage: "All fields are mandatory!"
      },()=>{
        setTimeout(() => {
          that.setState({ registerDoctorFailureMessage: "" });
        }, 4000)
      });
    }
  };

  UserRegisterFormData = () => {
    let form = document.getElementById("PatientRegisterForm");
    let data = new FormData(form);
    // console.log("In submit " + JSON.stringify(data, null, 4));
    const that = this;
    if (
      this.state.txtFullName !== undefined &&
      this.state.txtFullName !== "" &&
      this.state.txtMobileNum !== undefined &&
      this.state.txtMobileNum !== "" &&
      this.state.txtPassword !== undefined &&
      this.state.txtPassword !== ""
    ) {
      // axios.post('http://localhost:3300/api/auth/register', {
      //  alert("url"+global.localurl);
      //  alert("serverurl"+global.serverurl);
      axios
        .post(global.localurl + "/api/auth/register", {
          // axios.post('http://wetreat.in/api/auth/register', {
          //axios.post('/api/auth/register', {
          txtUserFullName: this.state.txtFullName,
          txtUserMobileNo: this.state.txtMobileNum,
          txtUserPassword: this.state.txtPassword,
          txtUserType: "Patient"
        })
        .then(function(response) {
          console.log("in response" + JSON.stringify(response));
          if (response.data.userentryresponse.value === "SUCCESS") {
            //alert("#############" + response.data.userentryresponse.message.value)

            that.setState({
              registerSuccessMessage:
                response.data.userentryresponse.message.value,
              otpReceived: true,
              regPatient: false
            },()=>{
              setTimeout(() => {
                that.setState({ registerSuccessMessage: "" });
              }, 4000)
            });
            
          } else {
            if (response.data.userentryresponse.value === "FAILURE") {
              //alert('in failure')
              //const that = this;
              that.setState(
                {
                  registerFailureMessage:
                    response.data.userentryresponse.message.value
                },
                () => {
                 // alert('^^^^^^^^^^^^^')
                  setTimeout(() => {
                    that.setState({ registerFailureMessage: "" });
                  }, 4000)
                }
              );
            }
          }
        })
        .catch(function(error) {
          console.log("In error" + error);
          this.setState({
            registerFailureMessage: "Please try after some time"
          },()=>{
            setTimeout(() => {
              that.setState({ registerFailureMessage: "" });
            }, 4000)
          });
        });
    } else {
      this.setState({ registerFailureMessage: "All fields are mandatory!" },()=>{
        setTimeout(() => {
          that.setState({ registerFailureMessage: "" });
        }, 4000)
      });
    }
  };

  LogOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    Utility.HandlePageClick(this.props, "home");
  };

  Login = () => {
    //alert('&&&&&&&&&');
    const that= this;
    let bodyFormData = new FormData();
    bodyFormData.set("txtMobileNum", this.state.txtMobileNum);
    if (this.state.chkLoginWithOtp !== false) {
      this.setState({ txtLoginPassword: "" });
      //bodyFormData.set('txtLoginPassword', '');
    } else {
      this.setState({ txtLoginPassword: this.state.txtLoginPassword });
      //bodyFormData.set('txtLoginPassword', this.state.txtLoginPassword);
    }
    bodyFormData.set("chkLoginWithOtp", this.state.chkLoginWithOtp);
    console.log("In login " + JSON.stringify(bodyFormData, null, 4));
    if (
      this.state.txtMobileNum !== undefined &&
      this.state.txtMobileNum !== ""
    ) {
      axios
        .post(global.localurl + "/api/auth/login", {
          // axios.post('/api/auth/login', {
          chkLoginWithOtp: this.state.chkLoginWithOtp,
          txtMobileNum: this.state.txtMobileNum,
          txtLoginPassword: this.state.txtLoginPassword
        })
        .then(response => {

          //console.log("in response" + JSON.stringify(response));
          //console.log('&&&&&&--'+that.state.chkLoginWithOtp +'---type od-----'+typeof that.state.chkLoginWithOtp )

          if (that.state.chkLoginWithOtp === false) {
            if (response.data.loginresponse.rows.length >= 0) {
              sessionStorage.setItem(
                "userData",
                JSON.stringify(response.data.loginresponse.rows[0])
              );
              sessionStorage.setItem(
                "userfullname",
                response.data.loginresponse.rows[0].fullname
              );
              sessionStorage.setItem(
                "user_id",
                response.data.loginresponse.rows[0]._id
              );
              sessionStorage.setItem(
                "user_type",
                response.data.loginresponse.rows[0].user_type
              );
              // if(sessionStorage.length >0){
              //     global.isLogin ="true";
              // }
              this.setState(
                {
                  loginMessage: "Login Successful",
                  failureMessage: ""
                },
                () => {
                  if (sessionStorage.getItem("user_type") === "Doctor") {
                    this.setState({ showLogin: false }, () => {
                      if (
                        response.data.loginresponse.rows[0].approved_status ===
                        true
                      ) {
                        Utility.HandlePageClick(this.props, "doctor/dashboard");
                      } else {
                        Utility.HandlePageClick(this.props, "doctor/profile");
                      }
                    });
                  } else if (
                    sessionStorage.getItem("user_type") === "Patient"
                  ) {
                    // alert("patient login successfull")

                    this.setState(
                      { showLogin: false, loginMessage: "" },
                      () => {
                        Utility.HandlePageClick(this.props, "user/dashboard");
                      }
                    );
                    //Utility.HandlePageClick(this.props,'home')
                  }
                }
              );
            } else if (response.data.loginresponse.value === "SUCCESS") {
              this.setState({
                failureMessage: response.data.loginresponse.message.value
              });
            } else {
              this.setState({
                failureMessage: "Please enter registerd contact number"
              });
            }
          } else {
            if (response.data.otpstatus.value === "SUCCESS") {
              that.DoLogin();
            } else if (response.data.otpstatus.value === "FAILURE") {
              // alert('####' + response.data.otpstatus.message.value);
              this.setState({
                failureMessage: response.data.otpstatus.message.value,
                loginMessage: ""
              });
            }
          }
        })
        .catch(function(error) {
          //console.log("In error" + error);
          that.setState({ failureMessage: "Please try after some time" });
        });
    } else {
      this.setState({ failureMessage: "All fields are mandatory!" });
    }
  };

  loginWithOtp = () => {
    //alert("@@@@@@@@@@")
    let form = document.getElementById("otpReceived-form");
    let data = new FormData(form);
    // console.log("In submit " + JSON.stringify(data, null, 4));
    if (
      this.state.txtMobileNum !== undefined &&
      this.state.txtMobileNum !== ""
    ) {
      const that = this;
      axios
        .post(global.localurl + "/api/auth/login", {
          //axios.post('http://wetreat.in/api/auth/login', {

          //axios.post('/api/auth/login', {
          txtMobileNum: this.state.txtMobileNum,
          txtLoginWithOtp: this.state.txtLoginWithOtp,
          chkLoginWithOtp: true
        })
        .then(response => {
          //console.log("in response" + JSON.stringify(response));

          if (response.data.loginresponse.rows.length >= 0) {
            sessionStorage.setItem(
              "userData",
              JSON.stringify(response.data.loginresponse.rows[0])
            );
            sessionStorage.setItem(
              "userfullname",
              response.data.loginresponse.rows[0].fullname
            );
            sessionStorage.setItem(
              "user_id",
              response.data.loginresponse.rows[0]._id
            );
            sessionStorage.setItem(
              "user_type",
              response.data.loginresponse.rows[0].user_type
            );
            that.setState(
              {
                otpSuccessMessage: "Login Successful",
                otpFailureMessage: ""
              },
              () => {
                if (sessionStorage.getItem("user_type") === "Doctor") {
                  Utility.HandlePageClick(this.props, "doctor/profile");
                } else if (sessionStorage.getItem("user_type") === "Patient") {
                  Utility.HandlePageClick(this.props, "user/dashboard");
                }
              }
            );
          } else if (response.data.loginresponse.value === "SUCCESS") {
            that.setState(
              {
                otpFailureMessage: response.data.loginresponse.message.value
              },
              () => {
                if (sessionStorage.getItem("user_type") === "Doctor") {
                  Utility.HandlePageClick(this.props, "doctor/profile");
                } else if (sessionStorage.getItem("user_type") === "Patient") {
                  Utility.HandlePageClick(this.props, "user/dashboard");
                }
              }
            );
          } else {
            that.setState({
              otpFailureMessage: "Please enter registerd contact number"
            });
          }
        })

        .catch(function(error) {
          console.log("In error" + error);
          that.setState({ failureMessage: "Please try after some time" });
        });
    } else {
      this.setState({ failureMessage: "All fields are mandatory" });
    }
  };

  CheckOtp = () => {
    let form = document.getElementById("otpReceived-form");
    let data = new FormData(form);

    if (
      this.state.txtMobileNum !== undefined &&
      this.state.txtMobileNum !== ""
    ) {
      const that = this;
      //axios.post('http://localhost:3300/api/auth/login', {
      axios
        .post(global.localurl + "/api/auth/verifyotp", {
          txtMobileNum: this.state.txtMobileNum,
          txtLoginWithOtp: this.state.txtLoginWithOtp,
          chkLoginWithOtp: true
        })
        .then(response => {
          if (response.data.otpstatus.value === "SUCCESS") {
            //alert("#####")
            that.setState({
              otpSuccessMessage: response.data.otpstatus.message.value,
              otpFailureMessage: ""
            });
            // that.DoLogin();
          } else if (response.data.otpstatus.value === "FAILURE") {
            // alert('####' + response.data.otpstatus.message.value);
            that.setState({
              failureMessage: response.data.otpstatus.message.value,
              otpSuccessMessage: ""
            });
          } else {
            that.setState({
              failureMessage: "Please enter registerd contact number"
            });
          }
        })

        .catch(function(error) {
          console.log("In error" + error);
          that.setState({ failureMessage: "Please try after some time" });
        });
    } else {
      this.setState({ failureMessage: "All fields are mandatory" });
    }
  };

  ResendOtp = () => {
    let form = document.getElementById("otpReceived-form");
    let data = new FormData(form);

    if (
      this.state.txtMobileNum !== undefined &&
      this.state.txtMobileNum !== ""
    ) {
      const that = this;
      axios
        .post(global.localurl + "/api/auth/resendotp", {
          //axios.post('/api/auth/resendotp', {
          txtMobileNum: this.state.txtMobileNum,
          txtLoginWithOtp: this.state.txtLoginWithOtp,
          chkLoginWithOtp: true
        })
        .then(response => {
          if (response.data.status === "SUCCESS") {
            //alert("#####")
            that.setState({
              otpSuccessMessage: response.data.otpstatus.message.value,
              otpFailureMessage: ""
            });
            // that.DoLogin();
          } else if (response.data.otpstatus.value === "FAILURE") {
            // alert('####' + response.data.otpstatus.message.value);
            that.setState({
              failureMessage: response.data.otpstatus.message.value,
              otpSuccessMessage: ""
            });
          } else {
            that.setState({
              failureMessage: "Please enter registerd contact number"
            });
          }
        })

        .catch(function(error) {
          console.log("In error" + error);
          that.setState({ failureMessage: "Please try after some time" });
        });
    } else {
      this.setState({ failureMessage: "All fields are mandatory" });
    }
  };

  ForgotPassordSubmit = () => {
    // this.setState({chkLoginWithOtp:true})
    if (
      this.state.txtMobileNum !== undefined &&
      this.state.txtMobileNum !== ""
    ) {
      axios
        .post(global.localurl + "/api/auth/login", {
          // axios.post('/api/auth/login', {
          chkLoginWithOtp: true,
          txtMobileNum: this.state.txtMobileNum,
          txtLoginPassword: ""
        })
        .then(response => {
          const that = this;
          if (response.data.otpstatus.value === "SUCCESS") {
            that.DoLogin();
          } else if (response.data.otpstatus.value === "FAILURE") {
            // alert('####' + response.data.otpstatus.message.value);
            this.setState({
              failureMessage: response.data.otpstatus.message.value,
              successMessage: ""
            });
          }
        })
        .catch(function(error) {
          //console.log("In error" + error);
          this.setState({ failureMessage: "Please try after some time" });
        });
    } else {
      this.setState({ failureMessage: "All fields are mandatory!" });
    }
  };

  showSearchPopUp = () => {
    this.setState({ showSearchPopUp: !this.state.showSearchPopUp });
  };

  updateNumber = () => {
    this.setState({ editNumber: !this.state.editNumber });
  };

  showHeader = () => {
    this.setState({ showHeader: false }, () => {
      // Utility.HandlePageClick(this.props,'searchdata');
    });
  };

  render() {
    return (
      <div>
        
          <Header
            showLoginForm={this.showLoginForm}
            LogOut={this.LogOut}
            {...this.props}
          />
       
        {/****Master Container****/}
        <this.props.children
          masterState={this.state}
          showLoginForm={this.showLoginForm}
          showHeader={this.showHeader}
          {...this.props}
        />
        

        {/*Footer*/}
        <Footer {...this.props} />
      </div>
    );
  }
}
