import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Table from './components/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <Table />
      </div>
    );
  }
}

export default hot(module)(App);
