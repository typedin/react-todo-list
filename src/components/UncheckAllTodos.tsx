import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function UncheckAllTodos() {
  const { todos, setTodos } = useContext(TodosContext);
  function uncheckAll(): void {
    setTodos([
      ...todos.map((todo: Todo) => {
        todo.isComplete = false;
        return todo;
      }),
    ]);
  }
  return (
    <button className="btn-neutral" onClick={uncheckAll}>
      Uncheck All
    </button>
  );
}

export default UncheckAllTodos;
