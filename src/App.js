import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Sidebar from "./components/pages/Sidebar"; //for testing
import Home from "./components/pages/pages";

function App() {
  return (
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
