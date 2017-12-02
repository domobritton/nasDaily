import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default class Footer extends React.Component {
  render() {
    const {
      location: {
        pathname
      },
      scrollTo
    } = window;

    return (
      <div className='nd-footer'>
        <Image publicId="NASDAILY._white_w6czgq.svg" className='logo'/>
        <ul className='navigation'>
          <li>
            <Link
              to='/app'
              className={ classnames('navigation-link', {active: pathname === '/app'}) }
              onClick={() => scrollTo(0,0)}
            >
              The App
            </Link>
          </li>
          <li>
            <Link
              to='/videos'
              className={ classnames('navigation-link', {active: pathname === '/videos'}) }
              onClick={() => scrollTo(0,0)}
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              to='/shop'
              className={ classnames('navigation-link', {active: pathname === '/shop'}) }
              onClick={() => scrollTo(0,0)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to='/agency'
              className={ classnames('navigation-link', {active: pathname === '/agency'}) }
              onClick={() => scrollTo(0,0)}
            >
              Agency
            </Link>
          </li>
        </ul>
        <div className='social-list-header'>Only on:</div>
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
          Made around the world. All content copyright @ 2017 NasDaily, Inc
          <div className='privacy-and-terms'>
            <div>
              <Link
                className='privacy-and-terms-link'
                to='/privacy'
                onClick={() => scrollTo(0,0)}
              >
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link
                className='privacy-and-terms-link'
                to='/terms'
                onClick={() => scrollTo(0,0)}
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
