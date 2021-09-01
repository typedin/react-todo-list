import { useState } from "react";
import NoTodos from "./NoTodos";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilters";
import TodoRemaining from "./TodoRemaining";
import CheckAllTodos from "./CheckAllTodos";
import UncheckAllTodos from "./UncheckAllTodos";
import ClearCompletedTodos from "./ClearCompletedTodos";
import { TodosContext, FiltersContext } from "../context/TodosContext";

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

  const filters = [
    {
      id: 1,
      text: "All",
      filterValue: "all",
    },
    {
      id: 2,
      text: "Active",
      filterValue: "active",
    },
    {
      id: 3,
      text: "Completed",
      filterValue: "completed",
    },
  ];

  const [filter, setFilter] = useState("all");

  function todosFiltered(): Array<any> {
    if (filter === "active") {
      return todos.filter(({ isComplete }) => !isComplete);
    }
    if (filter === "completed") {
      return todos.filter(({ isComplete }) => isComplete);
    }
    return todos;
  }

  return (
    <TodosContext.Provider value={{ todos, todosFiltered, setTodos }}>
      <div className="mx-auto my-auto mt-8 p-4 bg-white text-gray-800 max-w-lg rounded shadow-md">
        <h2 className="text-lg font-bold">Todo App</h2>
        <TodoForm />
        {todos.length > 0 ? (
          <>
            <TodoList />
            <div className="flex justify-between items-center text-gray-800 mt-6 pt-4 border-solid border-t border-gray-300">
              <div className="flex flex-col space-y-2">
                {todos.length !== 0 && (
                  <>
                    <CheckAllTodos />
                    <UncheckAllTodos />
                  </>
                )}
              </div>
              <TodoRemaining />
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-solid border-t border-gray-300">
              <FiltersContext.Provider
                value={{
                  filter,
                  filters,
                  setFilter,
                }}
              >
                <TodoFilters />
              </FiltersContext.Provider>
              <ClearCompletedTodos />
            </div>
          </>
        ) : (
          <NoTodos />
        )}
      </div>
    </TodosContext.Provider>
  );
}

export default App;
