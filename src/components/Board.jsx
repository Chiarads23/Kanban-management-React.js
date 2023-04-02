import styles from "../styles/Board.module.scss";
import AddTask from "./AddTask";
import Task from "./Task";
import { FiMoreHorizontal } from "react-icons/fi";

const Board = () => {
  return (
    <div className={styles.Board}>
      <header>
        <h3 className={styles.title}>
          To do<span>2</span>
        </h3>
        <FiMoreHorizontal />
      </header>
      <section className={styles.cards}>
        <Task />
        <Task />
        <Task />
        <AddTask />
      </section>
    </div>
  );
};

export default Board;
