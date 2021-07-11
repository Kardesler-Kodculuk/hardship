import { MemoryRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { GamePage, MainMenu } from "@pages";
import { GameProvider } from "@services";
function App() {
  return (
    <div className="App">
      <GameProvider>
        <MemoryRouter>
          <Switch>
            <Route path="/" exact>
              <MainMenu />
            </Route>
            <Route path="/game">
              <GamePage />
            </Route>
          </Switch>
        </MemoryRouter>
      </GameProvider>
    </div>
  );
}

export default App;
