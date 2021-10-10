import "./App.css";
import axios from "axios";
import Home from "./containers/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

function App() {

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home />}
        >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
