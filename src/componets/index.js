import React, { Component } from "react";
import "bootstrap";
import Head from "./Head/Head";
import About from "./About/About";
import Project from "./Project/Project";
import Skils from "./Skils/Skils";
import "./sass/style.scss";
// import Ico from "./ico";
export default class index extends Component {
  spisner = () => {
    return (
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
  render() {
    return (
      <React.Suspense fallback={this.spisner}>
        <div className="body">
          <Head />
          <About />
          <Skils />
          <Project />
          {/* <Ico /> */}
        </div>
      </React.Suspense>
    );
  }
}
