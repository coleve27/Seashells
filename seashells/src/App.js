import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data.json";
import SeaShell from "./components/SeaShell/SeaShell";

class App extends Component {
  state = {
    data
  };
  render() {
    return <div>{this.state.data.map(item => <SeaShell id={item.id} />)}</div>;
  }
}
export default App;
