import React, { useState, useEffect } from "react";
import "../pages/MainPage.css";
import SearchInput from "../components/SearchInput";
import CardsList from "../components/CardsList";
import { IResponceData } from "../components/types/types";

const MainPage = function () {
  const [data, setData] = useState<IResponceData | null>(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.json();
      })
      .then((data: IResponceData) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1 className="page_name">Mainpage</h1>
      <SearchInput />
      {data && <CardsList {...data} />}
    </div>
  );
};

export default MainPage;
