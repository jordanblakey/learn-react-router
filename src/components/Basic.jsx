import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class Basic extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Basic</h1>
        </div>
      </Router>
    );
  }
}

export default Basic;
