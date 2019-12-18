import React from 'react';

class SearchBar extends React.Component {

onFormSubmit = event => {
  event.preventDefault();
}
  
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="searchInput">Search for videos:</label>
            <input type="text" className="ui input" id="searchInput"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;