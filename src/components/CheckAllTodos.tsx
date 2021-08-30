import React from "react";
import PropTypes from "prop-types";

TodoCheck.propTypes = {
  checkAll: PropTypes.func.isRequired,
};

function TodoCheck(props: any) {
  return (
    <button className="btn-neutral" onClick={props.checkAll}>
      Check All
    </button>
  );
}

export default TodoCheck;
