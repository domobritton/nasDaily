import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='nd-footer'>
        <Image publicId="NASDAILY._g21um6.png" className='logo'/>
        <ul className='navigation'>
          <li>
            <Link to='/app'>
              The App
            </Link>
          </li>
          <li>
            <Link to='/videos'>
              Videos
            </Link>
          </li>
          <li>
            <Link to='/shop'>
              Shop
            </Link>
          </li>
        </ul>
        <ul className='social-list'>
          <li>
            <a target='_blank' href='https://www.facebook.com/nasdaily/'>
              <Image publicId="facebook_icon_rvai9d.svg"/>
            </a>
          </li>
        </ul>
        <div className='subfooter'>
          Made in the WORLD. All content copyright @ 2017 NasDaily, Inc
        </div>
      </div>
    );
  }
}
