import React from "react";

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

  const freeze = () => {
    setFreeze(true);
  };

  const unFreeze = () => {
    setFreeze(false);
  };

  const value = {
    freezed,
    freeze,
    unFreeze,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  return React.useContext(GameContext);
};
