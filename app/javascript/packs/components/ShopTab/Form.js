import React from 'react';
import {Collapse} from 'react-collapse';
import ReactSelect from 'react-select';
import classnames from 'classnames';
import { find } from 'lodash';
import moment from 'moment';
import {
  genderOptions,
  countryOptions,
  birthMonthOptions,
  birthYearOptions,
  selectStyles,
  smallSelectStyles
} from './constants';

export default class ShopTabForm extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      gender: '',
      country: '',
      showErrorMessage: false,
      shouldShake: false
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  validate() {
    const { country, gender, birthDay, birthMonth, birthYear } = this.state;

    if (!country || !gender || !birthDay || !birthMonth || !birthYear) {
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
    const { setPercent } = this.props;
    const {
      country,
      gender,
      birthDay,
      birthMonth,
      birthYear
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

    const birthDate = moment(`${birthYear}-${birthMonth}-${birthDay}`, 'YYYY-MM-DD');
    const now = moment();
    const age = now.diff(birthDate, 'years', true);

    const lifeExpectancy = selectedCountry[expectancyColumn];
    const percent = Math.floor((age / Number(lifeExpectancy)) * 100);

    setPercent(percent);
  }

  get birthDayOptions() {
    const allDays = [];

    for (let i = 1; i < 32; i++) {
      allDays.push({ value: String(i), label: String(i) });
    }

    return allDays;
  }

  validateBirthDate() {
    const {
      birthDay,
      birthMonth,
      birthYear,
    } = this.state;

    if (!birthDay || !birthMonth || !birthYear) { return true };

    const date = moment(`${birthYear}-${birthMonth}-${birthDay}`, 'YYYY-MM-DD');

    console.log(date, date.isValid());
    return !date.isValid();
  }

  render() {
    const {
      country,
      gender,
      birthDay,
      birthMonth,
      birthYear,
      showErrorMessage,
      shouldShake
    } = this.state;

    return (
      <form
        className='form'
        onSubmit={this.onSubmit}
      >
        <label>Your <span className='yellow-color'>Age</span></label>
        <div className='input-group'>
          <div className='multi-select-wrapper'>
            <div className='select-wrapper'>
              <ReactSelect
                name="birthDay"
                placeholder='Day'
                value={birthDay}
                onChange={(day) => {
                  this.setState({ birthDay: day ? day['value'] : '', showErrorMessage: false });
                }}
                options={ this.birthDayOptions }
                style={smallSelectStyles}
              />
            </div>
            <div className='select-wrapper'>
              <ReactSelect
                name="birthMonth"
                placeholder='Month'
                value={birthMonth}
                onChange={(month) => {
                  this.setState({ birthMonth: month ? month['value'] : '', showErrorMessage: false });
                }}
                options={ birthMonthOptions }
                style={smallSelectStyles}
              />
            </div>
            <div className='select-wrapper'>
              <ReactSelect
                name="birthYear"
                placeholder='Year'
                value={birthYear}
                onChange={(year) => {
                  this.setState({ birthYear: year ? year['value'] : '', showErrorMessage: false });
                }}
                options={ birthYearOptions }
                style={smallSelectStyles}
              />
            </div>
          </div>
          <Collapse isOpened={showErrorMessage && this.validateBirthDate()}>
            <div className='error-message'>
              This doesn't look like a valid date
            </div>
          </Collapse>
        </div>
        <label>Your <span className='yellow-color'>Gender</span></label>
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
        <label>Your <span className='yellow-color'>Country</span></label>
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
