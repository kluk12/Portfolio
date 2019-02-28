/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./card2.scss";
// import "./css.css";
// import card2 from "./card2";
import Img from "./../img/favorit.png";

export default class card2 extends Component {
  render() {
    const { img, title, post, git, link } = this.props;
    return (
      <div className="box">
        <div className="imgbx">
          <img className="img" src={img} alt={title} />
        </div>
        <ul className="social-icon">
          <li>
            <a href={git ? git : null}>
              <i className="fab fa-github-square r" />
            </a>
          </li>
          {link ? (
            <li>
              <a href={link ? link : null}>
                <i className="fas fa-link r" />
              </a>
            </li>
          ) : null}
        </ul>
        <div className="details">
          <h2>
            {title} <br />
            <span>{post}</span>
          </h2>
        </div>
      </div>
    );
  }
}
