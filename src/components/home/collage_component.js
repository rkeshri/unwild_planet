import React, { Component } from "react";
import "./collage_component.css";
import axios from "axios";
import Utility from "../../utility/index";

export default class CollageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { gallaryData: [] };
  }

  componentDidMount = () => {
    this.GetPackagesData();
  };

  GetPackagesData = () => {
    const that = this;
    axios
      .get(global.url + "/packages")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({ gallaryData: response.data });
        }
      })

      .catch(function (error) {
        console.log("In error" + error);
        that.setState({ failureMessage: "Please try after some time" });
      });
  };

  goToPackageDetail = (id) => {
    Utility.HandlePageClick(this.props, "packages/context=" + id);
  };

  render() {
    return (
      <div className="container-fluid">
        {/* <ul class="gallery_box"> */}
        {/* <div className="row"> */}
          {this.state.gallaryData !== [] ? (
            this.state.gallaryData.map((item, key) => {
              return (
                // <li>
                key == 0 ? (
                  <div className="col-md-6 mb_20  zoomin">
                    <a
                      onClick={() =>
                        Utility.HandlePageClick(
                          this.props,
                          "packages/context=" + item.id
                        )
                      }
                    >
                      <img
                        src={item.images[0].url}
                        className="responsive"
                        width="100%"
                        height="100%"
                      />
                      {/* <div class="box_data"> */}
                      <div className="bottom-part">
                        {/* <span className="card_txt">{item.title}</span> */}
                        <span>{item.title}</span>
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="col-md-3 mb_20  zoomin">
                    {/* <div className="row">
                      <div className="col-md-6 mb_20"> */}
                        <a
                          onClick={() =>
                            Utility.HandlePageClick(
                              this.props,
                              "packages/context=" + item.id
                            )
                          }
                        >
                          <img
                            src={item.images[0].url}
                            className="responsive"
                            width="100%"
                            height="100%"
                          />
                          {/* <div class="box_data"> */}
                          <div className="bottom-part">
                            <span>{item.title}</span>
                          </div>
                        </a>
                      {/* </div>
                    </div> */}
                  </div>
                )
                // </li>
              );
            })
          ) : (
            <h1>No Packages found</h1>
          )}
          {/* </ul> */}
        {/* </div> */}
      </div>
    );
  }
}
