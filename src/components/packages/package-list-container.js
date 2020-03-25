import React, { Component } from "react";
import global from "../../global";
import axios from "axios";
import SliderComponent from "../home/slider_component";
import PackageListComponent from "./package-list-component";
import $ from "jquery";
import "./package-detail.css";

export default class PackageListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      package_status: true,
      availability_status: false
    };
  }

  componentDidMount = () => {
    // let package_id = this.props.match.params.id;
    // this.GetPackageDetailData(package_id);
    // //display card on scroll
    // $(window).scroll(function() {
    //   var y = $(this).scrollTop();
    //   if (y > 800 ) {
    //     $(".bottomMenu").fadeIn();
    //   } else {
    //     $(".bottomMenu").fadeOut();
    //   }
    // });
  };

  GetPackageDetailData = package_id => {
    const that = this;
    axios
      .get(global.url + "/package_details/" + package_id)
      .then(response => {
        if (response.data != []) {
          this.setState({ package_details: response.data }, () => {
            console.log(
              "after getting data" +
                JSON.stringify(this.state.package_details, null, 4)
            );
          });
        }
      })

      .catch(function(error) {
        console.log("In error" + error);
        that.setState({ failureMessage: "Please try after some time" });
      });
  };

  showAvailability = () => {
    this.setState({ package_status: false, availability_status: true });
  };

  render() {
    return (
      <React.Fragment>
        <SliderComponent />
        <PackageListComponent
          packageState={this.state}
          showAvailability={this.showAvailability}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}
