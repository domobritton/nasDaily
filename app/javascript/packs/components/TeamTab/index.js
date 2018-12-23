import React, { Component } from 'react'
import HeroBanner from './Herobanner'
import { Creators } from './Creators'
import Header from '../App/Header'
import { animateScroll as scroll } from 'react-scroll'


export default class TeamTab extends Component {
    constructor() {
        super()
        this.state = {
            width: window.innerWidth,
            more: false,
            start: '-20%',
        }
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
        this.scrollToTop = this.scrollToTop.bind(this)
    }

    componentDidMount() {
        if (window.innerWidth < 600) {
            this.setState({ start: '-30%' })
        }
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
       this.setState({ width: window.innerWidth })
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        const { width, start } = this.state 
         return (
             <div className='nd-team'>
             <Header />
                    <div className='team-upper'>
                        <div className='image-text-box'>
                            <h1 className='animated fadeInUp'>NAS DAILY<span> CREATORS</span></h1>
                            { width >= 600 ? 
                            <div className='description animated fadeInup delay-2s'>
                                <p>Nas Daily Creators are creative, authentic and real. From thousands of potential people, we assembled the best team of Facebook creators. We make videos about different topics, but our mission is the same.<span> Come work with us.</span></p>
                            </div> : '' }
                        </div>
                    </div>
                <HeroBanner min={ start } max={'40%'}>
                    <div className='profile-outer'>
                    { width < 600 ? 
                    <div className='description animated fadeInup delay-2s'>
                        <p>Nas Daily Creators are creative, authentic and real. From thousands of potential people, we assembled the best team of Facebook creators. We make videos about different topics, but our mission is the same.<span> Come work with us.</span></p>
                    </div> : '' }
                        <div className='creators-mid'>
                            <Creators start={0} end={4} width={width}></Creators>
                        </div>
                        <div className='creators-lower'>
                            <p>We're building the world's best Facebook Creator Team.<br />
                                Wanna join? Drop us a note!</p>
                            <a href='mailto:creators@nasdaily.com'>creators<span>@nasdaily.com</span></a>
                            <ScrollButton scrollToTop={this.scrollToTop}/>
                        </div>
                    </div>
                </HeroBanner>  
            </div>
        )
    }
}
// 857.59 * 166
// 5.166

const ScrollButton = ({scrollToTop}) => (
    <div className='outer-scroll'>
      <button 
        title='Back to top' 
        className='scroll' 
        onClick={ () => { scrollToTop() }}>
          <div className='up-arrow'>&#8593;</div>
          BACK TO TOP
      </button>
    </div>
)

