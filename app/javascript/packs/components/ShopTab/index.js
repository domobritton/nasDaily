import React from 'react';
import FacebookPlayer from 'react-facebook-player';
import ReactModal from 'react-modal';
import $ from 'jquery';
import classnames from 'classnames';
import { isNull } from 'lodash';
import { modalStyles } from '../VideosTab/constants';
import facebookAppId from '../../util/facebookAppId';
import ShopTabForm from './Form';
import { isMobile } from '../../util/viewportSize';
import { Image } from 'cloudinary-react';

export default class ShopTab extends React.Component {
  constructor() {
    super();

    this.state = {
      openedModal: false,
      showForm: false,
      showTshirtOnMobile: false,
      percent: null,
      tabOnMobile: 'video'
    }

    this.navigateToSaltyGuys = this.navigateToSaltyGuys.bind(this);
    this.onBuyButtonClick = this.onBuyButtonClick.bind(this);
    this.setPercent = this.setPercent.bind(this);
  }

  navigateToSaltyGuys() {
    const { percent } = this.state;

    if (!percent) { return }

    window.location.href = `http://shop.nasdaily.com/?percentage=${percent}`;
  }

  get videoModal() {
    const {
      openedModal,
    } = this.state;

    return (
      <ReactModal
        isOpen={openedModal}
        contentLabel="Modal"
        onRequestClose={() => { this.setState({openedModal: false}); scrollTo(0,0);}}
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
          className='shop-cta hide-on-small'
          onClick={() => this.setState({openedModal: true})}
        >
          Watch now
        </a>
        <div
          className="tile show-on-small-only"
          onClick={() => this.setState({openedModal: true})}
        >
          <div className="tile__media">
            <img
              className="tile__img"
              src="https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/20813631_877313312420822_6824652331255070720_n.jpg?oh=dd9238cd4afadaf11bf8139d766829b4&oe=59F1866C"
              alt="HOW OLD ARE YOU?"
            />
          </div>
          <div className="tile__details">
            <div className="tile__title"/>
          </div>
        </div>
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
        <p>Click below to calculate and buy your new t-shirt</p>
        <a
          className='shop-cta'
          onClick={() => { this.setState({showForm: true}); scrollTo(0,0);}}
        >
          Buy now
        </a>
      </div>
    );
  }

  get doneWithLife() {
    const { percent } = this.state;

    if (!percent && percent !== 0) { return }

    return (
      <label className='done-with-life'>
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

  onBuyButtonClick() {
    if (this.formElement) {
      this.formElement.onSubmit({preventDefault: () => {}}) && this.navigateToSaltyGuys();
    } else {
      this.navigateToSaltyGuys();
    }
  }

  get buyButton() {
    return (
      <a
        className='buy-button'
        onClick={this.onBuyButtonClick}
      >
        Buy T-shirt
      </a>
    );
  }

  setPercent(p) {
    const actualPercent = p && p > 100 ? 100 : p;

    this.setState({percent: actualPercent, showTshirtOnMobile: true});

    scrollTo(0, 0);
  }

  shareOnFacebook() {
    FB.ui({
      method: 'share',
      href: 'https://www.nasdaily.com/shop',
    }, function(response){ console.log(response)});
  }

  get tshirtWithProgressBar() {
    const { percent } = this.state;

    return (
      <div className='landing--right-content'>
        <div className='tshirt-display-wrapper'>
          <a
            onClick={() => this.setState({percent: null, showTshirtOnMobile: false})}
            className='arrow-back'
          >
            <Image
              publicId="arrow_back_ekioqi.svg"
              className='arrow-back-img'
            />
          </a>
          <label
            style={{fontSize: '40px', marginBottom: 0 }}
          >
            The <span className='yellow-color'>Result</span>
          </label>
          <div
            className='tshirt-images-container'
          >
            <img
              src='/assets/tshirt_life.png'
              className="tshirt-image"
            />
            { !isNull(percent)
              ? (
                  <img
                    className='percentage-bar-image'
                    src={`/assets/percentages/${percent}.png`}
                  />
                )
              : (
                <img
                  className='percentage-bar-image'
                  src={`/assets/percentages/0_no_number.png`}
                />
              )
            }
          </div>
          { this.doneWithLife }
          <div className='tshirt-cta-buttons' >
            { this.facebookShareButton }
            { this.buyButton }
          </div>
        </div>
      </div>
    );
  }

  get form() {
    return (
      <div className='form-wrapper'>
        <ShopTabForm
          ref={(r) => this.formElement = r}
          setPercent={this.setPercent}
        />
      </div>
    );
  }

  get leftSection() {
    const { showForm } = this.state;

    if (showForm) {
      return this.form;
    }

    return this.storyLandingSection;
  }

  get tshirtTab() {
    const { showForm, showTshirtOnMobile } = this.state;

    if (showTshirtOnMobile) {
      return this.tshirtWithProgressBar;
    } else {
      return this.form;
    }
  }

  get mainSection() {
    const { showForm, tabOnMobile } = this.state;

    return (
      <div>
        <div className='show-on-small-only'>
          {
            tabOnMobile === 'video'
            ? this.storyLandingSection
            : this.tshirtTab
          }
        </div>
        <div
          className={classnames('landing hide-on-small', { 'show-form': showForm })}
        >
          <div className='landing--left'>
            <div className='landing--left-background'/>
            { this.leftSection }
          </div>
          <div className='landing--right'>
            <div className='landing--right-background'/>
            { showForm ? this.tshirtWithProgressBar : this.tshirtLandingSection }
          </div>
        </div>
        <div className='tabs-container show-on-small-only'>
          <div
            className={classnames('tab', { active: tabOnMobile === 'video'})}
            onClick={() => this.setState({ tabOnMobile: 'video' })}
          >
            The Story
          </div>
          <div
            className={classnames('tab', { active: tabOnMobile !== 'video'})}
            onClick={() => this.setState({ tabOnMobile: 'calculator' })}
          >
            The T-shirt
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
