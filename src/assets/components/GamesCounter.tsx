import { useContext } from "react";
import "../../index.css";
import { GameContext } from "./App";

const GamesCounter = () => {
  const counter = useContext(GameContext);

  return <div className="text-neutral-600 p-2">Проведено игр: {counter}</div>;
};

export { GamesCounter };
