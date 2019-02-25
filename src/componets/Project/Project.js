import React, { Component } from "react";
// import Img from "./../img/favorit.png";
// import Img2 from "./../img/allalerts.png";
// import Img3 from "./../img/addalert.png";
import "./Project.scss";

class Prokect extends Component {
  render() {
    return (
      <section id="prokect">
        <h2 className="title text-center">SKILLS</h2>

        <div className="container">
          <div className="row justify-content-center align-self-center">
            <div className="col-12  col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-2">
              {/* <Card img={Img} title="Bitrexx" post="alert" git="" link="" /> */}
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-2">
              {/* <Card img={Img2} title="Bitrexx" post="alert" git="" link="" /> */}
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
              {/* <Card img={Img2} title="Bitrexx" post="alert" git="" link="" /> */}
            </div>
            {/* <div className="col-6 col-md-4">.col-6 .col-md-4</div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Prokect;
