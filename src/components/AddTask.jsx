import { useState } from "react";
import styles from "../styles/AddTask.module.scss";
import { GrClose } from "react-icons/gr";

const AddTaskBoard = (props) => {
  const [addTask, setAddTask] = useState(false);
  const [inputValue, setInputValue] = useState(props.default || "");

  return (
    <div className={styles.AddTask}>
      {addTask ? (
        <form
          className={styles.editTask}
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue);
            setAddTask(false);
            setInputValue("");
          }}
        >
          <input
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={props.placeholder || props.text}
          />
          <footer>
            <button type="submit">{props.buttonText || "Add"}</button>
            <GrClose onClick={() => setAddTask(false)} />
          </footer>
        </form>
      ) : (
        <p
          className={styles.addTaskBoardDisplay} 
          onClick={() => setAddTask(true)}
        >
          {props.text || "Add Task"}
        </p>
      )}
    </div>
  );
};

export default AddTaskBoard;
