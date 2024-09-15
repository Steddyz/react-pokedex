import React from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";

const PokedexPage = () => {
  return (
    <div className={cl.pokedex}>
      <Form />
      <Pagination />
      <PokemonCard />
    </div>
  );
};

export default PokedexPage;
