import { useEffect, useRef } from "react";
// import styles from "../styles/Dropdown.module.scss";

const Dropdown = (props) => {
  const dropdownRef = useRef();

  const handleClick = (e) => {
    if (dropdownRef && !dropdownRef.current?.contains(e.target) &&
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
    <div style={{
      position: 'absolute',
      top: '100%',
      right:' 0',
    }}
     ref={dropdownRef}>
      {props.children}
    </div>
  );
};

export default Dropdown;
