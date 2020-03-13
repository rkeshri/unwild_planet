import React from "react";

const CardComponent = props => {
  // alert("in function=====" + JSON.stringify(props, null, 4));
  return (
    <React.Fragment>
      {props !== [] ? (
        props.data.map((item, key) => {
          return (
            <div className="col-lg-4 col-md-6">
              <div className="single_destination">
                <div className="thumb">
                  <img src={item.images[0].url} alt="" />
                </div>
                <div className="content">
                  <p className="d-flex align-items-center">
                    {item.title} <a href="#"> Rating- {item.rating}</a>{" "}
                  </p>
                </div>
                {/* <div className="content"> */}
                  <p className="d-flex align-items-center">
                   days- {item.days} <a href="#"> Price- {item.price}</a>{" "}
                  </p>
                {/* </div> */}
              </div>
            </div>
          );
        })
      ) : (
        <h1>No Packages found</h1>
      )}
    </React.Fragment>
  );
};

export default CardComponent;
