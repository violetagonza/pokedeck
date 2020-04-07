import { useState } from 'react';
import React from 'react';
import PokeList from './PokeList';
import pokemons from './Data/pokemons';
function App() {
  const [info, setInfo] = useState(pokemons);
  console.log(info);

  return (
    <div>
      <PokeList pokemons={info} />
    </div>
  );
}

export default App;
