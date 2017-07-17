import React from 'react';
import EmailForm from '../EmailForm';

export default class ShopTab extends React.Component {
  render() {
    return (
      <div className='nd-shop'>
        <p>Nas Daily TShirt!</p>
        <EmailForm submitOptions={{ early_interest_in_tshirt: true }}/>
      </div>
    );
  }
}
