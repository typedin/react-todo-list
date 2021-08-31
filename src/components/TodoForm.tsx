import React, { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import createId from "../createId";

function TodoForm() {
  const [todoInput, setTodoInput] = useState("");
  const { todosFiltered, setTodos } = useContext(TodosContext);

  function addTodo(newTodoTitle: string): void {
    setTodos([
      ...todosFiltered(),
      {
        isEditing: false,
        isComplete: false,
        title: newTodoTitle,
        id: createId(todosFiltered().map(({ id }: { id: number }) => id)),
      },
    ]);
  }

  function handleChange(event: any): void {
    setTodoInput(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }
    addTodo(todoInput);
    setTodoInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        className="w-full shadow-sm rounded mt-4 p-3"
        value={todoInput}
        onChange={handleChange}
      />
    </form>
  );
}

export default TodoForm;
