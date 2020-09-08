import React from "react";
import { Router, Route } from "react-router-dom";
import History from "./history";

import Header from "./components/header";
import Info from "./components/info";
import Invalid from "./components/invalid";
import Home from "./components/home";
import Seasons from "./components/seasons";

function App() {
  return (
    <div className="w-full h-full">
      <Router history={History}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/info/:id" exact component={Info} />
          <Route path="/invalid" exact component={Invalid} />
        </div>
      </Router>
    </div>
  );
}
export default App;
