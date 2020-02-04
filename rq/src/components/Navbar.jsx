import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div id="topNav">
        <Link className="menuLink">Home</Link>
        <Link className="menuLink">Contact</Link>
      </div>
    );
  }
}

export default Navbar;
