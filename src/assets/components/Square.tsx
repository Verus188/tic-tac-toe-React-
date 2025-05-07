import { ISquare, SquareValue } from "../../types/ISquare";
import "../../index.css";

interface Props {
  square: ISquare;
  onSquareClick(): void;
}

function Square(props: Props) {
  let textColor: string;
  let borderColor: string;

  if (props.square.squareValue === "X") {
    textColor = "text-pink-700";
    borderColor = "border-pink-700";
  } else if (props.square.squareValue === "O") {
    textColor = "text-indigo-700";
    borderColor = "border-indigo-700";
  } else {
    textColor = "text-sky-700";
    borderColor = "border-sky-100";
  }

  return (
    <button
      className={`w-4 h-4 text-6xl ${textColor} ${borderColor} transition-colors duration-300 bg-green-300 hover:bg-green-400 border-2 min-h-20 min-w-20`}
      onClick={props.onSquareClick}
    >
      {props.square.squareValue}
    </button>
  );
}

export { Square };
