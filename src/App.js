import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
