import React from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import SliderArrow from './SliderArrow';

export default class VideoTab extends React.Component {
  constructor() {
    super();

    this.state = {
      videoIframe: null
    };
  }

  get search() {
    return (
      <div className='nd-search'>
        <input placeholder='Search videos by...'/>
      </div>
    )
  }

  showVideo(iframe) {
    this.setState({
      videoIframe: iframe
    });
  }

  closeModal = () => {
    this.setState({
      videoIframe: null
    });
  }

  get modal() {
    const { videoIframe } = this.state;

    if (!videoIframe) { return null }

    return (
      <Modal
        isOpen={true}
        contentLabel="Modal"
        onRequestClose={this.closeModal}
        style={{ overlay: { zIndex: 3 } }}
      >
        <div dangerouslySetInnerHTML={{ __html: videoIframe }} />
      </Modal>
    );
  }

  get videos() {
    const { videos } = this.props;

    if (videos.length === 0) {
      return null;
    }

    const videoLinks = videos.map(
      (v, idx) => (
        <span key={idx} className='nd-slider-item'>
          <a onClick={() => this.showVideo(v.embed_html)}>
            <img src={v.picture}/>
          </a>
        </span>
      )
    );

    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SliderArrow direction='next' />,
      prevArrow: <SliderArrow direction='prev' />,
    };

    return (
      <div className='nd-videos'>
        <span className='slider-header'>{ `Videos (${videos.length})` }</span>
        <div className='nd-slider'>
          <Slider {...sliderSettings}>
            { videoLinks }
          </Slider>
        </div>
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
