import React from 'react';
import { take } from 'lodash';
import Modal from './Modal';
import numVideosInRow from './numVideosInRow';

export default class Videos extends React.Component {
  constructor() {
    super();

    this.state = {
      maxVideos: 8,
      videoId: null
    }
  }

  componentDidMount() {
    this.setState({
      maxVideos: numVideosInRow() * 2
    });
  }

  componentWillReceiveProps() {
    this.setState({
      maxVideos: numVideosInRow() * 2
    });
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
    const { videos } = this.props;
    const { maxVideos } = this.state;

    return (
      take(videos, maxVideos).map((v, idx) => (
        <a
          className='video-item'
          key={idx}
          onClick={() => this.showVideo(v.facebook_id)}
          onKeyPress={(e) => { e.key === 'Enter' && this.showVideo(v.facebook_id) }}
          tabIndex={idx + 2}
        >
          <img src={v.full_picture} />
        </a>)
      )
    );
  }

  get loadMoreButton() {
    const { maxVideos } = this.state;
    const { videos } = this.props;

    if (videos.length <= maxVideos) { return null }

    return (
      <button
        className='load-more-button'
        onClick={ () => this.setState({ maxVideos: maxVideos + numVideosInRow() }) }
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
