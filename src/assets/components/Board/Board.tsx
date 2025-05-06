import { useEffect, useState } from "react";
import { Square } from "../Square/Square";
import { ISquare, SquareValue } from "../../../types/ISquare";
import "../../../index.css";

function Board() {
  const startGameTime: number = 15;

  function createSquares(): ISquare[] {
    let res: ISquare[] = Array(9);

    for (let i = 0; i < 9; i++) {
      const square: ISquare = {
        squareValue: null,
        squareLife: 3,
      };
      res[i] = square;
    }
    return res;
  }

  const [isGameActive, setGameActive] = useState(false);
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<ISquare[]>(createSquares());
  const [curXTime, setCurXTime] = useState(startGameTime);
  const [curOTime, setCurOTime] = useState(startGameTime);

  useEffect(() => {
    let interval = 0;
    if (isGameActive && curXTime > 0 && !winner && xIsNext) {
      interval = setInterval(() => {
        setCurXTime((curTime) => curTime - 1);
      }, 1000);
    } else if (isGameActive && curOTime > 0 && !winner && !xIsNext) {
      interval = setInterval(() => {
        setCurOTime((curTime) => curTime - 1);
      }, 1000);
    } else {
      setGameActive(false);
    }

    return () => clearInterval(interval);
  }, [isGameActive, curXTime, curOTime]);

  function handleClick(i: number): void {
    if (
      !isGameActive ||
      squares[i].squareValue ||
      calculateWinner(squares, curXTime, curOTime)
    )
      return;
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i].squareValue = "X";
    } else {
      nextSquares[i].squareValue = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner: SquareValue = calculateWinner(squares, curXTime, curOTime);
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function startGame() {
    setGameActive(true);
    setCurXTime(startGameTime);
    setCurOTime(startGameTime);
    setSquares(createSquares());
    setXIsNext(true);
  }

  return (
    <div className="p-3.5 text-center">
      <div
        className={`font-bold text-${
          xIsNext ? "pink" : "indigo"
        }-700 text-3xl transition-colors duration-500 ease-out`}
      >
        {status}
      </div>
      <div className="flex justify-center gap-45 text-3xl">
        <div className=" text-pink-700 mt-3.5">{curXTime}</div>
        <div className=" text-indigo-700 mt-3.5">{curOTime}</div>
      </div>
      <div className="m-auto grid justify-center justify-items-center gap-2 grid-cols-3 w-fit h-auto mt-5">
        <Square square={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square square={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square square={squares[2]} onSquareClick={() => handleClick(2)} />

        <Square square={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square square={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square square={squares[5]} onSquareClick={() => handleClick(5)} />

        <Square square={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square square={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square square={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button
        onClick={startGame}
        className="mt-3 border-sky-100 border-1 bg-green-300 transition-colors duration-200 hover:bg-green-400 rounded px-1.5 active:translate-y-0.5 active:border-green-500"
      >
        {setGameStateButtonText(isGameActive)}
      </button>
    </div>
  );
}

function setGameStateButtonText(isGameActive: boolean): string {
  if (isGameActive) {
    return "";
  } else {
    return "Start";
  }
}

function calculateWinner(
  squares: ISquare[],
  curXTime: number,
  curOTime: number
): SquareValue {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a].squareValue &&
      squares[a].squareValue === squares[b].squareValue &&
      squares[b].squareValue === squares[c].squareValue
    ) {
      return squares[a].squareValue;
    }
  }

  if (curXTime <= 0) {
    return "O";
  } else if (curOTime <= 0) {
    return "X";
  } else {
    return null;
  }
}

function eraseSymbols(squares: SquareValue[]): void {}

export { Board };
