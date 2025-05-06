type SquareValue = "X" | "O" | null;

interface ISquare {
  squareValue: SquareValue;
  squareLife: number;
}

export type { SquareValue };
export type { ISquare };
