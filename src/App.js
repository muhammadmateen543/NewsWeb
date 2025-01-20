import "./App.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_MY_NEWS_API_KEY;

  static propTypes = {
    prop: PropTypes,
  };

  state = {
    progress: 0,
  };

  updateProgress = (newProgress) => {
    this.setState({ progress: newProgress });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="yellow"
            height={3}
            progress={this.state.progress}
          />
          <NavBar updateCountry={this.updateCountry} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  updateProgress={this.updateProgress}
                  key="general"
                  country="us"
                  category="general"
                  page="1"
                  pageSize="6"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  updateProgress={this.updateProgress}
                  key="business"
                  country="us"
                  category="business"
                  page="1"
                  pageSize="6"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  updateProgress={this.updateProgress}
                  key="entertainment"
                  country="us"
                  category="entertainment"
                  page="1"
                  pageSize="6"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  updateProgress={this.updateProgress}
                  key="health"
                  country="us"
                  category="health"
                  page="1"
                  pageSize="6"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  updateProgress={this.updateProgress}
                  key="science"
                  country="us"
                  category="science"
                  page="1"
                  pageSize="6"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  updateProgress={this.updateProgress}
                  key="sports"
                  country="us"
                  category="sports"
                  page="1"
                  pageSize="6"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  updateProgress={this.updateProgress}
                  key="technology"
                  country="us"
                  category="technology"
                  page="1"
                  pageSize="6"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
