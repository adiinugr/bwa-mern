import React from "react";
import propTypes from "prop-types";

import "./index.scss";

function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  let star = [];
  let leftPos = 0;

  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={i}
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`decimal star`}
        style={{
          left: leftPos,
          height: height,
          width: width * decimals - spacing
        }}
      ></div>
    );
  }

  let starPlaceholder = [];

  for (let i = 0; i < 5; i++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={i}
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing
        }}
      ></div>
    );
  }

  return (
    <div className={["stars", className].join(" ")} style={{ height: height }}>
      {starPlaceholder}
      {star}
    </div>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number
};

export default Star;
