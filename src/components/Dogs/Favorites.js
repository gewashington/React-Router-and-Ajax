import React from 'react';

const Favorites = ({ dogs }) => {
  return (
    <ul>
      {dogs.map(dog =>
        <li key={dog}>
            <img alt="" src={dog} />
            <button onClick={() => this.props.removeFromFavs(dog)}> Remove from Favorites </button>
        </li>
      )}
    </ul>
  );
};

export default Favorites;
