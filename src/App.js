import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import TableContainer from './components/tableContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableContainer />
      </div>
    );
  }
}

export default hot(module)(App);
