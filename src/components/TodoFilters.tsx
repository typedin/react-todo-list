import { useContext } from "react";
import { FiltersContext } from "../context/TodosContext";

function TodoFilters() {
  const { filter, filters, setFilter } = useContext(FiltersContext);

  const handleChange = function (value: string) {
    setFilter(value);
  };

  return (
    <>
      <div className="space-x-1">
        {filters.map(
          ({
            id,
            text,
            filterValue,
          }: {
            id: number;
            text: string;
            filterValue: string;
          }): JSX.Element => (
            <button
              key={id}
              onClick={() => handleChange(filterValue)}
              className={`btn-neutral ${
                filter === filterValue ? null : "border-transparent"
              }`}
            >
              {text}
            </button>
          )
        )}
      </div>
    </>
  );
}

export default TodoFilters;
