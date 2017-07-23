import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default class Footer extends React.Component {
  render() {
    const { pathname } = window.location;

    return (
      <div className='nd-footer'>
        <Image publicId="NASDAILY._g21um6.png" className='logo'/>
        <ul className='navigation'>
          <li>
            <Link
              to='/app'
              className={ classnames('navigation-link', {active: pathname === '/app'}) }
            >
              The App
            </Link>
          </li>
          <li>
            <Link
              to='/videos'
              className={ classnames('navigation-link', {active: pathname === '/videos'}) }
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              to='/shop'
              className={ classnames('navigation-link', {active: pathname === '/shop'}) }
            >
              Shop
            </Link>
          </li>
        </ul>
        <ul className='social-list'>
          <li>
            <a
              target='_blank'
              href='https://www.facebook.com/nasdaily/'
              className='social-icon-wrapper'
            >
              <Image
                publicId="facebook_icon_v02_wk1t1d.svg"
                className='social-icon'
              />
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
