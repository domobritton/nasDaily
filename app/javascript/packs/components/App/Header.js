import React from 'react';
import { Image } from 'cloudinary-react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  get menu() {
    const { menuOpen } = this.state;

    if (!menuOpen) { return null }

    return (
      <div className='nd-menu'>
        <Link
          to='/app'
          onClick={() => { this.toggleMenu(); window.scrollTo(0,0);}}
          className='nd-menu-item'
        >
          The App.
        </Link>
        <Link
          to='/videos'
          onClick={() => { this.toggleMenu(); window.scrollTo(0,0);}}
          className='nd-menu-item'
        >
          Videos.
        </Link>
        <Link
          to='/shop'
          onClick={() => { this.toggleMenu(); window.scrollTo(0,0);}}
          className='nd-menu-item'
        >
          Shop.
        </Link>
      </div>
    );
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <div>
        <div className={ classNames('nd-header', {'open-menu': menuOpen})}>
          <a href='/' tabIndex={1}>
            <Image publicId="NASDAILY._g21um6.png" className='logo'/>
          </a>
          <button
            className={ classNames('hamburger, hamburger--3dxy', {'is-active': menuOpen}) }
            type='button'
            onClick={this.toggleMenu}
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'/>
            </span>
          </button>
          { this.menu }
        </div>
      </div>
    );
  }
}
