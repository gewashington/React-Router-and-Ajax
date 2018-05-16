import React from 'react';

const Favorites = ({ dogs }) => {
  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog}>
            <img alt="" src={dog} />
        </li>
      ))}
    </ul>
  );
};

export default Favorites;
