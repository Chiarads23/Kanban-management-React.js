import { useState } from "react";
import styles from "../styles/Board.module.scss";
import AddTaskBoard from "./AddTask";
import Dropdown from "./Dropdown";
import Task from "./Task";
import { FiMoreHorizontal } from "react-icons/fi";

const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <div className={styles.Board}>
      <header>
        <h3 className={styles.title}>
         {props.board?.title}<span>{`${props.board?.tasks_List?.length}`}</span>
        </h3>
        <div className={styles.moreButton}>
          <FiMoreHorizontal onClick={() => setShowDropdown(true)} />
          {showDropdown && (
            <Dropdown
              className={styles.Dropdown}
              // onClose={()=> setShowDropdown(false)}
            >
              <p onClick={()=> props.removeBoard(props.board?.id)}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </header>
      <section className={styles.cards}>
        {
          props.board?.tasks_List?.map((item)=> (
         <Task key={item.id}
         task={item}
         removeTask={props.removeTask}
         boardId={props.board?.id}
         />   
          ))
        }
        
        <AddTaskBoard 
        text="Add Task" 
        placeholder="New Task Title" 
        onSubmit={(value)=> props.addTask(value, props.board?.id) }
        />
      </section>
    </div>
  );
};

export default Board;
