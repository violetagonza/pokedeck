import React from 'react';
const Pokemon = (props) => {
  //   const list = props.pokemons.types.map((type, index) => {
  //     return <li key={index}>{type}</li>;
  //   });
  return (
    <>
      {/* <img src={props.pokemons.url}></img> */}
      <h2>{props.pokemons.name}</h2>
      {/* <ul>{list}</ul>; */}
    </>
  );
};
export default Pokemon;
