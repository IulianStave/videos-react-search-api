import React from 'react';

const VideoList = ({videos, source }) => {
// props.videos
  return (
    <div className="ui segment">
      Rendering videos from {source}:
      {videos.length} 
    </div>
  );
}

export default VideoList;
