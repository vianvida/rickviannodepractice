import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//CSS imports
import "./App.css";
import "./index.css";
import "./assets/main.css";

import App from "./App";
// import * as serviceWorker from './serviceWorker';

import Home from "./Home";
import About from "./About";
import PageManager from "./PageManager";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/about4" exact component={About} />
        <Route path="/pagemanager" exact component={PageManager} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
