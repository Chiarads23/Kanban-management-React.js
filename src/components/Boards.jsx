import styles from "../styles/Boards.module.scss";
import AddTaskBoard from "./AddTask";
import Board from "./Board";

const Boards = () => {
  return (
    <div className={styles.boards}>
      <Board />
      <Board />
      <Board />
      <section className={styles.addBoard}>
      <AddTaskBoard 
      text="Add Board" placeholder="New Board Title" />
      </section>
    </div>
  );
};

export default Boards;
