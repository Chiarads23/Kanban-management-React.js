import styles from "../../styles/Task.module.scss";
import { useState } from "react";
import { FiMoreHorizontal, FiCheckSquare } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import CloseTask from "../CloseTask";
import TaskModal from "./TaskModal/TaskModal";
import Dropdown from "../Dropdown";

const Task = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <TaskModal onClose={() => setShowModal(false)} />}
      <div
        className={styles.task}
        draggable
        onDragEnd={() =>
          props.handleDragEnd(props.tasks_List?.id.props.boardId)
        }
        onDragEnter={() =>
          props.handleDragEnter(props.tasks_List?.id.props.boardId)
        }
        onClick={() => setShowModal(true)}
      >
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
                //  onClose={()=> setShowDropdown(false)}
              >
                <p
                  onClick={() =>
                    props.removeTask(props.task?.id, props.boardId)
                  }
                >
                  Delete Task
                </p>
              </Dropdown>
            )}
          </div>
        </header>
        <main>{props.task?.title}</main>
        <footer>
          {props.task?.date && (
            <p>
              <FaRegClock />
              {props.task?.date}
            </p>
          )}

          <p>
            <FiCheckSquare />
            1/4
          </p>
        </footer>
      </div>
    </>
  );
};

export default Task;
