import React, { Component, Fragment } from "react";

import "./Project.scss";
import Card from "./../Card/Card";
class Prokect extends Component {
  render() {
    return (
      <section>
        <div id="prokect">
          <div className="text">
            <h1 className="imie">Szymon Kluk</h1>
            <p className="h5 secondary">Junior Front-End Developer</p>
            {/* <Card /> */}
          </div>
          <div id="lp" className=" slide-right">
            faafa
          </div>
        </div>
      </section>
    );
  }
}

export default Prokect;
