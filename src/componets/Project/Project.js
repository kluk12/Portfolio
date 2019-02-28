import React, { Component } from "react";
import Img from "./../img/favorit.png";
// import Img2 from "./../img/allalerts.png";
// import Img3 from "./../img/addalert.png";
import "./Project.scss";
import Card2 from ".././Card/card2";
class Prokect extends Component {
  render() {
    return (
      <section id="prokect">
        <h2 className="title text-center">Projekty</h2>

        <div className="container">
          <div className="bittrex">
            <Card2 />
            <Card2 img={Img} title="Bittrex volume alert" post="Alerty dla treiderów" git="https://github.com/kluk12/Bittrex-alert" link=""/>
          </div>
          <div className="gielda">g</div>
          <div className="deliver">d</div>
        </div>
      </section>
    );
  }
}

export default Prokect;
