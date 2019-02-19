import React, { Component, Fragment } from "react";
import "bootstrap";
import Head from "./Head/Head";
import About from "./About/About";
import Project from "./Project/Project";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Head />
        <About />
        {/* <Project /> */}
      </Fragment>
    );
  }
}
