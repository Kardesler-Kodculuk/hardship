import React from "react";
import { Resources, WelcomeMessage } from "@components";
import { gameManager } from "@controller";
import "./GamePage.css";
import { Ship } from "@components";

export default function GamePage() {
  const [tick, setTick] = React.useState(false);
  React.useEffect(() => {
    gameManager.gameLoop(0.2);
    setTimeout(() => setTick((previousTick) => !previousTick), 200);
  }, [tick]);
  return (
    <div className="gameWindow">
      <img
        className="spaceBackground"
        alt="A sliding background full of stars."
        src={"/assets/images/backgrounds/gamebg.jpg"}
      ></img>
      <Resources />
      <Ship />
      <WelcomeMessage />
    </div>
  );
}
