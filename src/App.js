import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Basic from "./components/Basic";
import UrlParams from "./components/UrlParams";
import AmibiguousMatches from "./components/AmibiguousMatches";
import AnimatedTransitions from "./components/AnimatedTransitions";
import CustomLink from "./components/CustomLink";
import ModalGallery from "./components/ModalGallery";
import NoMatch from "./components/NoMatch";
import PreventTransitions from "./components/PreventTransitions";
import RecursivePaths from "./components/RecursivePaths";
import Redirects from "./components/Redirects";
import RouteConfig from "./components/RouteConfig";
import Sidebar from "./components/Sidebar";
import StaticRouter from "./components/StaticRouter";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Basic</Link>
        </li>
        <li>
          <Link to="/url-params">UrlParams</Link>
        </li>
        <li>
          <Link to="/amiguous-matches">AmibiguousMatches</Link>
        </li>
        <li>
          <Link to="/animated-transitions">AnimatedTransitions</Link>
        </li>
        <li>
          <Link to="/custom-link">CustomLink</Link>
        </li>
        <li>
          <Link to="/modal-gallery">ModalGallery</Link>
        </li>
        <li>
          <Link to="/no-match">NoMatch</Link>
        </li>
        <li>
          <Link to="/prevent-transitions">PreventTransitions</Link>
        </li>
        <li>
          <Link to="/recursive-paths">RecursivePaths</Link>
        </li>
        <li>
          <Link to="/redirects">Redirects</Link>
        </li>
        <li>
          <Link to="/route-config">RouteConfig</Link>
        </li>
        <li>
          <Link to="/sidebar">Sidebar</Link>
        </li>
        <li>
          <Link to="/static-router">StaticRouter</Link>
        </li>
      </ul>

      <hr />

      <Route component={Basic} exact path="/" />
      <Route component={UrlParams} path="/url-params" />
      <Route component={AmibiguousMatches} path="/amiguous-matches" />
      <Route component={AnimatedTransitions} path="/animated-transitions" />
      <Route component={CustomLink} path="/custom-link" />
      <Route component={ModalGallery} path="/modal-gallery" />
      <Route component={NoMatch} path="/no-match" />
      <Route component={PreventTransitions} path="/prevent-transitions" />
      <Route component={RecursivePaths} path="/recursive-paths" />
      <Route component={Redirects} path="/redirects" />
      <Route component={RouteConfig} path="/route-config" />
      <Route component={Sidebar} path="/sidebar" />
      <Route component={StaticRouter} path="/static-router" />
    </div>
  </Router>
);

export default BasicExample;
