import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "bootstrap";
import "./Head.scss";
import Prokect from "./../Project/Project";
import About from "./../About/About";
class Head extends Component {
  render() {
    return (
      <section id="head">
        <div id="head">
          <div className="text slide-top">
            <h1
              className="imie"
              // onClick={() => {
              //   window.scroll({ top: 2500, left: 0, behavior: "smooth" });
              // }}
            >
              Szymon Kluk
            </h1>
            <p className="h5 secondary">Junior Front-End Developer</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Head;
