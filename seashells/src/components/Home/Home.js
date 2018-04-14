import React from "react";
// import data from "../../data.json";
import Nav from "../Nav/Nav.js";
import "./Home.css";

import User from "../User/User.js";

var user = [
  {
    name: "Phil",
    score: 100
  }
];

class Home extends React.Component {
  state = {
    userName: this.myInput.value
  };

  myInput = React.createRef();

  /*  componentDidMount() {
    this.setState();
  } */

  handleItemClick = props => {};

  goToGame = event => {
    event.preventDefault();
    const userName = this.myInput.value;
    this.props.history;
    this.props.history.push(`/game/${userName}`);
  };

  render() {
    console.log("render");
    return (
      <div className="login_container">
        <form className="login_selector" onSubmit={this.goToGame}>
          <h2>Please Enter A Username</h2>

          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Username"
            defaultValue="user1"
          />
          <button type="submit">Start →</button>
        </form>
      </div>
    );
  }
}

export default Home;
