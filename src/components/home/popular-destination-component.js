import React, { Component } from "react";
import CardComponent from "../../common/card-component";
import global from "../../global";
import axios from "axios";

export default class PopularDestinationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: []
    };
  }

  componentDidMount = () => {
    this.GetPackagesData();
  };

  GetPackagesData = () => {
    const that = this;
    axios
      .get(global.url + "/packages")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ packages: response.data });
        }
      })

      .catch(function(error) {
        console.log("In error" + error);
        that.setState({ failureMessage: "Please try after some time" });
      });
  };

  render() {
    return (
      <div className="popular_destination_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb_70">
                <h3>{this.props.title}</h3>
                <p>
                  Suffered alteration in some form, by injected humour or good
                  day randomised booth anim 8-bit hella wolf moon beard words.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            
            <CardComponent data={this.state.packages} />
            
           
          </div>
        </div>
      </div>
    );
  }
}
