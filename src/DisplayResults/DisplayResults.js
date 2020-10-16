import React from 'react';
import './DisplayResults.css';

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
        return <div key={i + `swlistobj`}>{results[i].name ? `${results[i].name}` : results[i].title ? `${results[i].title}` : null}</div>;
      });
      return (
        <section className='star-wars'>
          <div className={this.props.className}>
            <div className='results-body'>
              <h2>Search Results</h2>
              {resultString}
            </div>
          </div>
        </section>
      );
    }
  }
}
