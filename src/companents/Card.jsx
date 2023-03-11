import React from "react";
import "./ApiPost1.css";

function Card(props) {
  return (
    <>
      <div className="card-item">
        <div className="card">
          <div className="img-holder">
            <img src={props.imgSrc} alt="" />
          </div>
          <div className="card-description">
            <h2>
              {props.firstName} {props.lastName}
            </h2>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
