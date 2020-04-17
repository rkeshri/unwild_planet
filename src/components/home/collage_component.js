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

  goToPackageDetail=(id)=>{
    Utility.HandlePageClick(
      this.props,
      "packages/context="+id
    )
  }

  render() {
    return (
      <div className="container">
       
        <ul class="gallery_box">
          {this.state.gallaryData !== [] ? (
            this.state.gallaryData.map((item) => {
              return (
                <li>
                  <a  onClick={() => Utility.HandlePageClick(this.props,  "packages/context="+item.id)}>
                    <img src={item.images[0].url} className="responsive" />
                    <div class="box_data">
                      <span>{item.title}</span>
                    </div>
                  </a>
                </li>
              );
            })
          ) : (
            <h1>No Packages found</h1>
          )}
        </ul>
      </div>
    );
  }
}
