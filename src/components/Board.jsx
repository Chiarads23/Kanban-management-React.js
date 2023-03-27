import styles from '../styles/Board.module.scss';
import {FiMoreHorizontal} from 'react-icons/fi';

const Board =() => {
    return(
        <div classname={styles.board}>
            <header>
                <h2 className={styles.title}>To do</h2><span>2</span>
              <FiMoreHorizontal/>
            </header>
            <section className={styles.cards}>
                <h3>Card1</h3>
                <h3>Card2</h3>
            </section>
        </div>
    )
}

export default Board;