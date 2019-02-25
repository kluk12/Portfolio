import React, { Component } from "react";
import "./Skils.scss";

export default class Skils extends Component {
  render() {
    return (
      <section id="skils">
        <h2 className="title text-center">SKILLS</h2>

        <div className="one">
          <h3>HTML</h3>
          <div className="progress">
            <div
              className="progress-bar gg"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div className="two">
          <h3>CSS(SASS)</h3>
          <div className="progress">
            <div
              className="progress-bar  gg"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div className="three">
          <h3>JAVASCRIPT</h3>
          <div className="progress">
            <div
              className="progress-bar gg"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div className="four">
          <h3>REACT</h3>
          <div className="progress">
            <div
              className="progress-bar gg"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            />
            {/* <div
              className="progress-bar  gg"
              role="progressbar"
              style={{ width: "30%" }}
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            />*/}
          </div>
        </div>
        <div className="five">
          <h3>MATERIAL-UI</h3>
          <div className="progress">
            <div
              className="progress-bar  gg"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div className="seven">
          <h3>BOODSTRAP 4</h3>
          <div className="progress">
            <div
              className="progress-bar gg"
              role="progressbar"
              style={{ width: "45%" }}
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div className="eight">
          <h3>REDUX</h3>
          <div className="progress">
            <div
              className="  gg"
              role="progressbar"
              style={{ width: "30%" }}
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div className="nine">
          <h3>TESTS(JEST/ENZYME)</h3>
          <div className="progress">
            <div
              className="progress-bar gg"
              role="progressbar"
              style={{ width: "45%" }}
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div className="smal-skil">
          <div className=" addit-wrapper ">
            <h2 className=" card-title ">Dodatkowe skille</h2>
            <p className=" p-2">
              <strong>Technologie:</strong> git, npm,Lodash, Microsoft Office
            </p>
            <p className=" p-2">
              <strong>Inne:</strong> Prawojazdy cat. B, Umiejętność
              samokształcenia, Szybka nauka
            </p>
            {/* <h4>
              <strong>Języki</strong>
            </h4>*/}
          </div>
        </div>
        {/* <div className="tab">
          <table className="table table-dark table-responsive ">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="lang">
                  <i className="fas fa-language" />
                </th>
                <th scope="col">Listening</th>
                <th scope="col">Reading</th>
                <th scope="col">Writing</th>
                <th scope="col">Speaking</th>
              </tr>
            </thead>
            <tbody className="color">
              <tr>
                <th scope="row">Eng</th>
                <td>B2/C1</td>
                <td>B2/C1</td>
                <td>B1/B2</td>
                <td>B2</td>
              </tr>
              <tr>
                <th scope="row">Pol</th>
                <td>Native</td>
                <td>Native</td>
                <td>Native</td>
                <td>Native</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </section>
    );
  }
}
