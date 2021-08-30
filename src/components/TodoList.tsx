import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
};

function TodoList(props: any) {
  return (
    <>
      <ul className="mt-8">
        {props.todos().map((todo: any) => (
          <li className="flex justify-between items-center mt-6" key={todo.id}>
            <div className="flex flex-1 items-center text-lg mr-6">
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => props.completeTodo(todo.id)}
              />
              {!todo.isEditing && (
                <span
                  onDoubleClick={() => props.markAsEditing(todo.id)}
                  className={`ml-4 ${todo.isComplete ? "line-through" : null}`}
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
                  onBlur={(event) => props.updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      props.updateTodo(event, todo.id);
                    }
                    if (event.key === "Escape") {
                      props.markAsEditing(todo.id);
                    }
                  }}
                />
              )}
            </div>
            <button
              onClick={() => props.deleteTodo(todo.id)}
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
