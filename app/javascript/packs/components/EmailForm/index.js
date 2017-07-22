import React from 'react';
import $ from 'jquery';
import { EMAIL_REGEX } from './constants';

export default class EmailForm extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      submittedForm: false
    }
  }

  validate() {
    const { inputValue } = this.state;

    return !!inputValue.match(EMAIL_REGEX);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { inputValue } = this.state;
    if (!this.validate()) { return }

    const { submitOptions } = this.props;

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
  }

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  get successMessage() {
    return (
      <div>
        Thanks! You are awesome!
      </div>
    );
  }

  get form() {
    const { inputValue } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={inputValue}
          type='text'
          required
          onChange={this.onChange}
          spellCheck={false}
          placeholder='Your email'
        />
        <button type='submit' disabled={!inputValue}>
          Go
        </button>
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
