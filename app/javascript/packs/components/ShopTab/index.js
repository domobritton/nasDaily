import React from 'react';
import Slider from 'react-slick';
import FacebookPlayer from 'react-facebook-player';
import ReactModal from 'react-modal';
import { sliderSettings } from './constants';
import { modalStyles } from '../VideosTab/constants';
import facebookAppId from '../../util/facebookAppId';
import ShopTabForm from './Form';

export default class ShopTab extends React.Component {
  constructor() {
    super();

    this.state = {
      openedModal: false,
    }
  }

  get videoModal() {
    const { openedModal } = this.state;

    return (
      <ReactModal
        isOpen={openedModal}
        contentLabel="Modal"
        onRequestClose={() => this.setState({openedModal: false})}
        style={modalStyles}
        className='react-modal'
      >
        <FacebookPlayer
          appId={ facebookAppId() }
          videoId={ '710129232472565' }
          id={ 'video-id-710129232472565' }
          onReady={(_id, player) => { player.unmute(); player.play() }}
        />
      </ReactModal>
    );
  }

  get slider() {
    return (
      <Slider
        { ...sliderSettings }
        ref={(ref) => this.sliderElement = ref}
      >
        <div className='landing'>
          <div className='landing--left'>
            <div className='landing--left-background'/>
            <div className='landing--left-content'>
              <h2><span className='yellow-color'>The</span> Story</h2>
              <p>Watch the video behind the story of Nas Daily T-shirts</p>
              <a
                className='shop-cta'
                onClick={() => this.setState({openedModal: true})}
              >
                Watch now
              </a>
            </div>
          </div>
          <div className='landing--right'>
            <div className='landing--right-background'/>
            <div className='landing--right-content'>
              <h2><span className='yellow-color'>The</span> Tshirt</h2>
              <p>Custom made for you</p>
              <a
                className='shop-cta'
                onClick={() => this.sliderElement.slickNext()}
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className='form-section'>
          <ShopTabForm />
        </div>
      </Slider>
    );
  }

  render() {
    return (
      <div className='nd-shop'>
        { this.slider }
        { this.videoModal }
      </div>
    );
  }
}
