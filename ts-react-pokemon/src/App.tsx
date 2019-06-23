import React from "react";
import "./App.css";
import PokemonSearch from "./components/PokemonSearch";

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch
        name="John"
        numberOfPokemon={5}
        pokemons={["pikachu", "snorlax", "ditto", "venusaur", "zygarde"]}
      />
    </div>
  );
};

export default App;
