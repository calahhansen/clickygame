import React from "react";
import "./style.css";

function Jumbo(props) {
  return <div className="jumbotron">{props.children}</div>;
}

export default Jumbo;