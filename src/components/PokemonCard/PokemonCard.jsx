import React, { useEffect, useState } from "react";
import axios from "axios";

import cl from "./PokemonCard.module.css";

// https://pokeapi.co/api/v2/pokemon?offset=5&limit=1
// https://pokeapi.co/api/v2/pokemon?limit=20

const PokemonCard = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const allPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      console.log(response.data);
      setPokemons(response.data.results);
    };
    allPokemons();
  }, []);
  return (
    <div>
      {pokemons.map((pok) => (
        <div>{pok.name}</div>
      ))}
    </div>
  );
};

export default PokemonCard;
