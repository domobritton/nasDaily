import React from 'react';
import $ from 'jquery';
import { EMAIL_REGEX } from './constants';
import {Collapse} from 'react-collapse';

export default class EmailForm extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      submittedForm: false,
      errorMessage: '',
      showErrorMessage: false
    }
  }

  validate(value) {
    if (!value) {
      return 'This field is required';
    } else if (!value.match(EMAIL_REGEX)) {
      return "This doesn't look like a valid email";
    }

    return null;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    const errorMessage = this.validate(inputValue);

    if (errorMessage) {
      this.setState({
        errorMessage,
        showErrorMessage: true
      });

      return;
    }

    this.submitForm();
  }

  submitForm() {
    const { submitOptions } = this.props;
    const { inputValue } = this.state;

    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: Object.assign({ email: inputValue}, submitOptions),
    })
    .done(() => {
      this.setState({
        submittedForm: true
      });
    })
    .fail(() => {
      this.setState({
        errorMessage: 'Oops, mind trying again?'
      });
    });
  }

  onChange = (e) => {
    const { value } = e.target;

    this.setState({
      inputValue: value,
      showErrorMessage: false
    });
  }

  get successMessage() {
    return (
      <div className='success-message'>
        Thanks!
      </div>
    );
  }

  get form() {
    const {
      inputValue,
      errorMessage,
      showErrorMessage
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-wrapper'>
          <input
            value={inputValue}
            type='text'
            onChange={this.onChange}
            spellCheck={false}
            placeholder='Your email'
            tabIndex={1}
          />
          <button
            type='submit'
            tabIndex={2}
          >
            Go
          </button>
        </div>
        <Collapse isOpened={showErrorMessage}>
          <div className='error-message'>
            { errorMessage }
          </div>
        </Collapse>
      </form>
    )
  }

  render() {
    const { submittedForm } = this.state;

    return (
      <div className='email-form'>
        { submittedForm ? this.successMessage : this.form }
      </div>
    )
  }
}
