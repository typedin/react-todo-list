import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoList() {
  const { todosFiltered, setTodos } = useContext(TodosContext);

  function completeTodo(id: number): void {
    setTodos([
      ...todosFiltered().map((todo: Todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      }),
    ]);
  }

  function markAsEditing(id: number): void {
    setTodos([
      ...todosFiltered().map((todo: Todo) => {
        if (todo.id === id) {
          todo.isEditing = !todo.isEditing;
        }
        return todo;
      }),
    ]);
  }

  function updateTodo(event: any, id: number): void {
    const newTitle: string = event.target.value.trim();
    setTodos([
      ...todosFiltered().map((todo: Todo) => {
        if (todo.id === id) {
          todo.isEditing = false;
          todo.title = newTitle.length === 0 ? todo.title : newTitle;
        }
        return todo;
      }),
    ]);
  }

  function deleteTodo(id: number): void {
    setTodos([...todosFiltered().filter((todo: Todo) => todo.id !== id)]);
  }

  return (
    <>
      <ul className="mt-8">
        {todosFiltered().map((todo: Todo) => (
          <li className="flex justify-between items-center mt-6" key={todo.id}>
            <div className="flex flex-1 items-center text-lg mr-6">
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => completeTodo(todo.id)}
              />
              {!todo.isEditing && (
                <span
                  onDoubleClick={() => markAsEditing(todo.id)}
                  className={`cursor-pointer ml-4 ${
                    todo.isComplete ? "line-through" : null
                  }`}
                >
                  {todo.title}
                </span>
              )}

              {todo.isEditing && (
                <input
                  type="text"
                  className="ml-2 w-full py-1 px-2 text-lg shadow-sm rounded"
                  autoFocus
                  defaultValue={todo.title}
                  onBlur={(event) => updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      updateTodo(event, todo.id);
                    }
                    if (event.key === "Escape") {
                      markAsEditing(todo.id);
                    }
                  }}
                />
              )}
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-white text-gray-600 hover:text-gray-900 cursor-pointer border-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
