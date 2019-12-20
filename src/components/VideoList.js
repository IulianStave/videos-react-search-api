import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect, source }) => {
  // props.videos
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video}/>;
  });
  return (
    <div className="ui relaxed divided list">
      Rendering videos from {source}:
       {renderedList}
    </div>
  );
}

export default VideoList;
