import React from "react";
import { Route, Switch } from "react-router-dom";
import RandomDog from "./DogFromBreed";
import DogBreedsContainer from "./DogBreedsContainer";
import Favorites from "./Favorites";

class Dogs extends React.Component {
  constructor() {
    super();

    this.state = {
      favDogs: []
    };
  }

  generateId = () => {
    return Math.random().toString(32)
  };


  addToFavs = (dog) => {
  const { favDogs } = this.state;
  this.setState({
    favDogs: [...favDogs, dog]
  });
};


removeFromFavs = id => {
  console.log('CLICK REMOVE!')
   const { favDogs } = this.state;
   this.setState({
     favDogs: favDogs.filter(dog => dog !== dog)
   });
 };

 renderFavoriteDogs = () => {
  const { favDogs } = this.state;
  return <Favorites dogs={this.state.favDogs} removeFromFavs={this.removeFromFavs}/>;
};

  renderBreedsContainer = () => {
  return <DogBreedsContainer addToFavs={this.addToFavs} favDogs={this.state.favDogs} />
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/dogs/breeds" component={this.renderBreedsContainer} />
          <Route path="/dogs/random" component={RandomDog} />
          <Route path="/dogs/fav" component={this.renderFavoriteDogs} />
        </Switch>
      </div>
    );
  }
}

export default Dogs;
