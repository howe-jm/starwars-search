import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form className='search-form'>
        <label for='sw-search'>Find somebody</label>
        <input type='text' id='sw-search' name='sw-search' />
      </form>
    );
  }
}
