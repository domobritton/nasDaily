import React from 'react';
import SlickSlider from 'react-slick';
import SliderArrow from './SliderArrow';

export default class Slider extends React.Component {
  get videoLinks() {
    const { videos, onClick } = this.props;

    if (videos.length === 0) {
      return <div />
    }

    return videos.map(
      (v, idx) => (
        <span key={idx} className='nd-slider-item'>
          <a onClick={() => onClick(v.id)}>
            <img src={v.picture}/>
          </a>
        </span>
      )
    );
  }

  render() {
    const { videos } = this.props;

    if (videos === null) { return null }

    const sliderSettings = {
      ref: 'slider',
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SliderArrow direction='next' />,
      prevArrow: <SliderArrow direction='prev' />,
      lazyLoad: 'ondemand',
      initialSlide: 0,
      vertical: false,
      verticalSwiping: false,
      draggable: false,
      touchThreshold: 200,
      responsive: [
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            vertical: true,
            verticalSwiping: true,
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
        },
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }
      ]
    };

    return (
      <div className='nd-slider'>
        <SlickSlider {...sliderSettings}>
          { this.videoLinks }
        </SlickSlider>
      </div>
    );
  }
}

