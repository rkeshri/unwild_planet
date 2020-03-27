import React, { Component } from "../../node_modules/react";
import Utility from "../utility/index";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div class="header-area ">
          <div id="sticky-header" class="main-header-area">
            <div class="container-fluid">
              <div class="header_bottom_border">
                <div class="row align-items-center">
                  <div class="col-xl-2 col-lg-2">
                    <div class="logo">
                      <a
                        onClick={() =>
                          Utility.HandlePageClick(
                            this.props,
                            "home"
                          )
                        }
                      >
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <div class="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a
                              class="active"
                              onClick={() =>
                                Utility.HandlePageClick(
                                  this.props,
                                  "home"
                                )
                              }
                            >
                              home
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() =>
                                Utility.HandlePageClick(
                                  this.props,
                                  "about"
                                )
                              }
                            >
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              class=""
                              onClick={() =>
                                Utility.HandlePageClick(
                                  this.props,
                                  "/"
                                )
                              }
                            >
                              Destination
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              pages <i class="ti-angle-down"></i>
                            </a>
                            <ul class="submenu">
                              <li>
                                <a href="destination_details.html">
                                  Destinations details
                                </a>
                              </li>
                              <li>
                                <a href="elements.html">elements</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              blog <i class="ti-angle-down"></i>
                            </a>
                            <ul class="submenu">
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
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 d-none d-lg-block">
                    <div class="social_wrap d-flex align-items-center justify-content-end">
                      <div class="number">
                        <p>
                          {" "}
                          <i class="fa fa-phone"></i> 10(256)-928 256
                        </p>
                      </div>
                      <div class="social_links d-none d-xl-block">
                        <ul>
                          <li>
                            <a href="#">
                              {" "}
                              <i class="fa fa-instagram"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i class="fa fa-linkedin"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i class="fa fa-facebook"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i class="fa fa-google-plus"></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="seach_icon">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      href="#"
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                  <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
