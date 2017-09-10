import React from 'react';
import FacebookPlayer from 'react-facebook-player';
import ReactModal from 'react-modal';
import $ from 'jquery';
import classnames from 'classnames';
import { modalStyles } from '../VideosTab/constants';
import facebookAppId from '../../util/facebookAppId';
import ShopTabForm from './Form';
import { isMobile } from '../../util/viewportSize';

export default class ShopTab extends React.Component {
  constructor() {
    super();

    this.state = {
      openedModal: false,
      showForm: false,
      percent: null,
    }

    this.navigateToSaltyGuys = this.navigateToSaltyGuys.bind(this);
  }

  navigateToSaltyGuys() {
    const { percent } = this.state;

    if (!percent) { return }

    window.location.href = `http://nastshirt.saltycustoms.com/?percentage=${percent}`;
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
          videoId={ '877310772421076' }
          id={ 'video-id-877310772421076' }
          onReady={(_id, player) => { player.unmute(); player.play() }}
        />
      </ReactModal>
    );
  }

  get storyLandingSection() {
    return (
      <div className='landing--left-content'>
        <h2 className='story-header'>
          <span className='yellow-color'>
            The
          </span> Story
        </h2>
        <p>Watch the video behind the story of Nas Daily T-shirts</p>
        <a
          className='shop-cta'
          onClick={() => this.setState({openedModal: true})}
        >
          Watch now
        </a>
      </div>
    );
  }

  get tshirtLandingSection() {
    return (
      <div className='landing--right-content'>
        <h2 className='tshirt-header'>
          <span className='yellow-color'>
            The
          </span> Tshirt
        </h2>
        <p>Custom made for you</p>
        <a
          className='shop-cta'
          onClick={() => this.setState({showForm: true})}
        >
          Buy now
        </a>
      </div>
    );
  }

  get doneWithLife() {
    const { percent } = this.state;

    if (!percent) { return }

    return (
      <label>
        You are {percent}% done with life
      </label>
    );
  }

  get facebookShareButton() {
    return (
      <a
        className='facebook-share-button'
        onClick={this.shareOnFacebook}
      >
        Share on Facebook
      </a>
    );
  }

  get buyButton() {
    return (
      <a
        className='buy-button'
        onClick={this.navigateToSaltyGuys}
      >
        Buy T-shirt
      </a>
    );
  }

  shareOnFacebook() {
    FB.ui({
      method: 'share',
      href: 'https://www.nasdaily.com',
    }, function(response){ console.log(response)});
  }

  get tshirtWithProgressBar() {
    return (
      <div className='landing--right-content'>
        <label
          style={{paddingTop: '48px', fontSize: '40px'}}
        >
          The <span className='yellow-color'>Result</span>
        </label>
        { this.doneWithLife }
        { this.facebookShareButton }
        { this.buyButton }
      </div>
    );
  }

  get mainSection() {
    const { showForm } = this.state;

    return (
      <div
        className={classnames('landing', { 'show-form': showForm })}
      >
        <div className='landing--left'>
          <div className='landing--left-background'/>
          { showForm ? <ShopTabForm setPercent={(p) => this.setState({percent: p})}/> : this.storyLandingSection }
        </div>
        <div className='landing--right'>
          <div className='landing--right-background'/>
          { showForm ? this.tshirtWithProgressBar : this.tshirtLandingSection }
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
