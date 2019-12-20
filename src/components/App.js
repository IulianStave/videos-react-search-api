import React from 'react';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../api/youtube';

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async searchTerm  => {
    // console.log(term);
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: searchTerm
      }
    });
    this.setState({videos: response.data.items, val:'Demo prop changed through setState'});
  };
  
  dataSource = {text: "Youtube"};

  render() {
    return (
      <div className="ui container">
        <h1> Videos App </h1> 
        <SearchBar whenSubmitted={this.onTermSubmit} />
        <VideoList videos={this.state.videos} source={this.dataSource.text}/>
        I have {this.state.videos.length} videos.
    </div>
    );
  }

}

export default App;
