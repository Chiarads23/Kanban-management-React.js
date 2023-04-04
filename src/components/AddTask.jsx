import { useState } from "react";
import styles from '../styles/AddTask.module.scss';
import { GrClose } from "react-icons/gr";

const AddTaskBoard = (props) => {
  const [addTask, setAddTask] = useState(false);

  return (
    <div className={styles.AddTask}>
      {addTask ? (
        <form
          className={`${styles.editTask} ${props.editClass || ''}`}
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit();
          }}
        >
          <input
          autoFocus
            type="text"
            text={props.text}
            placeholder={props.placeholder || props.text}
          />
          <footer>
            <button type="submit">{props.buttonText || "Add"}</button>
            <GrClose onClick={()=> setAddTask(false)}/>
          </footer>
        </form>
      ) : (
        <p 
        className={`${styles.addTaskBoardDisplay} ${props.displayClass ? props.displayClass : ''}`}
        onClick={()=> setAddTask(true)}>{props.text || "Add Task"}</p>
      )}
    </div>
  );
};

export default AddTaskBoard;
