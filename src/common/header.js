import React, { Component } from "../../node_modules/react";
import Utility from "../utility/index";
import $ from "jquery";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialIconDisplay: false,
    };
  }

  componentDidMount = () => {
    const that = this;
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();     
      // if (scroll >= 500) {
      //   // $(".social_links").addClass("social-icon-bar");
      //   that.setState({ socialIconDisplay: true });
      // } else {
      //   // $(".social_links").removeClass("social-icon-bar");
      //   that.setState({ socialIconDisplay: false });
      // }

      if ($(window).width() > 700 && scroll >= 500) {
    
        that.setState({ socialIconDisplay: true });
      }
      else{
        that.setState({ socialIconDisplay: false });
      }

      $(window).resize(function () {
        if ($(window).width() > 700 && scroll >= 500) {
          that.setState({ socialIconDisplay: true });
        }
        else{
          that.setState({ socialIconDisplay: false }); 
        }
      });
    });

    

    
  };
  render() {
    return (
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <a
                        onClick={() =>
                          Utility.HandlePageClick(this.props, "home")
                        }
                      >
                        <img
                          src={require("../assets/img/unwild_planet_logo_Brown.svg")}
                          alt="Unwild Planet Logo"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a
                              className="active"
                              onClick={() =>
                                Utility.HandlePageClick(this.props, "home")
                              }
                            >
                              home
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() =>
                                Utility.HandlePageClick(this.props, "about")
                              }
                            >
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              onClick={() =>
                                Utility.HandlePageClick(this.props, "/")
                              }
                            >
                              Destination
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              onClick={() =>
                                Utility.HandlePageClick(this.props, "/")
                              }
                            >
                              Blog
                            </a>
                          </li>
                          {/* <li>
                            <a href="#">
                              blog <i className="ti-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a
                                  onClick={() =>
                                    Utility.HandlePageClick(
                                      this.props,
                                      "/"
                                    )
                                  }
                                >
                                  blog
                                </a>
                              </li>
                              <li>
                                <a
                                  onClick={() =>
                                    Utility.HandlePageClick(
                                      this.props,
                                      "/"
                                    )
                                  }
                                >
                                  single-blog
                                </a>
                              </li>
                            </ul>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                    <div className="social_wrap d-flex align-items-center justify-content-end">
                      <div className="number">
                        <p>
                          {" "}
                          <i className="fa fa-phone"></i>
                        </p>
                      </div>
                      <div className="social_links d-none d-xl-block">
                        <ul>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fa fa-instagram"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fa fa-linkedin"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fa fa-facebook"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fa fa-google-plus"></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="seach_icon">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      href="#"
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div> */}
                  {/* <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div> */}
                </div>
              </div>
            </div>
            {this.state.socialIconDisplay === true ? (
              <div class="social-icon-bar">
                <a href="#" class="facebook">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#" class="twitter">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#" class="google">
                  <i class="fa fa-google"></i>
                </a>
                <a href="#" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="#" class="youtube">
                  <i class="fa fa-youtube"></i>
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
    );
  }
}
