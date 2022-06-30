import React from "react";
import PropTypes from 'prop-types'

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter }  = props;
  console.log(selected)

  return (
    <div className="toolbar">
     {filters.map((filter) => (
        <button key={filter} className={ filter === selected ? "activeButton" : "noActiveButton" } onClick={onSelectFilter}>{filter}</button>
     ))
        }
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.string,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};