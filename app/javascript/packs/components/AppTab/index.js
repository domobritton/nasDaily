import React from 'react';
import EmailForm from '../EmailForm';

export default class AppTab extends React.Component {
  render() {
    return (
      <div>
        <div className='nd-app hide-on-small'>
          <div>
            <h1>NASDAILY <span className='yellow-color'>APP.</span></h1>
            <p>The best way to create and discover videos. <span className='yellow-color display-block'>Coming soon.</span></p>
            <EmailForm submitOptions={{ early_interest_in_app: true }}/>
            <p>That's 1 minute, <span className='yellow-color'>see you tomorrow.</span></p>
          </div>
        </div>
        <div className='app-tab-header-on-small'>
          <h1>NAS DAILY <span className='yellow-color'>APP.</span></h1>
        </div>
        <div className='show-on-small-only app-tab-form-overlay'>
          <p>The best way to create and discover videos. <span className='yellow-color display-block'>Coming soon.</span></p>
          <EmailForm submitOptions={{ early_interest_in_app: true }}/>
          <p>That's 1 minute, <span className='yellow-color'>see you tomorrow.</span></p>
        </div>
      </div>
    );
  }
}
