import React from 'react';

const PokeList = (props) => {
  //   const list = props.pokemons.name.map((pokemon, index) => {
  //     return <li key={index}>{pokemon}</li>;
  //   });

  return (
    <>
      <h1>Mi lista de pokemon</h1>
      <ul>
        <li>{props.pokemons[0].name}</li>
      </ul>
    </>
  );
};
export default PokeList;
