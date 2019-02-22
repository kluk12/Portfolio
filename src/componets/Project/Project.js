import React, { Component, Fragment } from "react";
import Img from "./../img/favorit.png";
import Img2 from "./../img/allalerts.png";
import Img3 from "./../img/addalert.png";
// import "./Project.scss";
import Card from "./../Card/car.js";
class Prokect extends Component {
  render() {
    return (
      <section>
        <div id="prokect">
          <div className="text">
            <h1 className="imie">Projekty</h1>
            {/* <p className="h5 secondary">Junior Front-End Developer</p> */}
          </div>
          {/*
          <div className="quote">
            <div>
              <div className="box box1">
                <p />
              </div>
              <div className="bg" />
            </div>
            <div>
              <div className="box box2">
                <p />
              </div>
              <div className="bg" />
            </div>
            <div>
              <div className="box box3">
                <p />
              </div>
              <a href="#" class="github gradient rounded"><i class="fa fa-github"></i></a>
              <i class="fas fa-desktop"></i>
              <div className="bg" />
            </div>
          </div> */}
          <Card img={Img} title="Bitrexx" post="alert" git="" link="" />
          <Card img={Img2} title="Bitrexx" post="alert" git="" link="" />
          <Card img={Img3} title="Bitrexx" post="alert" git="" link="" />
        </div>
      </section>
    );
  }
}

export default Prokect;
