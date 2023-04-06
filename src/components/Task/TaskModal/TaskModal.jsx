import styles from "../../../styles/TaskModal.module.scss";
import Modal from "../../Modal";
import {FaListUl} from 'react-icons/fa'
import { FiType , FiCalendar} from "react-icons/fi";
import {HiOutlineColorSwatch} from 'react-icons/hi';
import AddTaskBoard from "../../AddTask";

const TaskModal = (props) => {

const labelsColors= [
  "rgb(26, 108, 32)",
  "rgb(253, 187, 45)",
  "rgb(178, 31, 31)",
]

  return (
    <Modal onClose={() => props.onClose()}>
      <div className={styles.taskModal}>
        <div className={styles.container}>
          <div className={styles.title}>
            <FiType />
            Title 1
          </div>
          <div className={styles.body}>
            <AddTaskBoard text={"Add Title"} placeholder={"Enter Title"} 
             buttonText= 'Set title'
            />
          </div>
        </div>

         <div className={styles.container}>
          <div className={styles.title}>
            <FaListUl />
            Description
          </div>
          <div className={styles.body}>
            <AddTaskBoard text={"Your description here"} placeholder={"Enter Description"} 
             buttonText= 'Set description'
            />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.title}>
            <FiCalendar />
            Date
          </div> 
           <div className={styles.body}>
          <input type="date" /> 
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.title}>
            <HiOutlineColorSwatch/>
            Labels
          </div> 
          <div className={styles.labelColors}>
            {labelsColors.map((item, index)=> 
            <li 
            key={index}
            style={{
              backgroundColor:item
            }}/>)}
          </div>
           <div className={styles.body}>
           <AddTaskBoard text={"Add label"} placeholder={"Enter label text"} 
           buttonText= 'Set label'
           />
          </div>
          
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
