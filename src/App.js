import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Sidebar from "./components/pages/Sidebar"; //for testing
import Home from "./pages";
import Particles from "./Particles";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      >
        <Particles />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
        }}
      >
        <Router>
          <Home />
        </Router>
      </div>
    </div>
  );
}

export default App;
