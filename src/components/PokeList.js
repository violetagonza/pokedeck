import React from 'react';
import Pokemon from './Pokemon';
const PokeList = (props) => {
  console.log(props);

  //   let list;
  //   for (let i = 0; i < props.pokemons.length; i++) {
  //     list = <li key={i}> {props.pokemons[i].name}</li>;
  //     return list;
  //   }

  const list = props.pokemons.map((pokemon, index) => {
    return (
      <li key={index}>
        <Pokemon pokemons={pokemon} />
      </li>
    );
  });

  return (
    <>
      <h1>Mi lista de pokemon</h1>
      <ul>
        {list}
        {/* <li>{props.pokemons[0].name}</li> */}
        {/* <Pokemon /> */}
      </ul>
    </>
  );
};
export default PokeList;
