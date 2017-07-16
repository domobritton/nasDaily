import React from 'react';
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import Videos from './Videos';

export default class VideosTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: null,
      videos: props.videos,
      resetMaxVideos: true
    };

    this.onInputChange = debounce(this.onInputChange, 200);
  }

  componentDidMount() {
    this.focusInput();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      videos: nextProps.videos,
      resetMaxVideos: false
    });
  }

  focusInput() {
    this.searchInput.focus();
  }

  get search() {
    return (
      <div className='nd-search'>
        <input
          ref={ (input) => { this.searchInput = input }}
          onChange={(e) => { e.persist(); this.onInputChange(e); }}
          placeholder='Search videos by...'
          tabIndex='1'
        />
      </div>
    )
  }

  onInputChange = (e) => {
    const { value } = e.target;

    if (value === '') {
      this.setState({
        videos: this.props.videos,
        resetMaxVideos: true
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
        videos: fuse.search(value),
        resetMaxVideos: true
      });
    }
  }

  get videos() {
    const {
      videos,
      videoId,
      resetMaxVideos
    } = this.state;

    return (
      <div className='nd-videos'>
        <div className='videos-header'>{ `Videos (${videos ? videos.length : '0'})` }</div>
        <Videos videos={videos} resetMaxVideos={resetMaxVideos}/>
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
