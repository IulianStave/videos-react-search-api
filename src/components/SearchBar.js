import React from 'react';

class SearchBar extends React.Component {
state = {term: ''};

onInputChange = (event) => {
  this.setState({term: event.target.value});
};

onFormSubmit = (event) => {
  event.preventDefault();
  
};
  
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="searchInput">Search for videos:</label>
            <input 
              type="text" 
              className="ui input" 
              id="searchInput"
              value={this.state.term}
              // onChange={e => this.setState({term: e.target.value})}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;