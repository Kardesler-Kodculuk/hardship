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
  const [event, setEvent] = React.useState(0);
  const { freezed, freeze, fireEvents } = useGame();
  const background = React.useRef<HTMLImageElement>(null);
  const { push } = useHistory();
  const [gameOver, setGameOver] = React.useState(false);
  React.useEffect(() => {
    if (event % 16 === 0) {
      fireEvents();
    }
  }, [event, fireEvents]);

  React.useEffect(() => {
    const goToWinScreen = () => {
      push("/winscreen");
    };

    if (!freezed) {
      gameManager.gameLoop(0.2);
      setTimeout(() => setTick((previousTick) => !previousTick), 200);

      if (
        gameManager.resources.progress.total >=
        gameManager.resources.progress.limit
      ) {
        freeze();
        setGameOver(true);
        fireEngines(background, goToWinScreen);
      }
      let e = event + 1;
      setEvent(e);
    }
  }, [tick, freezed, freeze, push]);

  React.useEffect(() => {
    if (
      freezed &&
      background.current?.classList.contains("spaceBackgroundAnimated")
    ) {
      background.current?.classList.remove("spaceBackgroundAnimated");
    } else if (
      !freezed &&
      !background.current?.classList.contains("spaceBackgroundAnimated")
    ) {
      background.current?.classList.add("spaceBackgroundAnimated");
    }
  }, [freezed]);

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
