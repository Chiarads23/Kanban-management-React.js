import styles from "../styles/Boards.module.scss";
import Board from "./Board";

const Boards = () => {
  return (
    <div className={styles.boards}>
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
    </div>
  );
};

export default Boards;
