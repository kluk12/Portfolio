import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="slide-left">
        <div className="container">
          <div className=" justify-content-md-center">
            <div className="col-12">
              <p
                className="h5"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="550"
                data-aos-duration="1000"
              >
                O mnie
              </p>
            </div>
            <div className="col" />
            <div className="col-12">
              <p
                className="lead o"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="1450"
                data-aos-duration="1000"
              >
                Swoją przygodę z programowaniem rozpocząłem kilkanaście lat
                temu.
              </p>
              <p
                className="lead o"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="1450"
                data-aos-duration="1000"
              >
                Na studiach zaiteresowane przerodziło się w Hobby a gdy
                znalazłem swoją technologie przerodziło się to w Pasję.
              </p>
              <p
                className="lead o"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="1450"
                data-aos-duration="1000"
              >
                Od początku 2017r samodzielnie uczę się JavaScriptu.
              </p>
              <p
                className="lead o"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="1450"
                data-aos-duration="1000"
              >
                Obecnie poszukuję stażu / pracy na stanowisku Junior
                Front-end/React Developer bądź pokrewnym.
              </p>
              <p
                className="lead o"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="1450"
                data-aos-duration="1000"
              >
                Chcę rozwijać umiejętności programowania w JavaScriptu.
              </p>
              <p
                className="lead o"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="1450"
                data-aos-duration="1000"
              >
                Zachęcam do zapoznania się z portfolio i kontaktu ze mną.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
