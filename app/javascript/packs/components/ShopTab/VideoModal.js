import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { modalStyles } from '../VideosTab/constants'
import ReactModal from 'react-modal'
import FacebookPlayer from 'react-facebook-player'
import facebookAppId from '../../util/facebookAppId'

export default class VideoModal extends Component {
    constructor() {
        super()

        this.state = {
            modalIsOpen: false 
        }

        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ modalIsOpen: true })
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
    )
  }

  render() {
      return (
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
      )
  }
}