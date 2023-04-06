import styles from "../../../styles/TaskModal.module.scss";

import { FaListUl } from "react-icons/fa";
import { FiType, FiCalendar, FiCheckSquare, FiTrash } from "react-icons/fi";
import { HiOutlineColorSwatch } from "react-icons/hi";

import Modal from "../../Modal";
import AddTaskBoard from "../../AddTask";
import CloseTask from "../../CloseTask";

import { useEffect, useState } from "react";

const TaskModal = (props) => {
  const labelsColors = [
    "rgb(26, 108, 32)",
    "rgb(253, 187, 45)",
    "rgb(178, 31, 31)",
  ];

  const [colorPriority, setColorPriority] = useState("");

  const [values, setValues] = useState({ ...props.task });

  const calcPercentage = () => {
    if (!values.duties?.length) return 0;
    const completed = values.duties?.filter((item) => item.completed)?.length;
    return (completed / values.duties?.length) * 100;
  };

  const addLabel = (value, color) => {
    const index = values.labels?.findIndex((item) => item.text === value);
    if (index > -1) return;

    const label = {
      text: value,
      color,
    };
    setValues({ ...values, labels: [...values.labels, label] });
    setColorPriority("");
  };

  const removeLabel = (text) => {
    const momentLabels = values.labels?.filter((item) => item.text !== text);

    setValues({ ...values, labels: momentLabels });
  };

  const addDuty = (value) => {
    const duty = {
      id: Date.now() + Math.random(),
      text: value,
      completed: false,
    };
    setValues({ ...values, duties: [...values.duties, duty] });
  };

  const removeDuty = (id) => {
    const index = values.duties?.findIndex((item) => item.id === id);
    if (index < 0) return;

    const momentDuties = values.duties?.splice(index, 1);
    setValues({ ...values, duties: momentDuties });
  };

  const updateDuty = (id, completed) => {
    const index = values.duties?.findIndex((item) => item.id === id);
    if (index < 0) return;

    const momentDuties = [...values.duties];
    momentDuties[index].completed = completed;
    setValues({ ...values, duties: momentDuties });
  };

  useEffect(() => {
    if (props.updateTask) props.updateTask(props.boardId, values.id, values);
  }, [values]);

  return (
    <Modal onClose={() => props.onClose()}>
      <div className={styles.taskModal}>
        {/* -----TITLE SECTION------------ */}

        <div className={styles.container}>
          <div className={styles.title}>
            <FiType />
            Title
          </div>
          <div className={styles.body}>
            <AddTaskBoard
              text={values.title}
              default={values.title}
              placeholder={"Enter Title"}
              buttonText="Set title"
              onSubmit={(value) =>
                setValues({
                  ...values,
                  title: value,
                })
              }
            />
          </div>
        </div>

        {/* -----DESCR SECTION------------ */}
        <div className={styles.container}>
          <div className={styles.title}>
            <FaListUl />
            Description
          </div>
          <div className={styles.body}>
            <AddTaskBoard
              text={values.descr || "Add a Description"}
              default={values.descr}
              placeholder={"Enter Description"}
              onSubmit={(value) =>
                setValues({
                  ...values,
                  descr: value,
                })
              }
            />
          </div>
        </div>

        {/* -----DATE SECTION------------ */}
        <div className={styles.container}>
          <div className={styles.title}>
            <FiCalendar />
            Date
          </div>
          <div className={styles.body}>
            <input
              type="date"
              defaultValue={
                values.date
                  ? new Date(values.date).toISOString().substr(0, 10)
                  : ""
              }
              onChange={(event) =>
                setValues({ ...values, date: event.target.value })
              }
            />
          </div>
        </div>

        {/* -----LABELS SECTION------------ */}
        <div className={styles.container}>
          <div className={styles.title}>
            <HiOutlineColorSwatch />
            Labels
          </div>
          <div className={styles.labels}>
            {values.labels?.map((item, index) => (
              <CloseTask
                close
                onClose={() => removeLabel(item.text)}
                key={item.text + index}
                color={item.color}
                text={item.text}
              />
            ))}
          </div>
          <div className={styles.labelColors}>
            {labelsColors.map((item, index) => (
              <li
                key={index}
                item={colorPriority}
                onClick={() => setColorPriority(item)}
                style={{
                  backgroundColor: item,
                }}
              />
            ))}
          </div>
          <div className={styles.body}>
            <AddTaskBoard
              text={"Add label"}
              placeholder={"Enter label name"}
              buttonText="Add"
              onSubmit={(value) => addLabel(value, colorPriority)}
            />
          </div>
        </div>

        {/* -----DUTIES SECTION------------ */}
        <div className={styles.container}>
          <div className={styles.title}>
            <FiCheckSquare />
            Duties
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                width: calcPercentage() + "%",
                backgroundColor:
                  calcPercentage() == "100" ? " limegreen" : "",
              }}
            />
          </div>
          <div className={styles.dutiesList}>
            {values.duties?.map((item) => (
              <div className={styles.duty} key={item.id}>
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateDuty(item.id, event.target.checked)
                  }
                />
                <p>{item.text}</p>
                <FiTrash onClick={() => removeDuty(item.id)} />
              </div>
            ))}
          </div>
          <div className={styles.body}>
            <AddTaskBoard
              text="Add duty"
              placeholder="Enter duty"
              buttonText="Add duty"
              onSubmit={(value) => addDuty(value)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
