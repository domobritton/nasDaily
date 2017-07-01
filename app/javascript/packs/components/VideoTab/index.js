import React from 'react';

export default class VideoTab extends React.Component {
  get search() {
    return (
      <div className='nd-search'>
        <input placeholder='Search videos by...'/>
      </div>
    )
  }

  get videos() {
    return (
      <div className='nd-videos'>
        Videos (num)
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.search }
        { this.videos }
      </div>
    );
  }
}
