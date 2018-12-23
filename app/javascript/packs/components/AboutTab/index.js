import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import Header from '../App/Header'
import { AboutBox }from './AboutBox'
import { isSmallMobile, isMobile, isTablet } from '../../util/viewportSize';

export default class AboutTab extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/nasdaily/video/upload/vc_auto/v1545547942/About_page_bg_flhwak.mp4',
            bool: true,
            width: `100%`,
            height: `100%`,
        }
        
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        const width = window.innerWidth;
        if (width < 1650) {
            this.setState({ width: '130%', height: '115%'})
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
                    width='auto'
                    height='auto'
                    style={{ minWidth: '100%', minHeight: '100%' }} />
                </div>
                    <AboutBox />
            </div>
        )
    }
}




