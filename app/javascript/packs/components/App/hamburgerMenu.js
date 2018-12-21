import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'cloudinary-react'
import classnames from 'classnames'

export default class HamburgerMenu extends Component {

    render() {
        const { value } = this.props 
        const { location: { pathname }} = window 
        if (!value) { return null }

        return (
        <div className='nd-menu'>
            <Link
                to='/'
                onClick={() => { this.props.menuOpen; window.scrollTo(0,0);}}
                className={ classnames('nd-menu-item', {active: pathname === '/'}) }
                >
                ABOUT
            </Link>
            <Link
                to='/team'
                onClick={() => { this.props.menuOpen; window.scrollTo(0,0);}}
                className={ classnames('nd-menu-item', {active: pathname === '/team'}) }
                >
                TEAM
            </Link>
            <Link
                to='/videos'
                onClick={() => { this.props.menuOpen; window.scrollTo(0,0);}}
                className={ classnames('nd-menu-item', {active: pathname === '/videos'}) }
                >
                VIDEOS
            </Link>
            <Link
                to='/shop'
                onClick={() => { this.props.menuOpen; window.scrollTo(0,0);}}
                className={ classnames('nd-menu-item', {active: pathname === '/shop'}) }
                >
                STORE
            </Link>
            <Link
                to='/agency'
                onClick={() => { this.props.menuOpen; window.scrollTo(0,0);}}
                className={ classnames('nd-menu-item', {active: pathname === '/agency'}) }
                >
                AGENCY
            </Link>

            {/* <div className='nd-menu-footer'>
                <Link
                    className='privacy-and-terms-link'
                    to='/privacy'
                    onClick={() => { this.props.menuOpen; window.scrollTo(0,0);}}
                >
                    Privacy Policy
                </Link>
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
                <Link
                    className='privacy-and-terms-link'
                    to='/terms'
                    onClick={() => { this.props.menuOpen; window.scrollTo(0,0);}}
                >
                    Terms and Conditions
                </Link>
            </div> */}
        </div>
        )
    }
}




