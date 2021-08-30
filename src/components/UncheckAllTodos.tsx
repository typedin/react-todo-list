import React from "react";
import PropTypes from "prop-types";

UncheckAllTodos.propTypes = {
  uncheckAll: PropTypes.func.isRequired,
};

function UncheckAllTodos(props: any) {
  return (
    <button className="btn-neutral" onClick={props.uncheckAll}>
      Uncheck All
    </button>
  );
}

export default UncheckAllTodos;
