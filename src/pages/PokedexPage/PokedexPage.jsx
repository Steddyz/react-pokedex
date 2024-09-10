import React from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";

const PokedexPage = () => {
  return (
    <div className={cl.pokedex}>
      <Form />
    </div>
  );
};

export default PokedexPage;
