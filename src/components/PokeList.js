import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/index.css';
const PokeList = (props) => {
  console.log(props);

  const list = props.pokemons.map((pokemon, index) => {
    return (
      <li className='list--item' key={index}>
        <Pokemon pokemons={pokemon} />
      </li>
    );
  });

  return (
    <>
      <h1 className='title'>Mi lista de pokemon</h1>
      <ul className='list'>{list}</ul>
    </>
  );
};
export default PokeList;
