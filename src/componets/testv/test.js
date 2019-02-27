import React, { Component } from "react";
import "./test.scss";
export default class test extends Component {
  render() {
    return (
      <div>
        <div className="slider">
          <div className="items-group">
            <div className="item">
              <div className="block">
                <span className="circleLight" />
                <div className="text">
                  <h2>Hi</h2>
                  <p>I`m cool card</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="block">
                <span className="circleLight" />
                <div className="text">
                  <h2>Hi</h2>
                  <p>I`m cool card</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="block">
                <span className="circleLight" />
                <div className="text">
                  <h2>Hi</h2>
                  <p>I`m cool card</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="block">
                <span className="circleLight" />
                <div className="text">
                  <h2>Hi</h2>
                  <p>I`m cool card</p>
                </div>
              </div>
            </div>
          </div>

          <div className="navigations">
            <ul className="dots" />
          </div>
        </div>
      </div>
    );
  }
}
