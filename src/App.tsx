import React from "react";
import { Resources } from "@components";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { GamePage } from "@pages";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/">
            <GamePage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
