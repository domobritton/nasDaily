import React from 'react';
import ReactSelect from 'react-select';
import Slider from 'react-slick';
import FacebookPlayer from 'react-facebook-player';
import ReactModal from 'react-modal';
import classnames from 'classnames';
import { find } from 'lodash';
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
      openedModal: false,
      errorMessage: '',
      showErrorMessage: false,
      shouldShake: false
    }

    this.setAge = this.setAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validate() {
    const { country, gender, age } = this.state;

    if (!country || !gender || !age) {
      return false;
    }

    return true;
  }

  onSubmit(e) {
    e.preventDefault();

    const formValid = this.validate();

    if (!formValid) {
      this.setState({
        showErrorMessage: true,
        shouldShake: true
      });

      setTimeout(() => this.setState({shouldShake: false}), 500);

      return;
    }

    this.submitForm();
  }

  submitForm() {
    const { country, gender, age } = this.state;
    const selectedCountry = find(countryOptions, (el) => el['value'] === country);

    let expectancyColumn;
    if (gender === 'male') {
      expectancyColumn = 'life_expectancy_male';
    } else if (gender === 'female') {
      expectancyColumn = 'life_expectancy_female';
    } else {
      expectancyColumn = 'life_expectancy';
    }

    const lifeExpectancy = selectedCountry[expectancyColumn];
    const percent = Math.floor((Number(age) /  Number(lifeExpectancy)) * 100);

    window.location.href = `http://apps02.saltycustoms.com?percent=${percent}`;
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
    const { age, gender, country, shouldShake } = this.state;
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
                  onClick={() => this.slider.slickNext()}
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <div className='form-section'>
            <form
              className='form'
              onSubmit={this.onSubmit}
            >
              <label>Your <span className='white-color'>Age</span></label>
              <div className='input-group'>
                <div className='input-wrapper'>
                  <input
                    name='age'
                    className='form-input'
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
                    onChange={(gender) => { this.setState({ gender: gender['value'] })}}
                    options={ genderOptions }
                    style={selectStyles}
                  />
                </div>
              </div>
              <label>Your <span className='white-color'>Country</span></label>
              <div className='input-group'>
                <div className='select-wrapper'>
                  <ReactSelect
                    name="country"
                    value={ country }
                    placeholder='Choose'
                    onChange={(country) => { this.setState({ country: country['value'] })}}
                    options={ countryOptions }
                    style={selectStyles}
                  />
                </div>
              </div>
              <button
                type='submit'
                className={classnames('submit-button', { shake: shouldShake })}
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
