import "./App.css";
 import axios from 'axios';
import Home from "./containers/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [flights, setflights] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/flights/')
  .then(function (response) {
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    setflights(response.data)
  });
 },[]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home flights={flights}/>}
        >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
