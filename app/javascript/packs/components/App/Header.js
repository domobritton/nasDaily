import React from 'react';
import { Image } from 'cloudinary-react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { menuOpen } = this.state;

    if (menuOpen) {
      $('body').removeClass('with-overlay');
    } else {
      $('body').addClass('with-overlay');
    }

    this.setState({
      menuOpen: !menuOpen
    });
  }

  get navigationMenu() {
    const {
      location: { pathname },
    } = window;

    return (
      <div className='nd-navigation'>
        <Link
          to='/app'
          className={ classnames('nd-navigation-item', {active: pathname === '/app'}) }
        >
          The App
        </Link>
        <Link
          to='/videos'
          className={ classnames('nd-navigation-item', {active: pathname === '/videos'}) }
        >
          Videos
        </Link>
        <Link
          to='/shop'
          className={ classnames('nd-navigation-item', {active: pathname === '/shop'}) }
        >
          Shop
        </Link>
      </div>
    );
  }

  get hamburgerMenu() {
    const { menuOpen } = this.state;
    const { location:  { pathname } } = window;

    if (!menuOpen) { return null }

    return (
      <div className='nd-menu'>
        <Link
          to='/app'
          onClick={() => { this.toggleMenu(); window.scrollTo(0,0);}}
          className={ classnames('nd-menu-item', {active: pathname === '/app'}) }
        >
          The App.
        </Link>
        <Link
          to='/videos'
          onClick={() => { this.toggleMenu(); window.scrollTo(0,0);}}
          className={ classnames('nd-menu-item', {active: pathname === '/videos'}) }
        >
          Videos.
        </Link>
        <Link
          to='/shop'
          onClick={() => { this.toggleMenu(); window.scrollTo(0,0);}}
          className={ classnames('nd-menu-item', {active: pathname === '/shop'}) }
        >
          Shop.
        </Link>

        <div className='nd-menu-footer'>
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
        </div>
      </div>
    );
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <div>
        <div className={ classnames('nd-header', {'open-menu': menuOpen})}>
          <a
            href='/'
            tabIndex={1}
            className='logo-link'
          >
            <Image
              publicId="NASDAILY._g21um6.png"
              className='logo-image'
            />
          </a>
          <button
            className={ classnames('hamburger, hamburger--3dxy', {'is-active': menuOpen}) }
            type='button'
            onClick={this.toggleMenu}
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'/>
            </span>
          </button>
          { this.navigationMenu }
          { this.hamburgerMenu }
        </div>
      </div>
    );
  }
}
