import React from "react";
import PropTypes from "prop-types";

TodoRemaining.propTypes = {
  todos: PropTypes.array.isRequired,
};

function TodoRemaining(props: any) {
  return (
    <span>
      {props.todos.length} {props.todos.length === 1 ? "item" : "items"} todos
    </span>
  );
}

export default TodoRemaining;
