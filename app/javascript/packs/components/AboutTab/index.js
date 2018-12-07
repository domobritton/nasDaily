import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import { Image } from 'cloudinary-react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import Header from '../App/Header'

class AboutTab extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/nasdaily/video/upload/v1544171368/About_page_bg_i3pr8t.mp4',
            bool: true
        }
    }

    render () {
        const { videoURL, bool } = this.state
        return (
            <div className='nd-about'>

                <div className='player-wrapper'>
                <Head />
                    <ReactPlayer 
                    className='react-player'
                    url={videoURL}
                    playing={bool}
                    muted={bool}
                    loop={bool}
                    width='100%'
                    height='100%' />
                </div>
            </div>
        )
    }
};

export default AboutTab;

class Head extends Component {

    render() {
        return (
            <div className='header'>
                <div className='header-inner'>
                <a href='/'
                    tabIndex={1}
                    className='logo-link'>
                    <Image 
                        publicId='NASDAILY._g21um6.png'
                        className='logo-image' />
                </a>
                <NavMenu />
                </div>
            </div>
        )
    }
}

class NavMenu extends Component {

    get menuUnderline() {
        const { location: {pathname} } = window 
    
        switch (pathname) {
        case '/':
        return <hr className='one'></hr>
        case '/team':
        return <hr className='two'></hr>
        case '/videos':
        return <hr className='three'></hr>
        case '/shop':
        return <hr className='four'></hr>
        case '/agency':
        return <hr className='five'></hr>
        default:
        return <hr className='one'></hr>
        }
    }


  render() {

      const { location: { pathname }} = window 
  
      return (
          <div className='nd-nav'>
          <Link
            to='/'
            className={ classnames('nd-nav-item', {active: pathname === '/'}) }
          >
            About
          </Link>
          <Link
            to='/team'
            className={ classnames('nd-nav-item', {active: pathname === '/team'}) }
          >
            Team
          </Link>
          <Link
            to='/videos'
            className={ classnames('nd-nav-item', {active: pathname === '/videos'}) }
          >
            Videos
          </Link>
          <Link
            to='/shop'
            className={ classnames('nd-nav-item', {active: pathname === '/shop'}) }
          >
            Store
          </Link>
          <Link
            to='/agency'
            className={ classnames('nd-nav-item', {active: pathname === '/agency'}) }
          >
            Agency
          </Link>
          { this.menuUnderline }
        </div>
    )
  }
}
