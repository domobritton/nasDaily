import React from 'react';
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import Slider from './Slider';
import Modal from './Modal';

export default class VideoTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: null,
      videos: props.videos,
    };

    this.onInputChange = debounce(this.onInputChange, 200);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      videos: nextProps.videos
    });

    this.searchInput.focus();
  }

  get search() {
    return (
      <div className='nd-search'>
        <input
          ref={ (input) => { this.searchInput = input }}
          onChange={(e) => { e.persist(); this.onInputChange(e); }}
          placeholder='Search videos by...'
        />
      </div>
    )
  }

  onInputChange = (e) => {
    const { value } = e.target;

    if (value === '') {
      this.setState({
        videos: this.props.videos
      });
    } else {
      const sortOptions = {
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'content_tags']
      }

      const fuse = new Fuse(this.props.videos, sortOptions);

      this.refs.slider && this.refs.slider.slickGoTo(0);
      this.setState({
        videos: fuse.search(value)
      });
    }
  }

  showVideo = (src) => {
    this.setState({
      videoId: src
    });

    setTimeout(() => FB.XFBML.parse());
  }

  closeModal = () => {
    this.setState({
      videoId: null
    });
  }


  get videos() {
    const { videos, videoId } = this.state;

    return (
      <div className='nd-videos'>
        <span className='slider-header'>{ `Videos (${videos ? videos.length : '0'})` }</span>
        <Slider
          ref='slider'
          videos={videos}
          onClick={this.showVideo}
        />
        <Modal
          onClose={this.closeModal}
          videoId={videoId}
        />
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
