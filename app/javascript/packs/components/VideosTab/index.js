import React from 'react';
import Fuse from 'fuse.js';
import $ from 'jquery';
import { debounce } from 'lodash';
import Videos from './Videos';
import classnames from 'classnames';
import Header from '../App/Header'
import CountTo from 'react-count-to';
export default class VideosTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: null,
      videos: props.videos,
      resetMaxVideos: true,
      inputValue: '',
    };
    
    this.asyncOnChange = debounce(this.asyncOnChange, 200);
  }

  componentDidMount() {
    $('.footer').hide();
    setTimeout(function () {
      $('.footer').show();
    }, 5000);
    setTimeout(() => {
      $('#search').attr('placeholder', 'SEARCH VIDEOS');
    }, 650);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      videos: nextProps.videos,
      resetMaxVideos: false
    });
  }

  get search() {
    const { inputValue, videos } = this.state;
    const length = videos.length
    return (
      <div className='nd-search'>
        <div className='input-wrapper'>
        <div className='search-icon animated fadeIn'><img src='/assets/search_icon.svg' /></div>
        <div className='videos-header animated fadeIn'>
          <CountTo className='vid-count' delay={500} to={length} speed={2500} />
         Videos
        </div>
        {/* <div className='videos-header animated fadeIn'>{ videos ? <div className='vid-count'>{length}</div> : '0'} Videos</div> */}
          <input
            id='search'
            className='animated slideInUp'
            onChange={(e) => { e.persist(); this.onInputChange(e.target.value); }}
            onKeyPress={(e) => { e.key === 'Enter' && this.searchInput.blur()}}
            placeholder=''
            tabIndex='1'
            ref={(ref) => (this.searchInput = ref)}
            value={inputValue}
            spellCheck={false}
          />
          <span className='input-highlight'>
            { inputValue.replace(/ /g, '\u00a0') }
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
    this.hideSearchIcon(value);
    this.asyncOnChange(value);
  }

  hideSearchIcon(value) {
    if (value) {
      $('.search-icon').addClass('active');
    } else {
      $('.search-icon').removeClass('active');
    }
  }

  get videos() {
    const {
      videos,
      videoId,
      resetMaxVideos
    } = this.state;
      return (
        <div className='nd-videos animated fadeIn'>
          <Videos videos={videos} resetMaxVideos={resetMaxVideos}/>
        </div>
      )
  }

  render() {
    return (
      <div className='videos-page'>
      <Header />
        { this.search }
        { this.videos }
      </div>
    );
  }
}
