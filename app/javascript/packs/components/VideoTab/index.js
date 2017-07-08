import React from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import SliderArrow from './SliderArrow';
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import { isMobile } from '../../util/viewportSize';

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
        keys: ['title']
      }

      const fuse = new Fuse(this.props.videos, sortOptions);

      this.refs.slider && this.refs.slider.slickGoTo(0);
      this.setState({
        videos: fuse.search(value)
      });
    }
  }

  showVideo(src) {
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

  get modal() {
    const { videoId } = this.state;

    if (!videoId) { return null }

    const modalStyles = {
      overlay: {
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      content: {
        padding: 0,
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        borderRadius: '10px',
        overflow: 'hidden',
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
      }
    }

    return (
      <Modal
        isOpen={true}
        contentLabel="Modal"
        onRequestClose={this.closeModal}
        style={modalStyles}
      >
        <div
          className="fb-video"
          data-href={ `https://www.facebook.com/facebook/videos/${videoId}/` }
          data-width={1280}
          data-show-text={false}
          data-autoplay={false}
          style={{ marginLeft: '-2px', maxWidth: 'calc(100% + 4px)' }}
        >
          <div className="fb-xfbml-parse-ignore">
            <blockquote cite={`https://www.facebook.com/facebook/videos/${videoId}/`}>
            </blockquote>
          </div>
        </div>
      </Modal>
    );
  }

  get videoLinks() {
    const { videos } = this.state;

    if (videos.length === 0) {
      return <div />
    }

    return videos.map(
      (v, idx) => (
        <span key={idx} className='nd-slider-item'>
          <a onClick={() => this.showVideo(v.id)}>
            <img src={v.picture}/>
          </a>
        </span>
      )
    );
  }

  get slider() {
    const { videos } = this.state;

    if (videos === null) { return null }

    const sliderSettings = {
      ref: 'slider',
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SliderArrow direction='next' />,
      prevArrow: <SliderArrow direction='prev' />,
      lazyLoad: true,
      initialSlide: 0,
      vertical: false,
      verticalSwiping: false,
      draggable: false,
      responsive: [
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            vertical: true,
            verticalSwiping: true,
            draggable: true,
            touchThreshold: 100
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1228,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
      ]
    };

    return (
      <div className='nd-slider'>
        <Slider {...sliderSettings}>
          { this.videoLinks }
        </Slider>
      </div>
    );
  }

  get videos() {
    const { videos } = this.state;

    return (
      <div className='nd-videos'>
        <span className='slider-header'>{ `Videos (${videos ? videos.length : '0'})` }</span>
        { this.slider }
        { this.modal }
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
