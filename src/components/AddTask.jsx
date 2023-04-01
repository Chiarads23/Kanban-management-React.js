import styles from '../styles/AddTask.module.scss';
import {GrClose} from 'react-icons/gr';

const AddTask=() => {
    return (
        <div className={styles.AddTask}>
            <p>Add Task</p>
            <form className={styles.editTask}>
                <input type="text" />
                <footer>
                    <button type="submit">Add</button>
                    <GrClose />
                </footer>
            </form>
            
        </div>
    )
}

export default AddTask;