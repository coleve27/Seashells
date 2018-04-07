import React from "react";

class SeaShell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pearlLocation: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const newState = { pearlLocation: true };

    this.setState(newState);
  }

  componentDidMount() {
    if (this.state.pearlLocation === this.props.id) {
      this.setState({
        pearlLocation: true
      });
    }
  }
  render() {
    return (
      <button onClick={() => this.props.handleClick(this.props)}>
        SeaShell
      </button>
    );
  }
}

export default SeaShell;
