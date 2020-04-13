import React, { Component } from "../../node_modules/react";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import CardComponent from "./card-component";

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    // const settings = {
    //   dots: true,
    //    infinite: true,
    //    speed: 50000,
    //   slidesToShow: 1,
    //   slidesToScroll: 1

    // };

    

    return (
      <div
        style={{
          // margin: "0 auto",
          padding: "40px",
          // width: "100%",
          background: "#ccc",
        }}
      >
        <Slider
        ref={c => (this.slider = c)}
          dots={true}
          slidesToShow={2}
          slidesToScroll={1}
          autoplay={false}
          autoplaySpeed={4000}

        >
          {/* {...settings} */}

          {/* <CardComponent data={this.props.data}/> */}
          {/* {this.props.data !== [] ? ( */}
            {this.props.data.map((item,index) => {
              return (
                <div key={item.id} style={{display: 'inline-block', width: 500}}>
                  <h2>{item.title}</h2>
                </div>
                // <div className="single_destination" key={index}>
                //   <div className="thumb">
                //     <img src={item.images[0].url} alt="" />
                //   </div>
                //   <div className="content">
                //     <p className="d-flex align-items-center">
                //       {item.title} <a href="#"> Rating- {item.rating}</a>{" "}
                //     </p>
                //   </div>

                //   <p className="d-flex align-items-center">
                //     days- {item.days} <a href="#"> Price- {item.price}</a>{" "}
                //   </p>
                // </div>
              );
            })}
          {/* // ) : (
          //   <h1>No Packages found</h1>
          // )} */}
          {/* <div>
          <h3 style={{color:'#000',textAlign:"center"}}>Slider 1</h3>
        </div>
        <div>
          <h3 style={{color:'#000',textAlign:"center"}}> Slider 2</h3>
        </div>
        <div>
          <h3 style={{color:'#000',textAlign:"center"}}> Slider 3</h3>
        </div> */}
        {/* <div>
          <h3 style={{color:'#000',textAlign:"center"}}> Slider 4</h3>
        </div>
        <div>
          <h3 style={{color:'#000',textAlign:"center"}}>Slider 5</h3>
        </div>
        <div>
          <h3 style={{color:'#000',textAlign:"center"}}>Slider 6</h3>
        </div> */}
        </Slider>
      </div>
    );
  }
}
