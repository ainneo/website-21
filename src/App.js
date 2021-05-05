import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
