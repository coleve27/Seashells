import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        {" "}
        <Button>hello </Button>
      </MuiThemeProvider>
    );
  }
}

export default App;
