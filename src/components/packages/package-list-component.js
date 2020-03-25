import React from "react";
import "./package-detail.css";

const PackageListComponent = props => {
  return (
    <div className="popular_places_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="filter_result_wrap">
              <h3>Filter Result</h3>
              <div className="filter_bordered">
                <div className="filter_inner">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* <div className="single_select">
                                            <select>
                                                <option data-display="Country">Country</option>
                                                <option value="1">Africa</option>
                                                <option value="2">canada</option>
                                                <option value="4">USA</option>
                                              </select>
                                        </div> */}
                      <div class="form-group">
                        <select class="form-control filter-select">
                          <option data-display="Country">Country</option>
                          <option value="1">Africa</option>
                          <option value="2">canada</option>
                          <option value="4">USA</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      {/* <div className="single_select">
                        <select>
                          <option data-display="Travel type">
                            Travel type
                          </option>
                          <option value="1">advance</option>
                          <option value="2">advance</option>
                          <option value="4">premium</option>
                        </select>
                      </div> */}
                      <div class="form-group">
                        <select class="form-control filter-select">
                          <option data-display="Travel type">
                            Travel type
                          </option>
                          <option value="1">advance</option>
                          <option value="2">advance</option>
                          <option value="4">premium</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="range_slider_wrap">
                        <span className="range">Prise range</span>
                        <div id="slider-range"></div>
                        <p>
                          <input
                            type="text"
                            id="amount"
                            readonly
                            style={{
                              border: "0",
                              color: "#7A838B",
                              fontWeight: "400"
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="reset_btn">
                  <button className="boxed-btn4" type="submit">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img src="img/place/1.png" alt="" />
                    <a href="#" className="prise">
                      $500
                    </a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html">
                      <h3>California</h3>
                    </a>
                    <p>United State of America</p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <a href="#">(20 Review)</a>
                      </span>
                      <div className="days">
                        <i className="fa fa-clock-o"></i>
                        <a href="#">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img src="img/place/2.png" alt="" />
                    <a href="#" className="prise">
                      $500
                    </a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html">
                      <h3>Korola Megna</h3>
                    </a>
                    <p>United State of America</p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <a href="#">(20 Review)</a>
                      </span>
                      <div className="days">
                        <i className="fa fa-clock-o"></i>
                        <a href="#">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img src="img/place/3.png" alt="" />
                    <a href="#" className="prise">
                      $500
                    </a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html">
                      <h3>London</h3>
                    </a>
                    <p>United State of America</p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <a href="#">(20 Review)</a>
                      </span>
                      <div className="days">
                        <i className="fa fa-clock-o"></i>
                        <a href="#">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img src="img/place/4.png" alt="" />
                    <a href="#" className="prise">
                      $500
                    </a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html">
                      <h3>Miami Beach</h3>
                    </a>
                    <p>United State of America</p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <a href="#">(20 Review)</a>
                      </span>
                      <div className="days">
                        <i className="fa fa-clock-o"></i>
                        <a href="#">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img src="img/place/5.png" alt="" />
                    <a href="#" className="prise">
                      $500
                    </a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html">
                      <h3>California</h3>
                    </a>
                    <p>United State of America</p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <a href="#">(20 Review)</a>
                      </span>
                      <div className="days">
                        <i className="fa fa-clock-o"></i>
                        <a href="#">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img src="img/place/6.png" alt="" />
                    <a href="#" className="prise">
                      $500
                    </a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html">
                      <h3>Saintmartine Iceland</h3>
                    </a>
                    <p>United State of America</p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <a href="#">(20 Review)</a>
                      </span>
                      <div className="days">
                        <i className="fa fa-clock-o"></i>
                        <a href="#">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="more_place_btn text-center">
                  <a className="boxed-btn4" href="#">
                    More Places
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageListComponent;
