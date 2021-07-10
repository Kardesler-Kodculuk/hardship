import React from "react";
import { Resources } from "@components";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { GamePage, MainMenu } from "@pages";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <MainMenu />
          </Route>
          <Route path="/game">
            <GamePage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
