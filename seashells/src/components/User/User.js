import React from "react";

class User extends React.Component {
  render() {
    const { name, score } = this.props.userData[0];
    console.log(name);
    return (
      <span>
        {name} {score}
      </span>
    );
  }
}

export default User;

//convert user component to look more like navbar//
