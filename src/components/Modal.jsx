import styles from "../styles/Modal.module.scss";

const Modal = (props) => {
  return (
    <div
      className={styles.modal}
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div 
      className={styles.content}
      onClick= {(event)=> event.stopPropagation()}
      >{props.children}</div>
    </div>
  );
};

export default Modal;
