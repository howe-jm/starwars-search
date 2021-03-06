import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formValue: '', searchSubj: 'films', formError: false };
  }

  formSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.formValue, this.state.searchSubj);
  };

  render() {
    return (
      <div className='form-container'>
        <form
          className='search-form'
          onSubmit={
            !this.state.formValue || this.state.formValue === ''
              ? (event) => {
                  event.preventDefault();
                  this.setState({ formError: true });
                }
              : this.formSubmit
          }
        >
          <label>
            <select className='selection-menu' value={this.state.searchFor} onChange={(event) => this.setState({ formError: false, searchSubj: event.target.value })}>
              <option value='films'>Films</option>
              <option value='people'>People</option>
              <option value='planets'>Planets</option>
              <option value='species'>Species</option>
              <option value='starships'>Starships</option>
              <option value='vehicles'>Vehicles</option>
            </select>
            <input type='text' className='search-field' id='sw-search' name='sw-search' onChange={(event) => this.setState({ formError: false, formValue: event.target.value })} />
            <input type='submit' value='Submit' className='submit-button' />
            {this.state.formError && <h2>Fool! You can't search for NOTHING!</h2>}
          </label>
        </form>
      </div>
    );
  }
}
