import React, { useState } from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";

const PokedexPage = () => {
  const [page, setPage] = useState(0);

  return (
    <div className={cl.pokedex}>
      <Form />
      <Pagination onPageChange={setPage} />
      <PokemonCard page={page} />
    </div>
  );
};

export default PokedexPage;
