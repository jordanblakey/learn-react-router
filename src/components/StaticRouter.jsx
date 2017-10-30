import React, { Component } from "react";

class StaticRouter extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <h1>StaticRouter</h1>;
  }
}

export default StaticRouter;
