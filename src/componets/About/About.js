import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="slide-left2">
        <div className="container">
          <div className=" justify-content-md-center">
            <div className="col-12">
              <p className="h5">O mnie</p>
            </div>
            <div className="col" />
            <div className="col-6">
              <p className="lead o">
                We help businesses grow, launch products and gain a competitive
                advantage in today's digital-led world.
              </p>
            </div>
            <div className="col" />
          </div>
        </div>
      </section>
    );
  }
}
