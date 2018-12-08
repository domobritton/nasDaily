import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import Header from '../App/Header'
import { AboutBox }from './AboutBox'

export default class AboutTab extends Component {
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
                <Header />
                <div className='player-wrapper'>
                    <ReactPlayer 
                    className='react-player'
                    url={videoURL}
                    playing={bool}
                    muted={bool}
                    loop={bool}
                    width='100%'
                    height='100%' />
                    <div className='social-box'>
                        <p>I'M ONLY ON:</p>
                        <div className='insta-icon'><img src='/assets/instagram_icon.svg' /></div>
                        <div className='fb-icon'><img src='/assets/facebook_icon.svg' /></div>
                    </div>
                </div>
                    <AboutBox />
            </div>
        )
    }
}


