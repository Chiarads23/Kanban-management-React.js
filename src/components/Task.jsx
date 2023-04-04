import styles from "../styles/Task.module.scss";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { FiMoreHorizontal, FiCheckSquare } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import CloseTask from "./CloseTask";

const Task = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.task}>
      <header>
        <div className={styles.labels}>
          {props.task?.labels?.map((item, index) => (
            <CloseTask key={index} text={item.text} color={item.color} />
          ))}
        </div>
        <div className={styles.moreTaskButton}>
          <FiMoreHorizontal onClick={() => setShowDropdown(true)} />
          {showDropdown && (
            <Dropdown
              className={styles.Dropdown}
              //    onClose={()=> setShowDropdown(false)}
            >
              <p>Delete Task</p>
            </Dropdown>
          )}
        </div>
      </header>
      <main>{props.task?.title}</main>
      <footer>
      {props.task?.date &&  
        <p>
          <FaRegClock />
       {props.task?.date} 
        </p>} 
     
        <p>
          <FiCheckSquare />
          1/4
        </p>
      </footer>
    </div>
  );
};

export default Task;
