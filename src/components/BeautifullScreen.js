import React from "react";

const BeautifullScreen = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <div>{props.calcul}</div>
      <div>{props.resultat}</div>
    </div>
  );
};

export default BeautifullScreen;
