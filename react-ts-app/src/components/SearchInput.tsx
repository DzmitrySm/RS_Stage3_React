import React, { useEffect, useState, useRef } from "react";
import "./SearchInput.css";
import { IResponceData, IOnSubmitProps } from "./types/types";

const SearchInput = function ({ onSubmit }: IOnSubmitProps) {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("inputValue") || ""
  );

  const [, setData] = useState<IResponceData | null>(null);

  const refSearch = useRef<string>();

  useEffect(() => {
    refSearch.current = searchValue;
  }, [searchValue]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSearchValue(refSearch.current || "");
    localStorage.setItem("inputValue", searchValue);
    setTimeout(() => {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${localStorage.getItem(
          "inputValue"
        )}`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("There are no items");
          }
          return res.json();
        })
        .then((data: IResponceData) => {
          console.log(data);
          setData(data);
          onSubmit(data);
        })
        .catch((err) => {
          console.log(err.message);
          onSubmit(null);
        });
    }, 1000);
  };

  return (
    <form className="search_input_wrapper" onSubmit={handleSubmit}>
      <input
        data-testid="input_test_search"
        type="search"
        className="input_search"
        defaultValue={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      ></input>
      <button type="submit" className="button_submit">
        Enter
      </button>
    </form>
  );
};

export default SearchInput;
