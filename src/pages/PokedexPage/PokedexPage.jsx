import React from "react";

import cl from "./PokedexPage.module.css";

const PokedexPage = () => {
  return (
    <div className={cl.pokedex}>
      <form className={cl.form}>
        <input className={cl.input} type="text" placeholder="Поиск" />
        <button>button</button>
      </form>
    </div>
  );
};

export default PokedexPage;
