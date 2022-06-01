import React, { FC } from "react";
import "./style.scss";

interface Props {
  onChange: (arr: Array<any>) => void;
  searcherList: Array<any>;
  searchrByField: string;
  className?: string;
  placeholder?: string;
}

export const Searcher: FC<Props> = ({
  onChange = (arr) => {},
  searcherList = [],
  searchrByField = "",
  className = "",
  placeholder = "Search",
}) => {
  const onWillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
