import React from "react";
//import Slider from "react-slick";





const CardComponent = props => { 
  //console.log("props==="+JSON.stringify(props))
  return (
    <React.Fragment>
      {props !== [] ? (
        props.data.map((item) => {
          return (         
          
              <div className="single_destination">
                <div className="thumb">
                  <img src={item.images[0].url} alt="" />
                </div>
                <div className="content">
                  <p className="d-flex align-items-center">
                    {item.title} <a href="#"> Rating- {item.rating}</a>{" "}
                  </p>
                </div>
               
                  <p className="d-flex align-items-center">
                   days- {item.days} <a href="#"> Price- {item.price}</a>{" "}
                  </p>
                
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
