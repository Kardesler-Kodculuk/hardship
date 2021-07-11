import React from "react";
import { Resources } from "@components";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { GamePage, MainMenu } from "@pages";
import { GameProvider } from "@services";
function App() {
  return (
    <div className="App">
      <GameProvider>
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
      </GameProvider>
    </div>
  );
}

export default App;
