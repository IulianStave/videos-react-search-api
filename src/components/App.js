import React from 'react';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../api/youtube';

class App extends React.Component {
  
  onTermSubmit = (term) => {
    // console.log(term);
    youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });
  };
  
  dataSource = {text: "Youtube"};

  render() {
    return (
      <div className="ui container">
        <h1> Videos App </h1> 
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList source={this.dataSource.text}/>
    </div>
    );
  }

}

export default App;
