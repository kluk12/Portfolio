import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="slide-left">
        <div className="container">
          <div className=" justify-content-md-center">
            <div className="col-12">
              <p className="h5">O mnie</p>
            </div>
            <div className="col" />
            <div className="col-12">
              <p className="lead o">
                Swoją przygodę z programowaniem rozpocząłem kilkanaście lat
                temu.
              </p>
              <p className="lead o">
                Na studiach zaiteresowane przerodziło się w Hobby a gdy
                znalazłem swoją technologie przerodziło się to w Pasję.
              </p>
              <p className="lead o">
                Od początku 2017r samodzielnie uczę się JavaScriptu.
              </p>
              <p className="lead o">
                Obecnie poszukuję stażu / pracy na stanowisku Junior
                Front-end/React Developer bądź pokrewnym.
              </p>
              <p className="lead o">
                Chcę rozwijać umiejętności programowania w JavaScriptu.
              </p>
              <p className="lead o">
                Zachęcam do zapoznania się z portfolio i kontaktu ze mną.
              </p>
            </div>
            {/* <div className="col" /> */}
          </div>
        </div>
      </section>
    );
  }
}
