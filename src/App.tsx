import React from "react";
import { Resources } from "@components";
import "./App.css";
import { gameManager } from "@controller";

function App() {
  React.useEffect(() => {
    setInterval(() => gameManager.gameLoop(0.5), 500);
  }, []);
  return (
    <div className="App">
      <Resources />
    </div>
  );
}

export default App;
