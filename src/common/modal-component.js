import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import tooltip from "react-bootstrap/Tooltip";

const ModalComponent = (props) => {
  console.log("props in modal===" + JSON.stringify(props));
  return (
    <React.Fragment>
      {/* {props !== [] ? (
        props.data.map((item) => {
          return (          */}

      <Modal.Header closeButton>
        <p>{props.data.day}</p><br/>
        <h4>{props.data.title}</h4>
        {/* <Modal.Title>{props.data.title}</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <p>{props.data.description}</p>
        <hr />
        {props.data.images.map((item) => {
          return (
            <React.Fragment>
              <img src={item.url} height={200} width={300} responsive  /><hr/>
            </React.Fragment>
          );
        })}
        <h4>What's Included</h4>
        {props.data.what_includes.map((item, key) => {
          return (
            <button type="button" className="btn col-xl-4 col-md-4 amenities">
              {item.amenities}
            </button>
          );
        })}
      </Modal.Body>
    </React.Fragment>
  );
};

export default ModalComponent;
