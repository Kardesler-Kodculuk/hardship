import React from "react";
import { useEffect } from "react";

interface Game {
  freezed: boolean;
  freeze: () => void;
  unFreeze: () => void;
}

const GameContext = React.createContext<Game | null>(null);

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider = (props: GameProviderProps) => {
  const { children } = props;
  const [freezed, setFreeze] = React.useState(true);
  const [lock, setLock] = React.useState(1);

  useEffect(() => {
    console.log(lock);
    if (lock === 0) {
      setFreeze(false);
    } else {
      setFreeze(true);
    }
  }, [lock]);

  const freeze = () => {
    let f = lock + 1;
    console.log(f);
    setLock(f);
  };

  const unFreeze = () => {
    let f = lock - 1;
    if (f >= 0) {
      setLock(f);
    } else {
      throw new Error("You can not unfreeze, continuing game");
    }
  };

  const value = {
    freezed,
    freeze,
    unFreeze,
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
