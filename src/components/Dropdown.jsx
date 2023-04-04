import { useEffect, useRef } from "react";
import styles from "../styles/Dropdown.module.scss";

const Dropdown = (props) => {
  const dropdownRef = useRef();

  const handleClick = (e) => {
    if (dropdownRef && !dropdownRef.current?.contains(e?.target) &&
    props.onClose
  )
    props.onClose();
     
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <main className={styles.Dropdown} ref={dropdownRef}>
      {props.children}
    </main>
  );
};

export default Dropdown;
