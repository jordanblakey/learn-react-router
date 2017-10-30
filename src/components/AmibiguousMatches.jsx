import React, { Component } from "react";

class AmbiguousMatches extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <h1>Amb Matches</h1>;
  }
}

export default AmbiguousMatches;
