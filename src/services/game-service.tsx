import React from "react";
import { useEffect } from "react";
import { EventWithCount, rooms } from "@controller";
import { gameManager } from "@controller";
interface Game {
  freezed: boolean;
  freeze: () => void;
  unFreeze: () => void;
  fireEvents: () => void;
  addStaff: () => void;
  removeStaff: () => void;
  wakeStaff: () => void;
  happenedEvents: () => EventWithCount[];
  happenedEventCount: () => number;
  restart: () => void;
}

const GameContext = React.createContext<Game | null>(null);

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider = (props: GameProviderProps) => {
  const { children } = props;
  const [freezed, setFreeze] = React.useState(true);
  const [lock, setLock] = React.useState<number>(1);
  const [happened, setHappened] = React.useState<EventWithCount[]>([]);

  useEffect(() => {
    if (lock === 0) {
      setFreeze(false);
    } else {
      setFreeze(true);
    }
  }, [lock]);
  useEffect(() => {
    console.log(happened);
  }, [happened]);
  const freeze = () => {
    setLock((lock) => lock + 1);
  };

  const unFreeze = () => {
    if (lock > 0) {
      setLock((lock) => lock - 1);
    } else {
    }
  };

  const fireEvents = () => {
    rooms.forEach((room) => {
      if (
        room.name !== "cold" &&
        room.getFailureRate() > Math.floor(Math.random() * 100)
      ) {
        let e = room.fireEvent();
        if (e !== null) {
          freeze();
          setHappened((happened) => {
            if (e !== null) {
              let a = [e, ...happened];
              return a;
            }
            return happened;
          });
        }
      }
    });
  };

  const happenedEvents = () => {
    return [...happened];
  };

  const happenedEventCount = () => {
    return [...happened].length;
  };

  const addStaff = () => {
    gameManager.getSingleStaff();
  };

  const removeStaff = () => {
    gameManager.putBackStaff();
  };

  const wakeStaff = () => {
    gameManager.addToStaff(1);
  };

  const restart = () => {
    gameManager.resources = {
      energy: { total: 500.0, change: 10, limit: 1000, name: "Enerji" },
      humans: { total: 5, change: 0, limit: 250, name: "İnsan" },
      food: { total: 500.0, change: 10, limit: 1000, name: "Yemek" },
      sanity: { total: 500.0, change: 10, limit: 1000, name: "Akıl Sağlığı" },
      progress: { total: 0.0, change: 0.83, limit: 1000, name: "İlerleme" },
    };
    gameManager.staffCount = 5;
    gameManager.deadCount = 0;
    rooms.forEach((room) => room.clear());
    setHappened([]);
    setFreeze(true);
    setLock(1);
  };

  const value = {
    freezed,
    freeze,
    unFreeze,
    fireEvents,
    addStaff,
    removeStaff,
    wakeStaff,
    happenedEvents,
    happenedEventCount,
    restart,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const gameContext = React.useContext(GameContext);
  if (gameContext === null) {
    throw new Error("Game context is not provided");
  }
  return gameContext;
};
