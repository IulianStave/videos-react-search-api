import React from 'react';
import VideoList from './VideoList';


class App extends React.Component {

  render() {
    return (
      <div className='ui container'>
        <h1> Videos App </h1> 
        <h3> <VideoList/> </h3>
    </div>
    );
  }

}

export default App;