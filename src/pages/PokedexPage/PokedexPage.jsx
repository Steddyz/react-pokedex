import React from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const PokedexPage = () => {
  return (
    <div className={cl.pokedex}>
      <Form />
      <PokemonCard />
    </div>
  );
};

export default PokedexPage;
