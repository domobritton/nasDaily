import React from 'react';
import { Image } from 'cloudinary-react';
import classnames from 'classnames';
import $ from 'jquery';

import { NavigationMenu } from './navigationMenu'
import HamburgerMenu from './hamburgerMenu'

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
            <img className='logo-image' src='/assets/nasdaily_logo.svg' alt='nas daily logo'/>
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
          <NavigationMenu />
          <HamburgerMenu menuOpen={this.toggleMenu} value={menuOpen} />
        </div>
        <div className='header-filler'/>
      </div>
    );
  }
}
