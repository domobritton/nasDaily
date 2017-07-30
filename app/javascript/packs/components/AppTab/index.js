import React from 'react';
import EmailForm from '../EmailForm';

export default class AppTab extends React.Component {
  render() {
    return (
      <div className='nd-app'>
        <h1>NASDAILY APP.</h1>
        <p>The best way to create and discover videos. Coming soon.</p>
        <EmailForm submitOptions={{ early_interest_in_app: true }}/>
        <p>That's 1 minute, see you tomorrow.</p>
      </div>
    );
  }
}
