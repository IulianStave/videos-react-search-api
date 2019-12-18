import React from 'react';

const VideoList = props => {
// props.videos
  return (
    <div className="ui segment">
      Rendering videos from {props.source}:
      {props.videos.length} 
    </div>
  )
}

export default VideoList;
