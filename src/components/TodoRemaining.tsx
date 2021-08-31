import { useContext, useMemo } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoRemaining() {
  const { todosFiltered } = useContext(TodosContext);

  const remainings: number = useMemo(
    (): number => todosFiltered().length,
    [todosFiltered]
  );

  return (
    <span>
      {remainings} {remainings === 1 ? "item" : "items"} todos
    </span>
  );
}

export default TodoRemaining;
