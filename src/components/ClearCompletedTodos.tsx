import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function ClearCompletedTodo() {
  const { todosFiltered, setTodos } = useContext(TodosContext);
  function clearCompleted(): void {
    setTodos([...todosFiltered().filter((todo: Todo) => !todo.isComplete)]);
  }
  return (
    <button className="btn-neutral" onClick={clearCompleted}>
      Clear completed
    </button>
  );
}

export default ClearCompletedTodo;
