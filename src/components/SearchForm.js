import React from 'react';

const SearchForm = (props) => {
  return (
    <form onSubmit={props.searchBreeds}>
      <input type="text" name="searchForm" onChange={props.searchBreeds} />
      <button>Submit</button>
    </form>
  );

}

export default SearchForm;
