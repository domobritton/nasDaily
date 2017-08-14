import React from 'react';
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import Videos from './Videos';
import classnames from 'classnames';

export default class VideosTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: null,
      videos: props.videos,
      resetMaxVideos: true,
      inputValue: ''
    };

    this.asyncOnChange = debounce(this.asyncOnChange, 200);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      videos: nextProps.videos,
      resetMaxVideos: false
    });
  }

  get search() {
    const { inputValue } = this.state;

    return (
      <div className='nd-search'>
        <div className='input-wrapper'>
          <input
            onChange={(e) => { e.persist(); this.onInputChange(e.target.value); }}
            onKeyPress={(e) => { e.key === 'Enter' && this.searchInput.blur()}}
            placeholder='Search videos...'
            tabIndex='1'
            ref={(ref) => (this.searchInput = ref)}
            value={inputValue}
            spellCheck={false}
          />
          <span className='input-highlight'>
            { inputValue.replace(/ /g, "\u00a0") }
          </span>
          <span
            className={classnames('cancel-input', { active: inputValue.length > 0})}
            onClick={() => this.onInputChange('')}
          >
            x
          </span>
        </div>
      </div>
    )
  }

  asyncOnChange(value) {
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

      this.setState({
        videos: fuse.search(value),
        resetMaxVideos: true
      });
    }
  }

  onInputChange = (value) => {
    this.setState({
      inputValue: value
    });

    this.asyncOnChange(value);
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
