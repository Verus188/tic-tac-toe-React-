import { Board } from "./Board";
import "../../index.css";
import { GamesCounter } from "./GamesCounter";
import { createContext, useEffect, useRef, useState } from "react";

export const GameContext = createContext(0);

function App() {
  const [gamesCounter, setGamesCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  const changeGamesCount = (count: number) => setGamesCount(count);

  return (
    <div className="bg-gradient-to-b from-emerald-500 to-emerald-950 min-h-screen">
      Количество рендеров: {renderCount.current}
      <GameContext.Provider value={gamesCounter}>
        <GamesCounter />
        <Board setGamesCount={(count: number) => changeGamesCount(count)} />
      </GameContext.Provider>
    </div>
  );
}

export { App };
