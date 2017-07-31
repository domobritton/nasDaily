import React from 'react';
import EmailForm from '../EmailForm';

export default class AppTab extends React.Component {
  render() {
    return (
      <div className='nd-app'>
        <h1>NASDAILY <span className='yellow-color'>APP.</span></h1>
        <p>The best way to create and discover videos. <span className='yellow-color'>Coming soon.</span></p>
        <EmailForm submitOptions={{ early_interest_in_app: true }}/>
        <p>That's 1 minute, <span className='yellow-color'>see you tomorrow.</span></p>
      </div>
    );
  }
}
