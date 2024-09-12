import React, { useEffect, useState } from "react";
import axios from "axios";

import cl from "./PokemonCard.module.css";

const PokemonCard = () => {
  const [pokemons, setPokemons] = useState([]);

  let page = 0;

  useEffect(() => {
    const allPokemons = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}?limit=20`
      );
      const pokemonData = await Promise.all(
        response.data.results.map(async (pok) => {
          const pokResponse = await axios.get(pok.url);
          return {
            name: pokResponse.data.name,
            img: pokResponse.data.sprites.front_default,
          };
        })
      );
      setPokemons(pokemonData);
    };
    allPokemons();
  }, []);
  return (
    <div>
      {pokemons.map((pok) => (
        <div key={pok.id}>
          <img src={pok.img} alt={pok.name} />
          <div>{pok.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
