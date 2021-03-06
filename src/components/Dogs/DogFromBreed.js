import React from "react";
import dogAPI from "../../api/dogAPI";
import Dog from "./Dog";

class DogFromBreed extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: ""
    };
  }

  getPicture = () => {
    const { breed } = this.props;
    this.setState({ imageURL: "" });
    dogAPI.getRandomDogWithBreed(breed).then(response => {
      this.setState({ imageURL: response.data.message });
    });
  };

  componentDidMount() {
    this.getPicture();
  }

  addToFavs = () => {
    this.props.addToFavs(this.state.imageURL)
    console.log("Dog saved!")
  };

  removeFromFavs = () => {
    this.props.removeFromFavs(this.state.imageURL)
    console.log("Dog filtered out!")
  }

  render() {
    console.log("Dog from Breed Props:", this.props)
    const { imageURL } = this.state;
    const { breed } = this.props;
    return (
      <div>
        <h2>{breed}</h2>
        <Dog imageURL={imageURL} onClick={this.getPicture} />
        <button onClick={this.getPicture}> One More </button>
        <button onClick={this.addToFavs}> Add To Favorites </button>
      </div>
    );
  }
}

export default DogFromBreed;
