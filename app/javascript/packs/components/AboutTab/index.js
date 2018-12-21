import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import Header from '../App/Header'
import { AboutBox }from './AboutBox'
import { isSmallMobile, isMobile, isTablet } from '../../util/viewportSize';

export default class AboutTab extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/nasdaily/video/upload/v1544171368/About_page_bg_i3pr8t.mp4',
            bool: true,
            width: '100%',
            height: '100%',
        }
        this.mobileVideo = this.mobileVideo.bind(this)
    }

    componentDidMount() {
        this.mobileVideo()
    }

    mobileVideo() {
        const height = window.innerHeight
        const width = window.innerWidth
        console.log(width, height)
        if (isSmallMobile()) {
            this.setState({ width: '300%', height: '300%'})
        } else if (isMobile()) {
            this.setState({ width: '200%', height: '250%'})
        } else if (isTablet()) {
            this.setState({ width: '100%', height: '100%'})
        }
    }
    
    render () {
        const { videoURL, bool, width, height } = this.state
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
                    width={width}
                    height={height} />
                </div>
                    <AboutBox />
            </div>
        )
    }
}


