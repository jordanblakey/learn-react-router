import React, { Component } from "react";

class AnimatedTransitions extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <h1>AnimatedTransitions</h1>;
  }
}

export default AnimatedTransitions;
