import React, { Component } from "../../node_modules/react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Utility from "../utility/index";

const options = {
  autoplay: true,
  loop: true,
  nav: true,
  item: 5,
};
export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToPackageDetail = (id) => {
    Utility.HandlePageClick(this.props, "packages/context=" + id);
  };

  render() {
    console.log("in carousel======" + JSON.stringify(this.props, null, 4));

    return (
      <div className="container-fluid">
        {this.props.data.length > 0 && (
          <OwlCarousel className="owl-theme" margin={5} {...options} nav>
            {this.props.data.map((item) => {
              return (
                // <div className="item">
                //   <img className="img" src={item.images[0].url} alt="" />
                //   <h4>{item.title}</h4>
                // </div>

                <div className="card zoomin" onClick={() =>
                  Utility.HandlePageClick(
                    this.props,
                    "packages/context=" + item.id
                  )
                }>
                  <img
                    src={item.images[0].url}
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                  <div className="container">
                    <h4>
                      <b>{item.title}</b>
                    </h4>
                    {/* <p>Architect & Engineer</p> */}
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        )}
      </div>
    );
  }
}
