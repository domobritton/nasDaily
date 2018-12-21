import React from 'react';
import {Collapse} from 'react-collapse';
import classnames from 'classnames';
import { find } from 'lodash';
import moment from 'moment';
import { isMobile, isTablet } from '../../util/viewportSize';
import {
  genderOptions,
  countryOptions,
  birthMonthOptions,
  birthYearOptions,
  selectStyles,
  smallSelectStyles,
  longSelectStyles,
} from './constants';

export default class ShopTabForm extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      gender: 'male',
      country: '',
      showErrorMessage: false,
      shouldShake: false,
      inputSize: selectStyles,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.setGender = this.setGender.bind(this);
  }

  componentDidMount() {
    if (isTablet()) {
      this.setState({ inputSize: smallSelectStyles})
    }
  }

  validate() {
    const { country, gender, birthDay, birthMonth, birthYear } = this.state;

    if (!country || !gender || !birthDay || !birthMonth || !birthYear) {
      return false;
    }

    if (this.validateBirthDate()) { return false }

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

      return false;
    }

    return this.submitForm();
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
    return true;
  }

  get birthDayOptions() {
    const allDays = [];

    for (let i = 1; i < 32; i++) {
      allDays.push({ value: String(i), label: String(i) });
    }

    allDays.unshift({value: '', label: 'Day'});

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

    return !date.isValid();
  }

  setGender(e) {
    this.setState({ gender: e.target.value, showErrorMessage: false })
  }

  componentDidUpdate(_, prevState) {
    const {
      country,
      gender,
      birthDay,
      birthMonth,
      birthYear
    } = this.state;

    if (
      country !== prevState.country
      || gender !== prevState.gender
      || birthDay !== prevState.birthDay
      || birthMonth !== prevState.birthMonth
      || birthYear !== prevState.birthYear
    ) {
      this.validateFormOnDesktopAndTablet();
    }
  }

  validateFormOnDesktopAndTablet() {
    if (isMobile()) { return }

    const formValid = this.validate();

    if (formValid) {
      this.submitForm();
    }
  }

  render() {
   
    const {
      country,
      gender,
      birthDay,
      birthMonth,
      birthYear,
      showErrorMessage,
      shouldShake, 
      inputSize
    } = this.state;
   
    return (
      <form
        className='form animated fadeIn'
        onSubmit={this.onSubmit}
      >
        <label><span className='white-color'>Age</span></label>
        <div className='input-group multi'>
          <div className='multi-select-wrapper'>
            <div className='select-wrapper'>
              <select
                name="birthDay"
                value={birthDay}
                onChange={({target: { value }}) => {
                  this.setState({ birthDay: value, showErrorMessage: false })
                }}
                style={inputSize}
              >
                { this.birthDayOptions.map((o, idx) => <option disabled={!o['value']} key={idx} value={o['value']}>{o['label']}</option>) }
              </select>
            </div>
            <div className='select-wrapper'>
              <select
                name="birthMonth"
                value={birthMonth}
                onChange={({target: { value }}) => {
                  this.setState({ birthMonth: value, showErrorMessage: false })
                }}
                style={inputSize}
              >
                { birthMonthOptions.map((o, idx) => <option disabled={!o['value']} key={idx} value={o['value']}>{o['label']}</option>) }
              </select>
            </div>
            <div className='select-wrapper'>
              <select
                name="birthYear"
                value={birthYear}
                onChange={({target: { value }}) => {
                  this.setState({ birthYear: value, showErrorMessage: false })
                }}
                style={inputSize}
              >
                { birthYearOptions.map((o, idx) => <option disabled={!o['value']} key={idx} value={o['value']}>{o['label']}</option>) }
              </select>
            </div>
          </div>
          <Collapse isOpened={showErrorMessage && this.validateBirthDate()}>
            <div className='error-message'>
              This doesn't look like a valid date
            </div>
          </Collapse>
        </div>

        <label><span className='white-color'>Country</span></label>
        <div className='input-group'>
          <div className='select-wrapper-country'>
            <select
              name="country"
              value={ country }
              onChange={({target: { value }}) => {
                this.setState({ country: value, showErrorMessage: false })
              }}
              style={longSelectStyles}
            >
              { countryOptions.map((o, idx) => <option disabled={!o['value']} key={idx} value={o['value']}>{o['label']}</option>) }
            </select>
          </div>
          <Collapse isOpened={showErrorMessage && !country}>
            <div className='error-message'>
              This field is required
            </div>
          </Collapse>
        </div>

        <label><span className='white-color'>Gender</span></label>
          <RadioComponent value={gender} setGender={this.setGender}/>
      </form>
    );
  }
}

const RadioComponent = ({ value, setGender }) => ( 
  <div className='radio-wrapper'>
    <div className='radio'>
      <input 
        id='radio-1' 
        type="radio" 
        value="male" 
        name="gender" 
        checked={value === "male"}
        onChange={setGender} />
      <label htmlFor='radio-1' className="radio-label">Male</label>
    </div>
    <div className='radio'>
      <input 
        id='radio-2' 
        type="radio" 
        value="female" 
        name="gender" 
        checked={value === "female"}
        onChange={setGender} />
      <label htmlFor="radio-2" className="radio-label">Female</label>
    </div>
  </div>
);
