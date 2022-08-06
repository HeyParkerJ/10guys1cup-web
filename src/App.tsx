import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import StatsTablePage from './StatsTablePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatsTablePage />
      </div>
    );
  }
}

export default hot(module)(App);
