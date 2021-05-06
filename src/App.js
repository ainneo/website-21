import "./App.css";
import React from "react";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Projects from "./components/pages/pages/Projects";
// import About from "./components/pages/pages/About";
// import Contact from "./components/pages/pages/Contact";
// import Home from "./components/pages/pages";

function App() {
  return (
    <Router>
      <Switch>
        <Navbar />
        {/* <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />  */}
      </Switch>
    </Router>
  );
}

export default App;
