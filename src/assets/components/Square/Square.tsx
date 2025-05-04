import styles from "./Square.module.css";
import { SquareValue } from "../../../types/SquareValue";

interface Props {
  value: SquareValue;
  onSquareClick(): void;
}

function Square(props: Props) {
  return (
    <button className={styles.square} onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}

export { Square };
