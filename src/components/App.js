import React from 'react';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import youtube, { baseParams } from '../api/youtube';

const defaultTerm ='react applications';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // add a default search when application first loads
  componentDidMount() {
    this.onTermSubmit(defaultTerm);
  }

  onTermSubmit = async searchTerm  => {
    // console.log(term);
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo:response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    // console.log('From the app!',video);
    this.setState ({ selectedVideo: video });
  };
  
  dataSource = {text: "Youtube"};
  
  render() {
    return (
      <div className="ui container">
        <h1> Videos App </h1> 
        <SearchBar whenSubmitted={this.onTermSubmit} />
       
      <div className="ui grid">
         <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} 
                source={this.dataSource.text}
              />
            </div>
         </div>
      </div>
      
    </div>
    );
  }

}

export default App;
