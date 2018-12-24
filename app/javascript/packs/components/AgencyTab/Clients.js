import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import { modalStyles } from '../VideosTab/constants'
import ReactModal from 'react-modal'
import FacebookPlayer from 'react-facebook-player'
import facebookAppId from '../../util/facebookAppId'
import { videosID } from './videosID'

export default class Clients extends Component {
    constructor() {
    super()

     this.state = {
       modalIsOpen: false,
       selectVideo: '',
     };

     this.openModal = this.openModal.bind(this);
  }

  openModal(id, e) {
    e.preventDefault()
    const selectVideo = videosID(id)
    this.setState({modalIsOpen: true, selectVideo })
  }

  get videoModal() {
    const { modalIsOpen, selectVideo } = this.state;
        return (
        <ReactModal
          isOpen={modalIsOpen}
          contentLabel="Modal"
          onRequestClose={() => { this.setState({modalIsOpen: false})}}
          style={modalStyles}
          className='react-modal'
        >
          <FacebookPlayer
            appId={ facebookAppId() }
            videoId={ selectVideo }
            id={ `video-id-${selectVideo}` }
            onReady={(_id, player) => { player.unmute(); player.play() }}
          />
        </ReactModal>
      );
  }

  render() {
    return (
        <div>
        <div className='agency-clients-outer'>
         
              <div className='client-outer'>
                <div
                    onClick={(e) => this.openModal(0, e)}
                    className='video'>
                  <Image 
                    publicId='uber_x77be2'
                    alt='uber'
                    className='video-inner' />
                    <img src='assets/play.svg'
                  className='play' />
                </div>
                <div className='video-text'>
                  <div className='dotted-gradient'>
                    <Image 
                    publicId='Uber_logo4x_jbxvbc'
                    alt='uber logo'
                    className='uber-logo' />
                  </div>
                      <div className='text-desc'>
                      <i className="fas fa-bolt"></i>
                      <p>Production Time: <span>1d</span></p>
                      <i className="fas fa-star"></i>
                      <p>Product: <span>Restaurants</span></p>
                    </div>
                </div>
              </div>

              <div className='client-outer'>
                <div 
                    onClick={(e) => this.openModal(1, e)}
                    className='video'>
                  <Image 
                    publicId='WU_thumbnail3x_lozbt3'
                    alt='western union'
                    className='video-inner' />
                    <img src='assets/play.svg'
                  className='play' />
                </div>
                <div className='video-text'>
                  <div className='dotted-gradient tall'>
                    <Image 
                      publicId='WU-Logo_long4x_i9lb1y'
                      alt='western union logo'
                      className='wu-logo' />
                  </div>
                      <div className='text-desc'>
                      <i className="fas fa-bolt"></i>
                      <p>Production Time: <span>1d</span></p>
                      <i className="fas fa-star"></i>
                      <p>Product: <span>Restaurants</span></p>
                    </div>
                </div>
              </div>

              <div className='client-outer'>
                <div
                    onClick={(e) => this.openModal(2, e)} 
                    className='video'>
                  <Image 
                    publicId='Galton_Voysey_Tumbnail_3x_mqdebx'
                    alt='galton voysey'
                    className='video-inner' />
                    <img src='assets/play.svg'
                  className='play' />
                </div>
                <div className='video-text'>
                  <div className='dotted-gradient taller'>
                    <Image 
                      publicId='GaltonVoysey_logo4x_zuf4ur'
                      alt='galton voysey logo'
                      className='gv-logo' />
                  </div>
                      <div className='text-desc'>
                      <i className="fas fa-bolt"></i>
                      <p>Production Time: <span>1d</span></p>
                      <i className="fas fa-star"></i>
                      <p>Product: <span>Restaurants</span></p>
                    </div>
                </div>
              </div>
           
     
              <div className='client-outer'>
                <div 
                    onClick={(e) => this.openModal(3, e)}
                    className='video'>
                  <Image 
                    publicId='NTUC_Income3x_fz6uda'
                    alt='uber'
                    className='video-inner' />
                    <img src='assets/play.svg'
                  className='play' />
                </div>
                <div className='video-text'>
                  <div className='dotted-gradient small'>
                    <Image 
                      publicId='NTUC_Income4x_vkzgvl'
                      alt='ntuc logo'
                      className='ntuc-logo' />
                  </div>
                    <div className='text-desc'>
                      <i className="fas fa-bolt"></i>
                      <p>Production Time: <span>1d</span></p>
                      <i className="fas fa-star"></i>
                      <p>Product: <span>Restaurants</span></p>
                    </div>
                </div>
              </div>
              <div className='client-outer'>
                <div
                    onClick={(e) => this.openModal(4, e)} 
                    className='video'>
                  <Image 
                    publicId='Broome_wnbyae'
                    alt='broome'
                    className='video-inner' />
                    <img src='assets/play.svg'
                  className='play' />
                </div>
                <div className='video-text'>
                  <div className='dotted-gradient tall'>
                    <Image 
                      publicId='Broome_International4x_kqixea'
                      alt='broome international logo'
                      className='broome-logo' />
                  </div>
                      <div className='text-desc'>
                      <i className="fas fa-bolt"></i>
                      <p>Production Time: <span>1d</span></p>
                      <i className="fas fa-star"></i>
                      <p>Product: <span>Restaurants</span></p>
                    </div>
                </div>
              </div>
              <div className='client-outer-last'>
                <div className='can-be-you'>
                  <Image 
                    publicId='you_nas3x_zzcxlf'
                    alt='that can be you'
                    className='can-be-you-inner' />
                </div>
                <div className='video-text'>
                  <div className='dotted-gradient smaller'>
                    <p className='title'>THAT CAN BE <span>YOU</span></p>
                  </div>
                      <div className='text-desc'>
                      <p className='you-desc'>We make videos about people first,<br /> 
                        products second. <span>We're an email away.</span></p>
                    </div>
                </div>
              </div>
          </div>
  
          {this.videoModal}
        </div>
    )
  }
}