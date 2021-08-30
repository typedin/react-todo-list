import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

function TodoForm(props: any) {
  const [todoInput, setTodoInput] = useState("");

  function handleChange(event: any): void {
    setTodoInput(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }
    props.addTodo(todoInput);
    setTodoInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full shadow-sm rounded mt-4 p-3"
        placeholder="What do you need to do?"
        value={todoInput}
        onChange={handleChange}
      />
    </form>
  );
}

export default TodoForm;
