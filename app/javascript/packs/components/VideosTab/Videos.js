import React from 'react';
import { take } from 'lodash';
import $ from 'jquery';
import { debounce } from 'lodash';
import { Preload } from 'react-preload';
import { Loader } from 'react-loaders';
import Modal from './Modal';
import numVideosInRow from './numVideosInRow';
import initialNumRows from './initialNumRows';
import { isMobile, isTablet } from '../../util/viewportSize';

export default class Videos extends React.Component {
  constructor() {
    super();

    this.state = {
      maxNumRows: initialNumRows() * 2,
      videoId: null,
      loading: false
    }

    this.loadMore = this.loadMore.bind(this);
  }

  componentWillUnmount() {
    $(window).off('scroll');
  }

  componentWillReceiveProps(nextProps) {
    const { resetMaxVideos } = nextProps;

    if (!resetMaxVideos) { return null }

    this.setState({
      maxNumRows: initialNumRows() * 2
    });
  }

  componentDidMount() {
    this.setState({});

    this.setupInfiniteScrollListener();
  }

  setupInfiniteScrollListener() {
    if (!isMobile() && !isTablet()) { return }

    $(window).scroll(() => {
      if($(window).scrollTop() + $(window).height() >= $(document).height() - 1000) {
        const { loading } = this.state;
        if (loading) { return }

        this.setState({loading: true});
        this.loadMore({ animate: false });
      }
    });
  }

  showVideo = (src) => {
    this.setState({
      videoId: src
    });
  }

  closeModal = () => {
    this.setState({
      videoId: null
    });
  }

  get videos() {
    const { videos } = this.props;
    const { maxNumRows } = this.state;
    const videosPerRow = numVideosInRow();
    const maxNumVideos = maxNumRows * videosPerRow;
    const numVideos = videos.length < maxNumVideos ? videos.length : maxNumVideos;
    const videosToShow = videos.slice(0, numVideos);

    let chunks = [];
    for (let i = 0; i < numVideos; i += videosPerRow) {
      chunks.push(videosToShow.slice(i, i + videosPerRow));
    }

    return (
      <div>
        { chunks.map((row, rowIdx) => (
          <Preload
            images={videosToShow.map((v) => v.full_picture)}
            loadingIndicator={<span/>}
            key={rowIdx}
            onSuccess={() => this.setState({loading: false})}
          >
            <div className="row">
              <div className="row__inner">
                { row.map((v, itemIdx) => (
                  <div
                    className="tile"
                    key={itemIdx}
                    onClick={() => this.showVideo(v.facebook_id)}
                    onKeyPress={(e) => { e.key === 'Enter' && this.showVideo(v.facebook_id) }}
                  >
                    <div className="tile__media">
                      <img
                        className="tile__img"
                        data-id={v.facebook_id}
                        src={v.full_picture}
                        alt={v.title}
                      />
                    </div>
                    <div
                      className="tile__details"
                      tabIndex='0'
                    >
                      <div className="tile__title" />
                    </div>
                  </div>))
                }
              </div>
            </div>
          </Preload>))
        }
      </div>
    );
  }

  loadMore({ animate=true }) {
    const { maxNumRows } = this.state;

    if (animate) {
      $('html, body').animate({ scrollTop: $('#load-more-button').position().top - 70 }, 750, 'swing');
    }

    this.setState({
      maxNumRows: maxNumRows + initialNumRows()
    });
  }

  get loadMoreButton() {
    const { maxNumRows } = this.state;
    const { videos } = this.props;

    if (videos.length <= (maxNumRows * numVideosInRow())) { return null }

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
    const { videos } = this.props;

    return (
      <div>
        <div className='videos-rows'>
          { this.videos }
          { videoId && <Loader type="pacman" active={true} className='nd-modal-loader'/> }
          <Modal
            onClose={this.closeModal}
            videoId={videoId}
            videos={videos}
          />
        </div>
        { this.loadMoreButton }
      </div>
    );
  }
}
