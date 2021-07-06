import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
