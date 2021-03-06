import React from 'react';
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
      {/* {pathname === '/' ?
          <div className='social-box'>
            <p>I'M ONLY ON:</p>
            <div className='insta-icon'>
                <a href='https://www.instagram.com/nasdaily/' target='_blank'>
                    <img src='/assets/instagram_icon.svg' />
                </a>
            </div>
            <div className='fb-icon'>
                <a href='https://www.facebook.com/nasdaily/' target='_blank'>
                    <img src='/assets/facebook_icon.svg' />
                </a>
            </div>
        </div> : <div className='social-box'></div>
      } */}
        <div className='social-box'>
            <p>I'M ONLY ON:</p>
            <div className='insta-icon'>
                <a href='https://www.instagram.com/nasdaily/' target='_blank'>
                    <img src='/assets/instagram_icon.svg' />
                </a>
            </div>
            <div className='fb-icon'>
                <a href='https://www.facebook.com/nasdaily/' target='_blank'>
                    <img src='/assets/facebook_icon.svg' />
                </a>
            </div>
        </div>
        <ul className='navigation'>
          <li>
            <Link
              to='/'
              className={ classnames('navigation-link', {active: pathname === '/'}) }
              onClick={() => scrollTo(0,0)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/team'
              className={ classnames('navigation-link', {active: pathname === '/team'}) }
              onClick={() => scrollTo(0,0)}
            >
              Team
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
              Store
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
        <div className='social-list-header'></div>
        <ul className='social-list'>
          <li>
            <img className='logo-image' src='/assets/nasdaily_logo.svg' alt='nas daily logo'/>
          </li>
        </ul>
        {/* <div className='subfooter'>
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
        </div> */}
      </div>
    );
  }
}
