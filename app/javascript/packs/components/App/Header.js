import React from 'react';
import { Image } from 'cloudinary-react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='nd-header'>
        <a>
          <Image publicId="NASDAILY._g21um6.png" className='logo'/>
        </a>
      </div>
    );
  }
}
