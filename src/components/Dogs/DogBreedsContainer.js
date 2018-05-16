import React from "react";
import { Route, Switch } from "react-router-dom";
import dogAPI from "../../api/dogAPI";
import DogBreedList from "./DogBreedList";
import DogFromBreed from "./DogFromBreed";
import SearchForm from "../../components/SearchForm";

class DogBreeds extends React.Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      searchTerm: ''
    };
  }

  getDogBreeds = () => {
    dogAPI.getMasterBreeds().then(response => {
      this.setState({ breeds: response.data.message });
    });
  };

  componentDidMount() {
    this.getDogBreeds();
  }

  searchBreeds = (e) => {
    e.preventDefault();
    // const searchTerm = e.target.elements.searchForm.value.toLowerCase()
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm) {
    const filteredBreeds = this.state.breeds.filter(function(dogs) {
      let searchValue = dogs.toLowerCase();
      return searchValue.indexOf(searchTerm) !== -1;
    });

    this.setState({
      breeds: filteredBreeds
    });
  }

  else { return  }
    // if (searchTerm) {
    //   let newBreeds = this.state.breeds.filter((dog)=>{
    //   return dog.indexOf(searchTerm.toLowerCase()) !== -1
    // });
    //   this.setState({
    //     breeds: newBreeds,
    //     searchTerm: searchTerm
    //         })
    // }
    // handleSearch: function(event) {
    //    var searchQuery = event.target.value.toLowerCase();
    //    var displayedContacts = CONTACTS.filter(function(el) {
    //      var searchValue = el.name.toLowerCase();
    //
    //      return searchValue.indexOf(searchQuery) !== -1;
    //    });
    //
    //    this.setState({
    //      displayedContacts: displayedContacts
    //    });
    //  },



  }

  renderBreedsList = () => {
    const { breeds } = this.state;
    return (
      <div>
        <SearchForm searchBreeds={this.searchBreeds}/>
        <h2> Master Breeds </h2>
        <DogBreedList breeds={breeds} />
      </div>
    );
  };

  renderDogWithBreed = props => {
    const { breed } = props.match.params;
    return <DogFromBreed breed={breed} addToFavs={this.props.addToFavs} removeFromFavs={this.props.removeFromFavs} favDogs={this.props.favDogs} />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/dogs/breeds" render={this.renderBreedsList} />
        <Route path="/dogs/breeds/:breed" render={this.renderDogWithBreed} />
      </Switch>
    );
  }
}

export default DogBreeds;
