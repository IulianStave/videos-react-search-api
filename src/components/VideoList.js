import React from 'react';

// class VideoList extends React.Component {

//   render() {
//     return (
//     <div className='ui segment'>
//       {}
//       Rendering videos from {this.props.source} 
//     </div>
//     );
//   }

// }

const VideoList = props =>{
  return (
    <div className='ui container'>
      Rendering videos from {props.source} 
    </div>
  )
}
export default VideoList;