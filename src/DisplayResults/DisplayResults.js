import React from 'react';

export default class DisplayResults extends React.Component {
  render() {
    if (this.props.searchResults.count === 0 || !this.props.searchResults.count) {
      return (
        <div>
          <h2>{this.props.searchResults.count === 0 ? 'No results found!' : null}</h2>
        </div>
      );
    } else {
      const { results } = this.props.searchResults;
      const resultString = results.map((obj, i) => {
        return <div key={i}>{results[i].name ? `Name: ${results[i].name}` : results[i].title ? `Title: ${results[i].title}` : null}</div>;
      });
      return (
        <div>
          <h2>{resultString}</h2>
        </div>
      );
    }
  }
}
