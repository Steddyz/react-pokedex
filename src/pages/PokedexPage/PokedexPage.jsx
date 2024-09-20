import React, { useState } from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";

const PokedexPage = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <div className={cl.pokedex}>
      <Form onSearch={setSearch} />
      <Pagination onPageChange={setPage} />
      <PokemonCard page={page} search={search} />
    </div>
  );
};

export default PokedexPage;
