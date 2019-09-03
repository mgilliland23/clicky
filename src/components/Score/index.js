import React from "react";
import "./style.css";

function Score(props) {
  return (
    <div className="scoreBanner">
      <h4>Score: {props.score}</h4>
      <h4>High Score: {props.highScore}</h4>
    </div>
  );
}

export default Score;
