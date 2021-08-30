import React from "react";
import PropTypes from "prop-types";

ClearCompletedTodo.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
};

function ClearCompletedTodo(props: any) {
  return (
    <button className="btn-neutral" onClick={props.clearCompleted}>
      Clear completed
    </button>
  );
}

export default ClearCompletedTodo;
