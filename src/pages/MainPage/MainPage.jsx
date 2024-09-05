import React from "react";

import cl from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={cl.main}>
      <div>
        <h1>POKEDEX</h1>
      </div>
      <div className={cl.random}>Рандомный покемон</div>
    </div>
  );
};

export default MainPage;
