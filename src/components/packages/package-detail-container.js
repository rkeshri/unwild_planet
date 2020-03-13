import React, { Component } from "react";
import global from "../../global";
import axios from "axios";
import PackageDetailComponent from "./package-detail-component";

export default class PackageDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      package_details:[]
    };
  }

  componentDidMount = () => {
    let package_id = this.props.match.params.id;
    this.GetPackageDetailData(package_id);
  };

  GetPackageDetailData = (package_id) => {
    const that = this;
    axios
      .get(global.url + "/package_details/"+package_id)
      .then(response => {
        if (response.data !=[]) {
          this.setState({ package_details: response.data });
        }
      })

      .catch(function(error) {
        console.log("In error" + error);
        that.setState({ failureMessage: "Please try after some time" });
      });
  };
  render() {
    return (
      <React.Fragment>
        <PackageDetailComponent package_details={this.state.package_details} />
      </React.Fragment>
    );
  }
}
