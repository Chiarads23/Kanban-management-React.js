import styles from "../styles/Boards.module.scss";
import { useEffect, useState } from "react";
import AddTaskBoard from "./AddTask";
import Board from "./Board";

const Boards = () => {
  const [_boards, set_boards] = useState(
    JSON.parse(localStorage.getItem("kanban")) || []
  );

  const [target, setTarget] = useState({
    cardIndex: "",
    boardIndex: "",
  });

  const addTask = (title, boardIndex) => {
    const task = {
      id: Date.now() + Math.random(),
      title,
      duties: [],
      labels: [],
      date: "",
      descr: "",
    };
    const index = _boards.findIndex((item) => item.id === boardIndex);
    if (index < 0) return;

    const momentCards = [..._boards];
    momentCards[index].tasks_List.push(task);
    set_boards(momentCards);
  };

  const removeTask = (cardIndex, boardIndex) => {
    const b_Index = _boards.findIndex((item) => item.id === boardIndex);
    if (b_Index < 0) return;

    const c_Index = _boards[b_Index].tasks_List.findIndex(
      (item) => item.id === cardIndex
    );
    if (c_Index < 0) return;

    const momentCards = [..._boards];
    momentCards[b_Index].tasks_List.splice(c_Index, 1);
    set_boards(momentCards);
  };

  const addBoard = (title) => {
    set_boards([
      ..._boards,
      {
        id: Date.now() + Math.random(),
        title,
        tasks_List: [],
      },
    ]);
  };

  const removeBoard = (boardIndex) => {
    const momentBoards = _boards.filter((item) => item.id !== boardIndex);
    set_boards(momentBoards);
  };

  const handleDragEnter = (cardIndex, boardIndex) => {
    setTarget({
      cardIndex,
      boardIndex,
    });
  };

  const handleDragEnd = (cardIndex, boardIndex) => {
    let bIndex_2, cIndex_2, bIndex_3, cIndex_3;

    bIndex_2 = _boards.findIndex((item) => item.id === boardIndex);
    if (bIndex_2 < 0) return;

    cIndex_2 = _boards[bIndex_2].tasks_List?.findIndex(
      (item) => item.id === cardIndex
    );
    if (cIndex_2 < 0) return;

    bIndex_3 = _boards.findIndex((item) => item.id === target.boardIndex);
    if (bIndex_3 < 0) return;

    cIndex_3 = _boards[bIndex_2].tasks_List?.findIndex(
      (item) => item.id === target.cardIndex
    );
    if (cIndex_3 < 0) return;

    const momentBoards = [..._boards];
    const momentCards = momentBoards[bIndex_2].tasks_List[cIndex_2];

    momentBoards[bIndex_2].tasks_List.splice(cIndex_2, 1);
    momentBoards[bIndex_3].tasks_List.splice(cIndex_3, 0, momentCards);

    set_boards(momentBoards);
  };

  const updateTask = (cardIndex, boardIndex, task) => {
    const b_Index = _boards.findIndex((item) => item.id === boardIndex);
    if (b_Index < 0) return;

    const c_Index = _boards[b_Index].tasks_List.findIndex(
      (item) => item.id === cardIndex
    );
    if (c_Index < 0) return;

    const momentBoards = [..._boards];
    momentBoards[b_Index].tasks_List[c_Index] = task;
    set_boards(momentBoards);
  };

  useEffect(() => {
    localStorage.setItem("kanban", JSON.stringify(_boards));
  }, [_boards]);

  return (
    <div className={styles.boards}>
      {_boards.map((item) => (
        <Board
          key={item.id}
          board={item}
          removeBoard={removeBoard}
          addTask={addTask}
          removeTask={removeTask}
          handleDragEnd={handleDragEnd}
          handleDragEnter={handleDragEnter}
          updateTask={updateTask}
        />
      ))}

      <section className={styles.addBoard}>
        <AddTaskBoard
          text="Add Board"
          placeholder="New Board Title"
          onSubmit={(value) => addBoard(value)}
        />
      </section>
    </div>
  );
};

export default Boards;
