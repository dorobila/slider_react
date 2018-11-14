import React, { Component } from "react";
import "./Styles/Nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav-container">
        <div className="navbar area">
          <a href="#" className="brand">
            Brand
          </a>
          <nav role="navigation" id="navigation" className="list">
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">Testimonials</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
