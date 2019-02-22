/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./card2.scss";
// import card2 from "./card2";
import Img from "./../img/favorit.png";

export default class card2 extends Component {
  render() {
    return (
      <div className="box">
        <div className="imgbx">
          <img className="img" src={Img} />
        </div>
        <ul className="social-icon">
          <li>
            <a href={null}>
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={null}>
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>
        </ul>{" "}
        <div className="details">
          <h2>Somasdasdmsapdm asdmsa;da</h2>
        </div>
      </div>
    );
  }
}
