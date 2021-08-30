import { useState } from "react";
import createId from "../createId";
import NoTodos from "./NoTodos";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilters";
import TodoRemaining from "./TodoRemaining";
import CheckAllTodos from "./CheckAllTodos";
import UncheckAllTodos from "./UncheckAllTodos";
import ClearCompletedTodos from "./ClearCompletedTodos";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: 1,
      title: "Finish react series",
      isComplete: false,
      isEditing: false,
    },
    { id: 2, title: "Go to Grocery", isComplete: true, isEditing: false },
    { id: 3, title: "Do other thing", isComplete: false, isEditing: false },
  ]);

  function addTodo(newTodoTitle: string): void {
    const newTodo: Todo = {
      isEditing: false,
      isComplete: false,
      title: newTodoTitle,
      id: createId(todos.map(({ id }) => id)),
    };
    setTodos([...todos, newTodo]);
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

  const [filter, setFilter] = useState("all");

  function handleFilterChange(value: string): void {
    setFilter(value);
  }

  function todosFiltered(): Array<any> {
    if (filter === "active") {
      return todos.filter((todo: any) => !todo.isComplete);
    }
    if (filter === "completed") {
      return todos.filter((todo: any) => todo.isComplete);
    }
    return todos;
  }

  return (
    <div className="min-height-screen bg-gray-100 p-3">
      <div className="mx-auto my-auto mt-8 p-4 bg-white text-gray-800 max-w-lg rounded shadow-md">
        <h2 className="text-lg font-bold">Todo App</h2>
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 ? (
          <>
            <TodoList
              todos={todosFiltered}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              completeTodo={completeTodo}
              markAsEditing={markAsEditing}
            />
            <div className="flex justify-between items-center text-gray-800 mt-6 pt-4 border-solid border-t border-gray-300">
              <div className="flex flex-col space-y-2">
                {todos.length !== 0 && (
                  <>
                    <CheckAllTodos checkAll={checkAll} />
                    <UncheckAllTodos uncheckAll={uncheckAll} />
                  </>
                )}
              </div>
              <TodoRemaining todos={todos} />
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-solid border-t border-gray-300">
              <TodoFilters filter={filter} onChange={handleFilterChange} />
              <ClearCompletedTodos clearCompleted={clearCompleted} />
            </div>
          </>
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
