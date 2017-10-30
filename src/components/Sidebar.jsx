import React, { Component } from "react";

class Sidebar extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <h1>Sidebar</h1>;
  }
}

export default Sidebar;
