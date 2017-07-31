import React from 'react';
import EmailForm from '../EmailForm';

export default class ShopTab extends React.Component {
  render() {
    return (
      <div className='nd-shop'>
        <h1>The Life Shirt</h1>
        <br/>
        <p className='yellow-color'>Coming your way soon.</p>
        <EmailForm submitOptions={{ early_interest_in_tshirt: true }}/>
      </div>
    );
  }
}
