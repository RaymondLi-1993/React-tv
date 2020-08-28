import React from "react";
import { Router, Route } from "react-router-dom";
import History from "./history";

import Header from "./components/header";
import Home from "./components/home";
import Info from "./components/info";

function App() {
  return (
    <div className="w-full h-full">
      <Router history={History}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/info/:id" exact component={Info} />
        </div>
      </Router>
    </div>
  );
}
export default App;
