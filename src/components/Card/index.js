import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div
        className="img-container"
        onClick={() => props.handleClick(props.id)}
      >
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
