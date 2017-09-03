import React from 'react';
import FacebookPlayer from 'react-facebook-player';
import ReactModal from 'react-modal';
import $ from 'jquery';
import { modalStyles } from '../VideosTab/constants';
import facebookAppId from '../../util/facebookAppId';
import ShopTabForm from './Form';
import { isMobile } from '../../util/viewportSize';

export default class ShopTab extends React.Component {
  constructor() {
    super();

    this.state = {
      openedModal: false,
    }
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
            <ShopTabForm />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { showFormOnMobile } = this.state;

    return (
      <div className='nd-shop'>
        { this.mainSection }
        { this.videoModal }
      </div>
    );
  }
}
