import React from "react";
import "./style.css";

function Nav(props) {
  return <nav class="topnav">{props.children}</nav>;
}

export default Nav;