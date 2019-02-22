import React, { Component, Fragment } from "react";
import "bootstrap";
import Head from "./Head/Head";
import About from "./About/About";
import Project from "./Project/Project";
import Ico from "./ico";
import Card2 from "./Card/card2";
import Car from "./Card/car";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Head />
        <About />
        <div style={{ color: "#ffffff", height: "500px", width: "100vw" }} />
        <Project />

        {/* <Ico? /> */}
        {/* <Card2 /> */}
        {/* <Car /> */}
      </Fragment>
    );
  }
}
