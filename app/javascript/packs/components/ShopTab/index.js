import React from 'react';
import Slider from 'react-slick';
import FacebookPlayer from 'react-facebook-player';
import ReactModal from 'react-modal';
import {Collapse} from 'react-collapse';
import $ from 'jquery';
import { sliderSettings } from './constants';
import { modalStyles } from '../VideosTab/constants';
import facebookAppId from '../../util/facebookAppId';
import ShopTabForm from './Form';
import { isMobile } from '../../util/viewportSize';

export default class ShopTab extends React.Component {
  constructor() {
    super();

    this.state = {
      openedModal: false,
      showFormOnMobile: false
    }

    this.showForm = this.showForm.bind(this);
  }

  get videoModal() {
    const {
      openedModal,
    } = this.state;

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

  showForm() {
    if (isMobile()) {
      this.setState({showFormOnMobile: true});

      setTimeout(() =>
        $('html, body').animate({ scrollTop: $('form').position().top }, 600, 'swing')
      );
    } else {
      this.sliderElement.slickNext()
    }
  }

  get mainSection() {
    return (
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
              onClick={this.showForm}
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    );
  }

  get slider() {
    if (isMobile()) { return null }

    return (
      <Slider
        { ...sliderSettings }
        ref={(ref) => this.sliderElement = ref}
      >
        { this.mainSection }
        <div className='form-section'>
          { isMobile() ? null : <ShopTabForm /> }
        </div>
      </Slider>
    );
  }

  render() {
    const { showFormOnMobile } = this.state;

    return (
      <div className='nd-shop'>
        { this.slider }
        { isMobile() && this.mainSection }
        { this.videoModal }
        <Collapse
          isOpened={isMobile() && showFormOnMobile}
        >
          <ShopTabForm />
        </Collapse>
      </div>
    );
  }
}
