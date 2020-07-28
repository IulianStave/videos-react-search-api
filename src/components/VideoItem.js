import './VideoItem.css';
import React from 'react';

// communicate from child component to parent App through
// callback method onVideoSelect to get SelectedVideo
export const htmlDecode =(input)=> {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

const VideoItem = ({ video, onVideoSelect }) => {


  return (
    <div onClick ={() => onVideoSelect(video)} className="video-item item">
      <img 
        className="ui image" 
        src={ video.snippet.thumbnails.medium.url }
        alt={ video.snippet.title }
      />
      <div className="content">
        <div className="header">
          {htmlDecode(video.snippet.title)}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;