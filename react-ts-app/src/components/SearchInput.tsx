import React, { useEffect, useState, useRef } from "react";
import "./SearchInput.css";

const SearchInput = function () {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("inputValue") || ""
  );

  const refSearch = useRef<string>();

  useEffect(() => {
    refSearch.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem("inputValue", refSearch.current || "");
    };
  }, []);

  return (
    <div className="search_input_wrapper">
      <input
        data-testid="input_test_search"
        type="search"
        className="input_search"
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchInput;
