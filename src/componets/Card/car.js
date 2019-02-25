import React, { Component } from "react";
import "bootstrap";

import "./car.scss";

// props :<Car img={} title="" post="" git="" link=""/>
export default class Car extends Component {
  render() {
    const { img, title, post, git, link } = this.props;
    return (
      <div className="box2">
        <img src={img} alt={title} />
        <div className="box-content">
          <div className="inner-content">
            <h3 className="title">{title}</h3>
            <span className="post">{post}</span>
            <ul className="icon">
              <li>
                <a href={git ? git : null}>
                  <i className="fab fa-github-square r" />
                </a>
              </li>
              <li>
                <a href={link ? link : null}>
                  <i className="fas fa-link r" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
