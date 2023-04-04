import styles from "../styles/Boards.module.scss";
import { useState } from "react";
import AddTaskBoard from "./AddTask";
import Board from "./Board";

const Boards = () => {
  const [_cards, set_cards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "To Do",
      tasks_List: [
        {
          id: Date.now() + Math.random(),
          title: "First task",
          tasks: [],
          labels: [
            {
              text: "Low priority",
              color: "rgb(26, 108, 32)",
            },
          ],
          descr: "to do app js",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Second task",
          duties: [],
          labels: [
            {
              text: "Medium priority",
              color: "rgb(253, 187, 45)",
            },
          ],
          descr: "e-commerce app js",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Third task",
          tasks: [],
          labels: [
            {
              text: "High priority",
              color: "rgb(178, 31, 31)",
            },
          ],
          descr: "spotify-clone app js",
          date: "",
        },
      ],
    },
  ]);

  const addTask = (title, boardIndex) => {
    const task = {
      id: Date.now() + Math.random(),
      title,
      duties: [],
      labels: [],
      date: "",
      descr: "",
    };
    const index = _cards.findIndex((item) => item.id === boardIndex);
    if(index < 0) return;

    const momentCards = [..._cards];
    momentCards[index].tasks_List.push(task);
    set_cards(momentCards)
  };
  return (
    <div className={styles.boards}>
      {_cards.map((item) => (
        <Board key={item.id} board={item} />
      ))}

      <section className={styles.addBoard}>
        <AddTaskBoard text="Add Board" placeholder="New Board Title" />
      </section>
    </div>
  );
};

export default Boards;
