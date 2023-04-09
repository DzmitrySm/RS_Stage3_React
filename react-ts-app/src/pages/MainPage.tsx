import React, { useState, useEffect } from "react";
import "../pages/MainPage.css";
import SearchInput from "../components/SearchInput";
import CardsList from "../components/CardsList";
import { IResponceData } from "../components/types/types";

const MainPage = function () {
  const [data, setData] = useState<IResponceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = (data: IResponceData | null) => {
    setData(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetch shit");
          }
          return res.json();
        })
        .then((data: IResponceData) => {
          setData(data);
          setIsLoading(false);
          console.log(data);
        })
        .catch((err) => console.log(err.message));
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="page_name">Mainpage</h1>
      {isLoading && <div>Loading...</div>}
      <SearchInput onSubmit={handleSubmit} />
      {data && <CardsList {...data} />}
    </div>
  );
};

export default MainPage;
