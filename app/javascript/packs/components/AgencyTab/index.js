import React, { Component } from 'react';
import Header from '../App/Header'
import { animateScroll as scroll } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'
import Clients from './Clients'
export default class AgencyTab extends Component {
    constructor() {
      super()
      this.state = {
        oneSecond: false,
        width: window.innerWidth,
      }
      this.scrollToTop = this.scrollToTop.bind(this);
    }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(),1000)
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth})
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  tick() {
    const { oneSecond } = this.state
    this.setState({
      oneSecond: !oneSecond
    });
  }

  get blink() {
    const { oneSecond } = this.state 
    if (oneSecond) {
      return <div className='blink'>
      <img src='assets/2_dots.svg' />
      </div>
    } else {
      return <div className='blink'>
      </div>
    }
  }

    render() {
      const { width } = this.state
      const isMobile = width <= 600
      return (
        <div className='nd-agency'>
        <Header />
          <div className='agency-upper'>
              <div className='image-text-box'>
                <div className='title'>
                  <hr />
                  <h1>NAS DAILY COMPANY</h1>
                  <hr />
                </div>
                <h2 className='animated fadeInUp'>WE MAKE <span>VIDEOS</span></h2>
                <p className='animated fadeInUp delay-3s'>We make videos about <span>People first.</span> Products second.</p>
                { !isMobile ? 
                  <button className='button-outer animated fadeInup delay-5s'>
                    <a href='mailto:nas@nasdaily.com'>Work With Us</a>
                  </button>  
                  : ''}
              </div>
          </div>
          <HeroBanner min={'-30%'} max={'40%'} isMobile={isMobile}>
          <div className='one-minute-outer'>
            <div className='one-minute'>
              <div className='time-box'>
                { this.blink }
                <div className='time'>
                  <img src='/assets/100.svg' />
                </div>
              </div>
            <div className='one-minute-box'>
            { isMobile ? 
                    <div>
                    <button className='button-outer animated fadeInup delay-5s'>
                      <a href='mailto:nas@nasdaily.com'>Work With Us</a>
                    </button> 
                      <span className='arrow-down'></span>
                    </div> 
                    : ''}
              <h2>"THAT'S ONE MINUTE"</h2>
              <p>After creating <span>1,000</span> videos in 1,000 days and amassing <span>12m followers</span> on Facebook,<br /> 
                  Nas and his team have opened up the door to working with <span>brands.</span> We specialize in<br />
                  making authentic videos that communicate a message really fast and really well.<br /> 
                  If we can make it work on <span>Facebook,</span> we can make it work anywhere!</p>
              </div>
              <div className='boxes-outer'>
                <div className='box'>
                  <img src='/assets/Cheaper_icon.svg' 
                    className='money-icon'/>
                  <div className='description'>
                    <h3>100% CHEAPER</h3>
                    <p>Cheaper than most<br /> agencies for any project</p>
                  </div>
                </div>
                <div className='box'>
                  <img src='/assets/Faster_icon.svg'
                    className='faster-icon' />
                  <div className='description'>
                    <h3>100% FASTER</h3>
                    <p>30 days or less<br /> for any project</p>
                  </div>
                </div>
                <div className='box'>
                  <img src='/assets/Stronger_icon.svg'
                    className='stronger-icon' />
                  <div className='description'>
                    <h3>100% STRONGER</h3>
                    <p>4x better metrics than other agency videos</p>
                  </div>
                </div>
                <div className='box'>
                  <img src='/assets/Human_icon.svg' 
                    className='human-icon'/>
                  <div className='description'>
                    <h3>100% HUMAN</h3>
                    <p>Videos about humans or customers are our speciality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='agency-lower'>
            <div className='work'>
              <h2>OUR <span>WORK</span></h2>
              {isMobile ? 
              <p>We can work with anyone, anywhere. We have a team of creators from around
                the world ready for any kind of project. Here are some of our favorites.<br /><span>Here is some of our work</span></p>              
              :
              <p>We can work with anyone, anywhere. We have a team of creators from around<br />
                the world ready for any kind of project. Here are some of our favorites. Here is some of our work</p>
              
              }
            </div>
          </div>
          <Clients />
          <div className='agency-bottom'>
            <div className='work-together'>
              <h3>LET'S WORK <span>TOGETHER</span></h3>
              <p>WE ARE IN EVERY COUNTRY</p>
              <a href='mailto:nas@nasdaily.com'>nas<span>@nasdaily.com</span></a>
            </div>
            <div className='one-minute-lower'>
                {isMobile ? 
                  <div className='mobile-lower-hero' />
                  :
                  <div className='lower-hero' />
                }
              <div className='one-minute-text'>
                <i className="fas fa-quote-left left"></i>
                <p>That's <span>1 minute</span>, see you <span>tomorrow</span></p>
                <i className="fas fa-quote-left right"></i>
                <ScrollButton scrollToTop={this.scrollToTop} />
              </div>
            </div>
          </div>
          </HeroBanner>
        </div>
      )
    }
}

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

const HeroBanner = ({ min, max, children, isMobile}) => (
    <div className="hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
          <div className='image-wrapper'>
            { isMobile ? <div className='mobile-background-img' /> : 
              <div className='background-upper-img' />
            }
          </div>
        </Parallax>
        <div className="hero-children">{children}</div>
    </div>
)
