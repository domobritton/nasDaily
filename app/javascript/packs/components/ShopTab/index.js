import React from 'react';
import ReactSelect from 'react-select';
// import 'react-select/dist/react-select.css';
import EmailForm from '../EmailForm';
import { genderOptions, countryOptions, selectStyles } from './constants';

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
    );
  }
}
