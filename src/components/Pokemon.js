import React from 'react';
const Pokemon = (props) => {
  const list = props.pokemons.types.map((type, index) => {
    return (
      <li className='list--item--types' key={index}>
        {type}
      </li>
    );
  });
  return (
    <>
      <img src={props.pokemons.url} alt={props.pokemons.name}></img>
      <h2 className='list--item__title'>{props.pokemons.name}</h2>
      <ul>{list}</ul>
    </>
  );
};
export default Pokemon;
