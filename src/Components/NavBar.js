import "./Components.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    active: {
      General: true,
      Business: false,
      Entertainment: false,
      Health: false,
      Science: false,
      Sports: false,
      Technology: false,
    },
  };

  updateActive = (value) => {
    this.setState({
      active: {
        General: false,
        Business: false,
        Entertainment: false,
        Health: false,
        Science: false,
        Sports: false,
        Technology: false,
        [value]: true,
      },
    });
  };

  render() {
    const { active } = this.state;

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{ backgroundColor: "#e90f24", blockSize: "3px 5px" }}
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              onClick={() => {
                this.updateActive("General");
              }}
              style={{ fontFamily: "Lucida Sans" }}
              to="/"
            >
              <strong>PulseWire</strong>
            </Link>
            <button
              className="navbar-toggler btn-bg-secondary Navbar-Toggle"
              style={{ padding: "3px 5px" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.updateActive("General");
                  }}
                  aria-current="page"
                  style={{
                    color: active["General"] ? "white" : "black",
                  }}
                  to="/"
                >
                  General
                </Link>
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.updateActive("Business");
                  }}
                  aria-current="page"
                  style={{
                    color: active["Business"] ? "white" : "black",
                  }}
                  to="/business"
                >
                  Business
                </Link>
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.updateActive("Entertainment");
                  }}
                  aria-current="page"
                  style={{
                    color: active["Entertainment"] ? "white" : "black",
                  }}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.updateActive("Health");
                  }}
                  aria-current="page"
                  style={{
                    color: active["Health"] ? "white" : "black",
                  }}
                  to="/health"
                >
                  Health
                </Link>
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.updateActive("Science");
                  }}
                  aria-current="page"
                  style={{
                    color: active["Science"] ? "white" : "black",
                  }}
                  to="/science"
                >
                  Science
                </Link>
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.updateActive("Sports");
                  }}
                  aria-current="page"
                  style={{
                    color: active["Sports"] ? "white" : "black",
                  }}
                  to="/sports"
                >
                  Sports
                </Link>
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.updateActive("Technology");
                  }}
                  aria-current="page"
                  style={{
                    color: active["Technology"] ? "white" : "black",
                  }}
                  to="/technology"
                >
                  Technology
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
