import React from 'react';
import VideoList from './VideoList';
import SearchBar from './SearchBar';


class App extends React.Component {
  
  dataSource = {text: "Youtube"};

  render() {
    return (
      <div className="ui container">
        <h1> Videos App </h1> 
        <SearchBar />
        <h3> <VideoList source={this.dataSource.text}/> </h3>
    </div>
    );
  }

}

export default App;