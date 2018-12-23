import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { modalStyles } from '../VideosTab/constants'
import ReactModal from 'react-modal'
import FacebookPlayer from 'react-facebook-player'
import facebookAppId from '../../util/facebookAppId'

export default class ShopLower extends Component {
  constructor() {
    super()

     this.state = {
       modalIsOpen: false
     };

     this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  get videoModal() {
    const { modalIsOpen } = this.state;
        return (
        <ReactModal
          isOpen={modalIsOpen}
          contentLabel="Modal"
          onRequestClose={() => { this.setState({modalIsOpen: false}); scrollTo(0,0);}}
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

  render() {
    return (
    <div className="nd-lower">
        <div className="nd-inner">
          <div className="works-circle">
            <p>HOW THIS WORKS?</p>
            <div className="down-arrow">&#8595;</div>
          </div>
        </div>
        <div className="inner-flex">
          <div className="lower-left">
            <div className='left-wrapper'>
              <h2>WHAT THIS MEANS:</h2>
              <div className="description">
                <p>
                  Nas Daily wears the same t-shirt every day. The
                  t-shirt shows how much of his life is over based on
                  his current age. It helps him realize that life is
                  finite and we should use time wisely.
                </p>
              </div>
            </div>
          </div>
          <div className="lower-right">
            <div 
              onClick={() => this.openModal()}
              className='video-wrapper'>
              <Image 
                publicId="What_means_tumbnail_aawokp" 
                className="video-image" />
              <img src='assets/play.svg'
                className='play' />
            </div>
            {this.videoModal}
          </div>
        </div>
      </div>
    )
  }
}

// https://www.facebook.com/WesternUnion/videos/10156494945987457/
// https://www.facebook.com/nasdaily/videos/908219792663507/?epa=SEARCH_BOX
