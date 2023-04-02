import { useState } from "react";
import styles from '../styles/AddTask.module.scss';
import { GrClose } from "react-icons/gr";

const AddTask = (props) => {
  const [addTask, setAddTask] = useState(false);

  return (
    <div className={styles.AddTask}>
      {addTask ? (
        <form
          className={`${styles.editTask} ${props.editTask || ''}`}
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit();
          }}
        >
          <input
            type="text"
            defaultValue={props.text}
            placeholder='New Task Title'
          />
          <footer>
            <button type="submit">{props.buttonText || "Add"}</button>
            <GrClose onClick={()=> setAddTask(false)}/>
          </footer>
        </form>
      ) : (
        <p 
        className={`${styles.addTaskDisplay} ${props.displayClass || ''}`}
        onClick={()=> setAddTask(true)}>{props.text || "Add Task"}</p>
      )}
    </div>
  );
};

export default AddTask;
