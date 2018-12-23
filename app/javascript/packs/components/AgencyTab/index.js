import React, { Component } from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';
import ReactMessengerButton from 'react-messenger-plugin/lib/MessengerPlugin';
import {
  TechTabContent,
  TravelTabContent,
  FoodAndDrinkTabContent,
  LifestyleTabContent,
  ArtistsTabContent,
  SocialEnterpriseTabContent,
} from './featuredVideosTabs';
import facebookAppId from '../../util/facebookAppId';
import Modal from './Modal';
import { Image } from 'cloudinary-react'
import Header from '../App/Header'
import { animateScroll as scroll } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'

import Clients from './Clients'
export default class AgencyTab extends Component {
    constructor() {
      super()
      this.state = {
        oneSecond: false,
      }
      this.scrollToTop = this.scrollToTop.bind(this);
    }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
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
                <button className='button-outer animated fadeInup delay-5s'>
                  <a href='mailto:nas@nasdaily.com'>Work With Us</a>
                </button>
              </div>
          </div>
          <HeroBanner min={'-30%'} max={'40%'}>
          <div className='one-minute-outer'>
            <div className='one-minute'>
            { this.blink }
              <div className='time'>
                <img src='/assets/100.svg' />
              </div>
            <div className='one-minute-box'>
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
              <p>We can work with anyone, anywhere. We have a team of creators from around<br />
                the world ready for any kind of project. Here are some of our favorites. Here is some of our work</p>
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
              <Image 
                publicId='Agency_bg_bottom-short_ngherr'
                className='lower-hero' />
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

const HeroBanner = ({ min, max, children }) => (
    <div className="hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
          <div className='image-wrapper'>
            <Image 
              publicId='Nas_Daily_Team_desk2_ubrlv4'
              className='background-upper-img'/>
          </div>
        </Parallax>
        <div className="hero-children">{children}</div>
    </div>
)

// export default class AgencyTab extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       videoId: null
//     }
//   }

//   get modal() {
//     const { videoId } = this.state;
//     const { videos } = this.props;

//     return (
//       <Modal
//         onClose={this.closeModal}
//         videoId={videoId}
//         videos={videos}
//       />
//     );
//   }

//   showVideo = (videoId) => {
//     this.setState({
//       videoId: videoId
//     });
//   }

//   closeModal = () => {
//     this.setState({
//       videoId: null
//     });
//   }

//   render() {
//     return (
//       <div className='nd-agency'>
//       <Header />
//         <div className='nd-agency-intro'>
//           <h1 className='nd-agency-intro-header'>
//             Nas Daily <span className='yellow-color'>Agency</span>
//           </h1>
//           <p className='nd-agency-intro-subheader'>
//             Ads don’t work on Facebook.&nbsp;
//             <br />
//             We tell the story of your brand through your community.&nbsp;
//             <br />
//             That works.
//           </p>
//           <div className='nd-agency-intro-cards-container'>
//             <div className='nd-agency-intro-card card-1'>
//               <div className='agency-card-icon-container'>
//                 <img src='/assets/agency/card-icon-1.svg' />
//               </div>
//               <p className='agency-card-title'>
//                 Less than <span className='yellow-color'>$100K</span>
//               </p>
//             </div>
//             <div className='nd-agency-intro-card card-2'>
//               <div className='agency-card-icon-container'>
//                 <img src='/assets/agency/card-icon-2.svg' />
//               </div>
//               <p className='agency-card-title'>
//                 Less than <span className='yellow-color'>30</span> days
//               </p>
//             </div>
//             <div className='nd-agency-intro-card card-3'>
//               <div className='agency-card-icon-container'>
//                 <img src='/assets/agency/card-icon-3.svg' />
//               </div>
//               <p className='agency-card-title'>
//                 More than <span className='yellow-color'>1,000,000</span> reach
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className='nd-agency-featured-videos'>
//           <h2 className='nd-agency-videos-header'>
//             Featured Videos
//           </h2>
//           <p className='nd-agency-videos-subheader'>
//             Stories that matter
//           </p>
//           <div className='nd-agency-videos-tabs-container'>
//             <Tabs>
//               <TabList>
//                 <Tab><span>Tech</span></Tab>
//                 <Tab><span>Travel</span></Tab>
//                 <Tab><span>Food & Drink</span></Tab>
//                 <Tab><span>Lifestyle</span></Tab>
//                 <Tab><span>Artists</span></Tab>
//                 <Tab><span>Social Enterprise</span></Tab>
//               </TabList>
//               <TabPanel>
//                 <TechTabContent
//                   { ...this.props }
//                   showVideo={ this.showVideo }
//                 />
//               </TabPanel>
//               <TabPanel>
//                 <TravelTabContent
//                   { ...this.props }
//                   showVideo={ this.showVideo }
//                 />
//               </TabPanel>
//               <TabPanel>
//                 <FoodAndDrinkTabContent
//                   { ...this.props }
//                   showVideo={ this.showVideo }
//                 />
//               </TabPanel>
//               <TabPanel>
//                 <LifestyleTabContent
//                   { ...this.props }
//                   showVideo={ this.showVideo }
//                 />
//               </TabPanel>
//               <TabPanel>
//                 <ArtistsTabContent
//                   { ...this.props }
//                   showVideo={ this.showVideo }
//                 />
//               </TabPanel>
//               <TabPanel>
//                 <SocialEnterpriseTabContent
//                   { ...this.props }
//                   showVideo={ this.showVideo }
//                 />
//               </TabPanel>
//             </Tabs>
//           </div>
//         </div>
//         <div className='nd-agency-contact'>
//           <h2 className='nd-agency-contact-header'>
//             Get in touch
//           </h2>
//           <p className='nd-agency-contact-subheader'>
//             Drop us an enquiry or just say hello!
//           </p>
//           <ReactMessengerButton
//             appId={ facebookAppId() }
//             pageId='574719552680201'
//             FB={window.FB}
//           />
//         </div>
//         { this.modal }
//       </div>
//     );
//   }
// }
