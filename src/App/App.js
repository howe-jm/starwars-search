import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import DisplayResults from '../DisplayResults/DisplayResults';

export default class App extends React.Component {
  state = {
    searchResults: {},
    apiError: false,
    apiErrorMsg: '',
    loading: false,
    className: '',
  };

  handleSearch = (formValue, topicValue) => {
    this.apiSearch(formValue, topicValue);
  };

  apiSearch = (searchTerm, searchTopic) => {
    this.setState({ loading: true, className: 'hidden' });
    Promise.all([fetch(`https://swapi-thinkful.herokuapp.com/api/${searchTopic}/?search=${searchTerm}`)])
      .then(([searchRes]) => {
        if (!searchRes.ok) return searchRes.json().then((e) => Promise.reject(e));
        return Promise.all([searchRes.json()]);
      })
      .then(([searchResults]) => {
        this.setState({ searchResults });
        this.setState({ loading: false, className: 'crawl' });
      })
      .catch((error) => {
        this.setState({ loading: false, apiError: true, apiErrorMsg: `${error}` });
      });
  };

  render() {
    return (
      <div className='App'>
        <div className='search-main'>
          <Header />
          <SearchBar handleSearch={this.handleSearch} />
          {this.state.loading && <h2>Searching...</h2>}
          {this.state.apiError && <h2>{this.state.apiErrorMsg}</h2>}
        </div>
        <div className='res-display'>
          <DisplayResults className={this.state.className} searchResults={this.state.searchResults} />
        </div>
      </div>
    );
  }
}
