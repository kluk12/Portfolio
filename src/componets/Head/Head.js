import React, { Component } from "react";

// import "bootstrap";
import "./Head.scss";

class Head extends Component {
  render() {
    return (
      <section id="head">
        <div id="head">
          <div className="text slide-top">
            <h1 className="imie">Szymon Kluk</h1>
            <p className="h5 secondary">Junior Front-End Developer</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Head;
