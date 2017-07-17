import React from 'react';
import $ from 'jquery';

export default class EmailForm extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      submittedForm: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { inputValue } = this.state;

    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { email: inputValue, early_interest_in_app: true },
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
          type='email'
          required
          onChange={this.onChange}
        />
        <button type='submit' disabled={!inputValue}>
          Submit
        </button>
      </form>
    )
  }

  render() {
    const { submittedForm } = this.state;

    return (
      <div>
        { submittedForm ? null : <p>Submit email below</p> }
        <br />
        { submittedForm ? this.successMessage : this.form }
      </div>
    )
  }
}
