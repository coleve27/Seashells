import React from "react";
import data from "../../data.json";
import SeaShell from "../SeaShell/SeaShell.js";

class Game extends React.Component {
  state = {
    data,
    hasPearl: false
  };

  componentDidMount() {
    this.setState({ data: this.shufflePearl(this.state.data) });
  }

  shufflePearl = data => {
    let randomPearl = Math.floor(Math.random() * 12) + 1;

    console.log(randomPearl);
    return data;
  };

  /* componentWillReceiveProps({ data }) {
    const newState = { animating: true };
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animating: false }), 500)
    );
  }
  */

  handleItemClick = props => {
    console.log(props);
    if (props.hasPearl) {
      alert("you found the pearl");
    } else {
      alert("try a different pearl");
    }
  };

  render() {
    return (
      <div>
        {this.state.data.map(item => (
          <SeaShell
            id={item.id}
            key={item.id}
            hasPearl={this.state.hasPearl}
            handleClick={this.handleItemClick}
          />
        ))}
      </div>
    );
  }
}

export default Game;
