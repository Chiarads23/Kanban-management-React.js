import styles from '../styles/Main.module.scss';
import Boards from './Boards';

const Main =() => {
    return (
        <main className={styles.main}>
            <Boards />
        </main>
    )
}

export default Main;