import React, { Component } from "react";

class CustomLink extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <h1>CustomLink</h1>;
  }
}

export default CustomLink;
