import React from "react";

import "./AmazingNumberButton.css";
function AmazingNumberButton(props) {
  return (
    <button
      className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </button>
  );
}

export default AmazingNumberButton;
