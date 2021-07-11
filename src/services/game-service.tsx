import React from "react";
import { useEffect } from "react";
import { rooms } from "@controller";
interface Game {
  freezed: boolean;
  freeze: () => void;
  unFreeze: () => void;
  fireEvents: () => void;
}

const GameContext = React.createContext<Game | null>(null);

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider = (props: GameProviderProps) => {
  const { children } = props;
  const [freezed, setFreeze] = React.useState(true);
  const [lock, setLock] = React.useState<number[]>([1]);

  useEffect(() => {
    if (lock.length === 0) {
      setFreeze(false);
    } else {
      setFreeze(true);
    }
  }, [lock]);

  const freeze = () => {
    setLock([1, ...lock]);
  };

  const unFreeze = () => {
    if (lock.length > 0) {
      let f = [...lock];
      f.pop();
      setLock(f);
    } else {
    }
  };

  const fireEvents = () => {
    rooms.forEach((room) => {
      if (room.failureRate > Math.floor(Math.random() * 100)) {
        if (room.fireEvent()) {
          console.log(room.name, room.eventHandler.currentEventCount());
          freeze();
        }
      }
    });
  };

  const value = {
    freezed,
    freeze,
    unFreeze,
    fireEvents,
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
