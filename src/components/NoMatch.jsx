import React, { Component } from "react";

class NoMatch extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <h1>NoMatch</h1>;
  }
}

export default NoMatch;
