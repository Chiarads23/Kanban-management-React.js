import styles from "../styles/Board.module.scss";
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
        <h2>Card1</h2>
        <h2>Card2</h2>
      </section>
    </div>
  );
};

export default Board;
