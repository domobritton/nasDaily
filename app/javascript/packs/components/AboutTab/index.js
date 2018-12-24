import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import Header from '../App/Header'
import { AboutBox }from './AboutBox'
export default class AboutTab extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/nasdaily/video/upload/vc_auto/v1545547942/About_page_bg_flhwak.mp4',
            bool: true,
            width: window.innerWidth,
        }
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleWindowSizeChange)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange)
    }

    handleWindowSizeChange = () => {
      this.setState({width: window.innerWidth})
    }
    
    render () {
        const { videoURL, bool, width } = this.state
        const isMobile = width <= 600
        return (
            <div className='nd-about'>
                <Header />
                {isMobile ? 
                    <div className='mobile-about-img' />
                :
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
                }
                <AboutBox />
            </div>
        )
    }
}





