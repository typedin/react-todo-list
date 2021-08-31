import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoCheck() {
  const { todos, setTodos } = useContext(TodosContext);
  function checkAll(): void {
    setTodos([
      ...todos.map((todo: Todo) => {
        todo.isComplete = true;
        return todo;
      }),
    ]);
  }
  return (
    <button className="btn-neutral" onClick={checkAll}>
      Check All
    </button>
  );
}

export default TodoCheck;
