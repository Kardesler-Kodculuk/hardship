import React from "react";
import { Resources } from "@components";
import "./App.css";
import { gameManager } from "@controller";

function App() {
  const [tick, setTick] = React.useState(false);
  React.useEffect(() => {
    gameManager.gameLoop(0.2);
    setTimeout(() => setTick((previousTick) => !previousTick), 200);
  }, [tick]);
  return (
    <div className="App">
      <Resources />
    </div>
  );
}

export default App;
