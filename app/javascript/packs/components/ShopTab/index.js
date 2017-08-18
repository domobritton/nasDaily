import React from 'react';
import EmailForm from '../EmailForm';
import { genderOptions, countryOptions } from './constants';

export default class ShopTab extends React.Component {
  constructor() {
    super();

    this.state = {
      age: '',
      gender: '',
      country: ''
    }

    this.setAge = this.setAge.bind(this);
  }

  setAge(e) {
    const { value } = e.target;

    if (isFinite(value) && Number(value) >= 0 && Number(value) < 126) {
      this.setState({ age: value });
    }
  }

  render() {
    const { age, gender, country } = this.state;

    return (
      <div className='nd-shop'>
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
              <select
                value={ gender }
                onChange={({target: {value}}) => { this.setState({ gender: value })}}
              >
                {
                  genderOptions.map((o, idx) => (
                    <option
                      key={idx}
                      value={o[0]}
                      disabled={ idx === 0 ? true : false }
                    >
                      {o[1]}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>
          <label>Your <span className='white-color'>Country</span></label>
          <div className='input-group'>
            <div className='select-wrapper'>
              <select
                value={ country }
                onChange={({target: {value}}) => { this.setState({ country: value })}}
              >
                {
                  countryOptions.map((o, idx) => (
                    <option
                      key={idx}
                      value={o[0]}
                      disabled={ idx === 0 ? true : false }
                    >
                      {o[1]}
                    </option>
                  ))
                }
              </select>
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
    );
  }
}
