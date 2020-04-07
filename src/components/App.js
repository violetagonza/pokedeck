import React from 'react';
import PokeList from './PokeList';
import pokemons from './Data/pokemons';
function App() {
  return (
    <div>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
