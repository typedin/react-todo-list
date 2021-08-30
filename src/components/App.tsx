import { useState } from "react";
import createId from "../createId";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish react series",
      isComplete: false,
      isEditing: false,
    },
    { id: 2, title: "Go to Grocery", isComplete: true, isEditing: false },
    { id: 3, title: "Do other thing", isComplete: false, isEditing: false },
  ]);

  const [todoInput, setTodoInput] = useState("");

  function addTodo(event: any): void {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }

    const newTodo = {
      id: createId(todos.map(({ id }) => id)),
      title: todoInput,
      isComplete: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    setTodoInput("");
  }

  function deleteTodo(id: number): void {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  function completeTodo(id: number): void {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      }),
    ]);
  }

  function updateTodo(event: any, id: number): void {
    const newTitle: string = event.target.value.trim();
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle.length === 0 ? todo.title : newTitle;
          todo.isEditing = false;
        }
        return todo;
      }),
    ]);
  }

  function markAsEditing(id: number): void {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          todo.isEditing = !todo.isEditing;
        }
        return todo;
      }),
    ]);
  }

  function clearCompleted(): void {
    setTodos([...todos.filter((todo) => !todo.isComplete)]);
  }

  function checkAll(): void {
    setTodos([
      ...todos.map((todo) => {
        todo.isComplete = true;
        return todo;
      }),
    ]);
  }

  function uncheckAll(): void {
    setTodos([
      ...todos.map((todo) => {
        todo.isComplete = false;
        return todo;
      }),
    ]);
  }

  function handleChange(event: any): void {
    setTodoInput(event.target.value);
  }

  return (
    <div className="min-height-screen bg-gray-100 p-3">
      <div className="todo-app mx-auto my-auto mt-8 p-4 bg-white text-gray-800 max-w-lg rounded shadow-md">
        <h2 className="text-lg font-bold">Todo App</h2>
        <form onSubmit={addTodo}>
          <input
            type="text"
            className="w-full shadow-sm rounded mt-4 p-3"
            placeholder="What do you need to do?"
            value={todoInput}
            onChange={handleChange}
          />
        </form>

        <ul className="mt-8">
          {todos.map((todo) => (
            <li
              className="flex justify-between items-center mt-6"
              key={todo.id}
            >
              <div className="flex flex-1 items-center text-lg mr-6">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => completeTodo(todo.id)}
                />
                {!todo.isEditing && (
                  <span
                    onDoubleClick={() => markAsEditing(todo.id)}
                    className={`ml-4 ${
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

        <div className="flex justify-between items-center text-gray-800 mt-6 pt-4 border-solid border-t border-gray-300">
          {todos.length !== 0 && (
            <div className="flex flex-col space-y-2">
              <button className="btn-neutral" onClick={checkAll}>
                Check All
              </button>
              <button className="btn-neutral" onClick={uncheckAll}>
                Uncheck All
              </button>
            </div>
          )}

          <span>
            {todos.length} {todos.length === 1 ? "item" : "items"} remaining
          </span>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-solid border-t border-gray-300">
          <div>
            <button className="btn-neutral">All</button>
            <button className="btn-neutral border-0">Active</button>
            <button className="btn-neutral border-0">Completed</button>
          </div>
          <div>
            <button className="btn-neutral" onClick={clearCompleted}>
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
