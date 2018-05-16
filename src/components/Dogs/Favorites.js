import React from 'react';

const Favorites = (props) => (
  <div>
        <button onClick={props.removeFromFavs}> Remove from Favorites </button>
        <button onClick={props.addToFavs}> Add To Favorites </button>
        {props.dogs}
        {console.log(props)}
</div>

)

export default Favorites;
