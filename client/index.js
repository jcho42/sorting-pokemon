/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const pokemonIds = [25, 9, 3, 34, 57, 131];
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello Pokemon</h1>
      <h2 style={{ textAlign: 'center' }}>Let's Get Sorted</h2>
      <button>Sort!</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemonIds.map((id) => {
          return (
            <div
              key={id}
              style={{
                border: '1px solid black',
                width: '120px',
                height: '120px',
                margin: '10px',
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              />
              <div style={{ textAlign: 'center' }}>#{id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
