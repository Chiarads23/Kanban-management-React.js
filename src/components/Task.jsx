import styles from '../styles/Task.module.scss';
import { FiMoreHorizontal, FiCheckSquare } from 'react-icons/fi';
import {FaRegClock} from 'react-icons/fa';
import CloseTask from './CloseTask';


const Task = () => {
   return ( 
    <div className={styles.task}>
        <header>
            <div className={styles.labels}>
                <CloseTask text='Low priority' color='rgb(26, 108, 32)'/>
            </div>
            <FiMoreHorizontal />
        </header>
        <main>First task</main>
        <footer>
            <p>
                <FaRegClock />
                07 Apr
            </p>
            <p>
                <FiCheckSquare />
                1/4
            </p>
        </footer>
    </div>
   )
}

export default Task;