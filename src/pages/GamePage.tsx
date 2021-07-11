import React from "react";
import { EndScreen, Resources, WelcomeMessage } from "@components";
import { gameManager } from "@controller";
import "./GamePage.css";
import { Ship } from "@components";
import { useGame } from "@services";
import anime from "animejs";
import { useHistory } from "react-router";

function fireEngines(callback: () => void) {
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

function destroyShip(callback: () => void) {
  let target = document.getElementsByClassName("shipWrapper")[0];
  anime({
    targets: [target], // Animate the ship
    rotateZ: 360,
    duration: 200000,
    easing: "linear",
    loop: true,
    loopBegin: () => {
      callback();
    },
  });
}

function findDeadWhy() {
  if (gameManager.resources.sanity.total <= 0) {
    return "uzayın boşluğuna teslim oldular";
  } else if (gameManager.resources.sanity.total <= 0) {
    return "kabul edilen yiyecek kaynaklarından vazgeçmek zorunda kaldılar";
  } else if (gameManager.resources.energy.total <= 0) {
    return "enerjileri bittiği için dondular";
  } else if (gameManager.resources.humans.total <= 0) {
    return "bütün yolcularını kaybettiler";
  }
}

export function GamePage() {
  const [tick, setTick] = React.useState(false);
  const [event, setEvent] = React.useState(0);
  const { freezed, freeze, fireEvents } = useGame();
  const background = React.useRef<HTMLImageElement>(null);
  const history = useHistory();
  const [gameState, setGameState] = React.useState("ongoing");
  const goToWinScreen = () => {
    setGameState("victory");
  };
  const goToLoseScreen = () => {
    setGameState("defeat");
  };

  React.useEffect(() => {
    if (event % 16 === 0) {
      fireEvents();
    }
  }, [event, fireEvents]);

  React.useEffect(() => {
    const goToWinScreen = () => {
      history.push("/winscreen");
    };

    if (!freezed) {
      gameManager.gameLoop(0.2);
      setTimeout(() => setTick((previousTick) => !previousTick), 200);
      if (
        gameManager.resources.progress.total >=
        gameManager.resources.progress.limit
      ) {
        freeze();
        setGameState("limbo");
        fireEngines(goToWinScreen);
      } else if (gameManager.anyZero()) {
        console.log("Game lost..");
        freeze();
        setGameState("limbo");
        destroyShip(goToLoseScreen);
      }
      let e = event + 1;
      setEvent(e);
    }
  }, [tick, freezed, freeze]);

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
      <Ship gameOver={gameState !== "ongoing"} />
      {gameState === "victory" ? (
        <EndScreen
          paragraphs={[
            "Tebrikler kaptan! Gemiyi başarıyla hedefine ulaştırdınız.",
            "C:\\> TYPE STATS.TXT",
            `${gameManager.resources.humans.limit} sayıda yolcunun ${gameManager.resources.humans.total} adedini uyandırdınız ve canlı tuttunuz.`,
          ]}
        />
      ) : null}
      {gameState === "defeat" ? (
        <EndScreen
          paragraphs={[
            `Malesef bu gemi hedefine ulaşamadı. Geminin yolcuları, mürettabatı ve kaptanı ${findDeadWhy()}.`,
            "C:\\> TYPE STATS.TXT",
            `${gameManager.resources.humans.limit} sayıda yolcudan ${gameManager.resources.humans.total} adedini uyandırdınız ve sona tanık oldular...`,
          ]}
        />
      ) : null}
      {gameState === "ongoing" ? <Resources /> : null}
      {gameState === "ongoing" ? <WelcomeMessage /> : null}
    </div>
  );
}
