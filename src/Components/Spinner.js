import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Spinner extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
