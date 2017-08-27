import React from 'react';
import {Collapse} from 'react-collapse';
import ReactSelect from 'react-select';
import classnames from 'classnames';
import { find } from 'lodash';
import {
  genderOptions,
  countryOptions,
  selectStyles
} from './constants';

export default class ShopTabForm extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      age: '',
      gender: '',
      country: '',
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
    const {
      country,
      gender,
      age
    } = this.state;
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

    window.location.href = `http://nastshirt.saltycustoms.com/?percentage=${percent}`;
  }

  setAge(e) {
    const { value } = e.target;

    this.setState({
      showErrorMessage: false
    });

    if (isFinite(value) && Number(value) >= 0 && Number(value) < 126) {
      this.setState({ age: value });
    }
  }

  render() {
    const {
      country,
      gender,
      age,
      showErrorMessage,
      shouldShake
    } = this.state;

    return (
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
          <Collapse isOpened={showErrorMessage && !age}>
            <div className='error-message'>
              This field is required
            </div>
          </Collapse>
        </div>
        <label>Your <span className='white-color'>Gender</span></label>
        <div className='input-group'>
          <div className='select-wrapper'>
            <ReactSelect
              name="gender"
              placeholder='Choose'
              value={ gender }
              onChange={(gender) => { this.setState({ gender: gender ? gender['value'] : '', showErrorMessage: false })}}
              options={ genderOptions }
              style={selectStyles}
            />
          </div>
          <Collapse isOpened={showErrorMessage && !gender}>
            <div className='error-message'>
              This field is required
            </div>
          </Collapse>
        </div>
        <label>Your <span className='white-color'>Country</span></label>
        <div className='input-group'>
          <div className='select-wrapper'>
            <ReactSelect
              name="country"
              value={ country }
              placeholder='Choose'
              onChange={(country) => { this.setState({ country: country ? country['value'] : '', showErrorMessage: false })}}
              options={ countryOptions }
              style={selectStyles}
            />
          </div>
          <Collapse isOpened={showErrorMessage && !country}>
            <div className='error-message'>
              This field is required
            </div>
          </Collapse>
        </div>
        <button
          type='submit'
          className={classnames('submit-button', { shake: shouldShake })}
        >
          Calculate
        </button>
      </form>
    );
  }
}
