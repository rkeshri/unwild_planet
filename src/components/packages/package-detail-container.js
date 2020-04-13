import React, { Component } from "react";
import global from "../../global";
import axios from "axios";
import PackageDetailComponent from "./package-detail-component";
import $ from "jquery";
import "./package-detail.css";

export default class PackageDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.itinaryDayModal = [false, false, false, false];
    this.state = {
      package_status: true,
      availability_status: false,
      itinaryDayModal: [false, false, false, false],
    };
  }

  componentDidMount = () => {
    let package_id = this.props.match.params.id;
    this.GetPackageDetailData(package_id);
    //display card on scroll
    $(window).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 800) {
        $(".bottomMenu").fadeIn();
      } else {
        $(".bottomMenu").fadeOut();
      }
    });
  };

  handleModalClose = (num) => {
    //alert("===" + num)this.set
    const that = this;
    // this.setState({ itinaryDayModal: this.itinaryDayModal }, () => {
      const newItems = [...this.state.itinaryDayModal];
      console.log("=====before setting modal state" + JSON.stringify(newItems));
      newItems[num] = !newItems[num];
      console.log("=====after setting modal state" + JSON.stringify(newItems));
      that.setState({ itinaryDayModal: newItems });
    // });
  };

  GetPackageDetailData = (package_id) => {
    const that = this;
    axios
      .get(global.url + "/package_details/" + package_id)
      .then((response) => {
        if (response.data != []) {
          // for (let i = 0; i < response.data.itinerary_details.length; i++) {

          //   this.itinaryDayModal.push(false);
          // }
          this.setState({ package_details: response.data }, () => {
            //  console.log("after getting data"+JSON.stringify(this.state.itinaryDayModal,null,4))
          });
        }
      })

      .catch(function (error) {
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
        <PackageDetailComponent
          packageState={this.state}
          showAvailability={this.showAvailability}
          handleModalClose={this.handleModalClose}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}
