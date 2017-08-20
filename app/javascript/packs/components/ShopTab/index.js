import React from 'react';
import ReactSelect from 'react-select';
import Slider from 'react-slick';
import FacebookPlayer from 'react-facebook-player';
import ReactModal from 'react-modal';
import { modalStyles } from '../VideosTab/constants';
import EmailForm from '../EmailForm';
import facebookAppId from '../../util/facebookAppId';
import { genderOptions, countryOptions, selectStyles } from './constants';

export default class ShopTab extends React.Component {
  constructor() {
    super();

    this.state = {
      age: '',
      gender: '',
      country: '',
      openedModal: false
    }

    this.setAge = this.setAge.bind(this);
  }

  setAge(e) {
    const { value } = e.target;

    if (isFinite(value) && Number(value) >= 0 && Number(value) < 126) {
      this.setState({ age: value });
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

  render() {
    const { age, gender, country } = this.state;
    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: true
    };

    return (
      <div className='nd-shop'>
        <Slider
          { ...sliderSettings }
          ref={(ref) => this.slider = ref}
        >
          <div className='landing'>
            <div className='landing--left'>
              <h2><span className='yellow-color'>The</span> Story</h2>
              <p>Watch the video behind the story of Nas Daily T-shirts</p>
              <a
                className='shop-cta'
                onClick={() => this.setState({openedModal: true})}
              >
                Watch now
              </a>
            </div>
            <div className='landing--right'>
              <h2><span className='yellow-color'>The</span> Tshirt</h2>
              <p>Custom made for you</p>
              <a
                className='shop-cta'
                onClick={() => this.slider.slickNext()}
              >
                Buy now
              </a>
            </div>
          </div>
          <div className='form-section'>
            <form className='form'>
              <label>Your <span className='white-color'>Age</span></label>
              <div className='input-group'>
                <div className='input-wrapper'>
                  <input
                    placeholder='Enter your age'
                    value={age}
                    onChange={this.setAge}
                  />
                </div>
              </div>
              <label>Your <span className='white-color'>Gender</span></label>
              <div className='input-group'>
                <div className='select-wrapper'>
                  <ReactSelect
                    name="gender"
                    placeholder='Choose'
                    value={ gender }
                    onChange={(value) => { this.setState({ gender: value })}}
                    options={ genderOptions }
                    style={selectStyles}
                  />
                </div>
              </div>
              <label>Your <span className='white-color'>Country</span></label>
              <div className='input-group'>
                <div className='select-wrapper'>
                  <ReactSelect
                    name="gender"
                    value={ country }
                    placeholder='Choose'
                    onChange={(value) => { this.setState({ country: value })}}
                    options={ countryOptions }
                    style={selectStyles}
                  />
                </div>
              </div>
              <button
                type='submit'
                className='submit-button'
              >
                Calculate
              </button>
            </form>
          </div>
        </Slider>
        { this.videoModal }
      </div>
    );
  }
}
