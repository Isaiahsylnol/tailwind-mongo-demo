import "./App.css";
 import axios from 'axios';
import Home from "./containers/Home.js";
import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./components/nav-bar";
import Footer from "./components/Footer";

 

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
    <div id="app" className="d-flex flex-column h-100">
  <NavBar />
    <div className="container flex-grow-1">
      <Switch>
        <Route >
        <Home flights={flights}/>

        </Route>
       
      </Switch>
    </div>
<Footer />
  </div>
  );
}

export default App;
