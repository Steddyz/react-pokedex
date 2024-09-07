import React from "react";

import cl from "./RandomPokemon.module.css";

const RandomPokemon = () => {
  return (
    <div className={cl.random}>
      <div className={cl.random__wrapper}></div>
      <p>Рандомный покемон</p>
    </div>
  );
};

export default RandomPokemon;
