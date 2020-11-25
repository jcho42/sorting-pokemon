/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import mergeSort from './mergesort';

const randomPoke = (size, lower, upper) => {
  const random = []
  while (size--) {
    const randNum = Math.floor(lower + Math.random() * upper)
    random.push(randNum)
  }
  return random
}

const intiialPokemon = randomPoke(150, 1, 150)

const App = () => {
  const [pokemon, setPokemon] = useState(intiialPokemon);
  const sortPokemon = () => {
    setPokemon(mergeSort(pokemon));
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello Pokemon</h1>
      <h2 style={{ textAlign: 'center' }}>Let's Get Sorted</h2>
      <button onClick={sortPokemon}>Sort!</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemon.map((id, index) => {
          return (
            <div
              // Without unique keys, the children cannot maintain their identities across updates.
              // Setting key to id, with duplicate id's cause the children to be duplicated when sorted.
              key={index}
              style={{
                border: '1px solid black',
                textAlign: 'center',
                width: '120px',
                height: '120px',
                margin: '10px',
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              />
              <div>#{id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
