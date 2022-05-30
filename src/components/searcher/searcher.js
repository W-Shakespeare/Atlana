import React from "react";
import "./style.scss";

export const Searcher = ({
  onChange = (arr) => {},
  searcherList = [],
  searchrByField = "",
  className = "",
  placeholder = "Search",
}) => {
  const onWillChange = (e) => {
    const searchedList = searcherList.filter((it) =>
      it[searchrByField].toLowerCase().includes(e.target.value.toLowerCase())
    );
    onChange(searchedList);
  };

  return (
    <input
      type="text"
      className={`searcher ${className}`}
      onChange={onWillChange}
      placeholder={placeholder}
    />
  );
};
