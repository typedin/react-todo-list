import React, { useState } from "react";
import PropTypes from "prop-types";

TodoFilters.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

function TodoFilters(props: any) {
  function handleChange(filter: string) {
    props.onChange(filter);
  }
  const buttonValues = [
    {
      text: "All",
      filter: "all",
    },
    {
      text: "Active",
      filter: "active",
    },
    {
      text: "Completed",
      filter: "completed",
    },
  ];
  return (
    <>
      <div className="space-x-1">
        {buttonValues.map(({ text, filter }) => (
          <button
            onClick={() => handleChange(filter)}
            className={`btn-neutral ${
              props.filter === filter ? null : "border-transparent"
            }`}
          >
            {text}
          </button>
        ))}
      </div>
    </>
  );
}

export default TodoFilters;
