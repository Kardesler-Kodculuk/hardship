import React from "react";
import { Resources, WelcomeMessage } from "@components";
import { gameManager } from "@controller";
import "./GamePage.css";
import { Ship } from "@components";
import { useGame } from "@services";
import anime from "animejs";

function fireEngines(background: React.MutableRefObject<null>) {
  let target = document.getElementsByClassName("Ship")[0];
  anime({
    targets: [target], // Animate the ship
  });
}

export default function GamePage() {
  const [tick, setTick] = React.useState(false);
  const { freezed, freeze } = useGame();
  const background = React.useRef(null);

  React.useEffect(() => {
    if (!freezed) {
      gameManager.gameLoop(0.2);
      setTimeout(() => setTick((previousTick) => !previousTick), 200);
      if (
        gameManager.resources.progress.total >=
        gameManager.resources.progress.limit
      ) {
        freeze();
        fireEngines(background);
      }
    }
  }, [tick, freezed, freeze]);

  return (
    <div className="gameWindow">
      <img
        className="spaceBackground"
        ref={background}
        alt="A sliding background full of stars."
        src={"/assets/images/backgrounds/gamebg.jpg"}
      ></img>
      <Resources />
      <Ship />
      <WelcomeMessage />
    </div>
  );
}
