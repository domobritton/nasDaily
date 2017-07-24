import React from 'react';
import { take } from 'lodash';
import Modal from './Modal';
import numVideosInRow from './numVideosInRow';
import $ from 'jquery';

export default class Videos extends React.Component {
  constructor() {
    super();

    this.state = {
      maxVideos: 8,
      videoId: null
    }

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.setState({
      maxVideos: numVideosInRow() * 2
    });
  }

  componentWillReceiveProps(nextProps) {
    const { resetMaxVideos } = nextProps;

    if (!resetMaxVideos) { return null }

    this.setState({
      maxVideos: numVideosInRow() * 2
    });
  }

  showVideo = (src) => {
    this.setState({
      videoId: src
    });

    setTimeout(() => FB.XFBML.parse(document.querySelector('.react-modal')));
  }

  closeModal = () => {
    this.setState({
      videoId: null
    });
  }

  get videos() {
    const { videos } = this.props;
    const { maxVideos } = this.state;

    return (
      take(videos, maxVideos).map((v, idx) => (
        <a
          className='video-item'
          key={idx}
          data-id={v.facebook_id}
          onClick={() => this.showVideo(v.facebook_id)}
          onKeyPress={(e) => { e.key === 'Enter' && this.showVideo(v.facebook_id) }}
          tabIndex={idx + 2}
        >
          <img src={v.full_picture} />
        </a>)
      )
    );
  }

  loadMore() {
    const { maxVideos } = this.state;

    $('html, body').animate({ scrollTop: $('#load-more-button').position().top - 70 }, 750, 'swing');

    this.setState({
      maxVideos: maxVideos + numVideosInRow() * 2
    });
  }

  get loadMoreButton() {
    const { maxVideos } = this.state;
    const { videos } = this.props;

    if (videos.length <= maxVideos) { return null }

    return (
      <button
        className='load-more-button'
        id='load-more-button'
        onClick={ this.loadMore }
      >
        Load more
      </button>
    );
  }

  render() {
    const { videoId } = this.state;

    return (
      <div>
        <div className='videos-rows'>
          { this.videos }
          <Modal
            onClose={this.closeModal}
            videoId={videoId}
          />
        </div>
        { this.loadMoreButton }
      </div>
    );
  }
}
