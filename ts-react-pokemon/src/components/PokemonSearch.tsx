import React, { useRef, useCallback, useState } from "react";
import User from "../interfaces/User.interface";
import SearchState from "../interfaces/Search.interface";

const PokemonSearch = (user: User) => {
  const [searchState, setSearchState] = useState<SearchState | null>({
    error: false,
    pokemon: null
  });

  let resultMarkup: any = null;

  const inputEl = useRef(null);
  const onSearchClick = () => {
    const val = inputEl.current.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${val}`)
      .then(res => {
        if (!res.ok) {
          setSearchState({ error: true, pokemon: null });
          throw res;
        }
        return res.json();
      })
      .then(data => {
        setSearchState({
          error: false,
          pokemon: {
            name: data.name,
            numberOfAbilities: data.abilities.length,
            baseExperience: data.base_experience,
            imageUrl: data.sprites.front_default
          }
        });
      })
      .catch(err => {
        err.text().then((message: any) => alert(`[API] ${message}`));
      });
  };

  if (searchState.error)
    resultMarkup = <p>Pokemon not found, please try again!</p>;
  else if (searchState.pokemon)
    resultMarkup = (
      <div>
        <img src={searchState.pokemon.imageUrl} alt="pokemon" />
        <p>
          {searchState.pokemon.name} has {searchState.pokemon.numberOfAbilities}{" "}
          abilities and {searchState.pokemon.baseExperience} base experience
          points
        </p>
      </div>
    );
  return (
    <div>
      <div>
        <p>
          User <b>{user.name}</b>
          {user.numberOfPokemon && (
            <span>
              &nbsp; has {user.numberOfPokemon} Pokemons (
              {user.pokemons.join(", ")})
            </span>
          )}
        </p>
        <p>
          <input type="text" ref={inputEl} />
          <button onClick={onSearchClick}>Search</button>
        </p>
      </div>
      <div>{resultMarkup}</div>
    </div>
  );
};

export default PokemonSearch;
