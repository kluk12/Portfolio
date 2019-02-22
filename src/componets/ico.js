import React, { Component } from "react";
import "./ico.scss";
export default class ico extends Component {
  render() {
    return (
      <div>
        <a href="#" className="github gradient rounded">
          <i className="fa fa-github" />
        </a>
        <a href="#" className="github gradient rounded">
          <i className="fa fa-desktop" />
        </a>
        <a href="#" className="css3 rounded">
          <i className="fa fa-css3" />
        </a>
        <a href="#" className="apple long-shadow rounded">
          <i className="fa fa-apple" />
        </a>
        <a href="#" className="codepen circle">
          <i className="fa fa-codepen" />
        </a>
        <a href="#" className="instagram circle left-shaded">
          <i className="fa fa-instagram" />
        </a>{" "}
        <a href="#" className="css3 rounded dia-shaded">
          <i className="fa fa-css3" />
        </a>
      </div>
    );
  }
}
