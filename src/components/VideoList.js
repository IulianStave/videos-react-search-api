import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, source }) => {
  // props.videos
  const renderedList = videos.map((video) => {
    return <VideoItem video={video}/>;
  });
  return (
    <div className="ui relaxed divided list">
      Rendering videos from {source}:
       {renderedList}
    </div>
  );
}

export default VideoList;
