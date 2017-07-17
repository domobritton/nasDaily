import React from 'react';
import EmailForm from '../EmailForm';

export default class AppTab extends React.Component {
  render() {
    return (
      <div className='nd-app'>
        <p>Nas Daily App!</p>
        <EmailForm submitOptions={{ early_interest_in_app: true }}/>
      </div>
    );
  }
}
