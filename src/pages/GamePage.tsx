import React from "react";
import { Resources, WelcomeMessage } from "@components";
import { gameManager } from "@controller";
import "./GamePage.css";
import { Ship } from "@components";
import { useGame } from "@services";
import anime from "animejs";
import { useHistory } from "react-router";

function fireEngines(
  background: React.RefObject<HTMLImageElement>,
  callback: () => void
) {
  let target = document.getElementsByClassName("shipWrapper")[0];
  anime({
    targets: [target], // Animate the ship
    translateX: 2000,
    duration: 200,
    easing: "easeInCirc",
    complete: () => {
      callback();
    },
  });
}

export default function GamePage() {
  const [tick, setTick] = React.useState(false);
  const game = useGame();
  const background = React.useRef<HTMLImageElement>(null);
  const history = useHistory();
  const [gameOver, setGameOver] = React.useState(false);
  const goToWinScreen = () => {
    history.push("/winscreen");
  };
  React.useEffect(() => {
    if (!game?.freezed) {
      gameManager.gameLoop(0.2);
      setTimeout(() => setTick((previousTick) => !previousTick), 200);

      if (
        gameManager.resources.progress.total >=
        gameManager.resources.progress.limit
      ) {
        game?.freeze();
        setGameOver(true);
        fireEngines(background, goToWinScreen);
      }
    }
  }, [tick, game?.freezed]);
  React.useEffect(() => {
    if (
      game?.freezed &&
      background.current?.classList.contains("spaceBackgroundAnimated")
    ) {
      background.current?.classList.remove("spaceBackgroundAnimated");
    } else {
      background.current?.classList.add("spaceBackgroundAnimated");
    }
  }, [game?.freezed]);
  return (
    <div className="gameWindow">
      <img
        className="spaceBackground"
        ref={background}
        alt="A sliding background full of stars."
        src={"/assets/images/backgrounds/gamebg.jpg"}
      ></img>
      <Ship gameOver={gameOver} />
      {!gameOver ? <Resources /> : null}
      {!gameOver ? <WelcomeMessage /> : null}
    </div>
  );
}
