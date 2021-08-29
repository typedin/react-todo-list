import { useState } from "react";
import "../App.css";
import "../reset.css";
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
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form onSubmit={addTodo}>
          <input
            value={todoInput}
            onChange={handleChange}
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => completeTodo(todo.id)}
                />
                {!todo.isEditing && (
                  <span
                    onDoubleClick={() => markAsEditing(todo.id)}
                    className={`todo-item-label ${
                      todo.isComplete ? "line-through" : null
                    }`}
                  >
                    {todo.title}
                  </span>
                )}

                {todo.isEditing && (
                  <input
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
                    type="text"
                    className="todo-item-input"
                    autoFocus
                  />
                )}
              </div>
              <button onClick={() => deleteTodo(todo.id)} className="x-button">
                <svg
                  className="x-button-icon"
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

        <div className="buttons-container">
          {todos.length !== 0 && (
            <div className="check-all-container">
              <div className="button" onClick={checkAll}>
                Check All
              </div>
              <div className="button" onClick={uncheckAll}>
                Uncheck All
              </div>
            </div>
          )}

          <span>
            {todos.length} {todos.length === 1 ? "item" : "items"} remaining
          </span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button" onClick={clearCompleted}>
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
