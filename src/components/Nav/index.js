import React from "react";
import "./style.css";

function Nav(props) {
  return <nav className="topnav">{props.children}</nav>;
}

export default Nav;