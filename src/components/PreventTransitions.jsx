import React, { Component } from "react";

class PreventTransitions extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <h1>PreventTransitions</h1>;
  }
}

export default PreventTransitions;
