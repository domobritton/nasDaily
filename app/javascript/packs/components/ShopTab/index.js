import React from 'react';
import EmailForm from '../EmailForm';

export default class ShopTab extends React.Component {
  render() {
    return (
      <div className='nd-shop'>
        <h1>The Life T-Shirt!</h1>
        <p>Hi! I'm Nas. I found out I was 33% done with life. So, I quit my job to build a great life.</p>
        <br/>
        <p>This is my t-shirt and it could be yours as well!</p>
        <EmailForm submitOptions={{ early_interest_in_tshirt: true }}/>
      </div>
    );
  }
}
