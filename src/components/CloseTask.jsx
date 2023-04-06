import {GrClose} from 'react-icons/gr';
import styles from '../styles/CloseTask.module.scss';

const CloseTask =(props) => {
return (
    <div className={styles.closetask} style= {{backgroundColor: props.color}}>
        {props.text}
        {props.close && <GrClose onClick={()=> props.onClose ? props.onClose() : '' } />}
    </div>
)
}

export default CloseTask;