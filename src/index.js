import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Gists from "./components/Gists";
import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Gists />, document.getElementById("root"));
registerServiceWorker();
