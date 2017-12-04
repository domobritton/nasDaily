import React from 'react';
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

export default class AgencyTab extends React.Component {
  constructor() {
    super();

    this.state = {
      videoId: null
    }
  }

  get modal() {
    const { videoId } = this.state;
    const { videos } = this.props;

    return (
      <Modal
        onClose={this.closeModal}
        videoId={videoId}
        videos={videos}
      />
    );
  }

  showVideo = (videoId) => {
    this.setState({
      videoId: videoId
    });
  }

  closeModal = () => {
    this.setState({
      videoId: null
    });
  }

  render() {
    return (
      <div className='nd-agency'>
        <div className='nd-agency-intro'>
          <h1 className='nd-agency-intro-header'>
            Nas Daily <span className='yellow-color'>Agency</span>
          </h1>
          <p className='nd-agency-intro-subheader'>
            A brand marketing philosophy we can finally get behind.&nbsp;
            <br />
            Human beings make human brands. Let’s tell stories!
          </p>
          <div className='nd-agency-intro-cards-container'>
            <div className='nd-agency-intro-card card-1'>
              <div className='agency-card-icon-container'>
                <img src='/assets/agency/card-icon-1.svg' />
              </div>
              <p className='agency-card-title'>
                Less than <span className='yellow-color'>$100K</span>
              </p>
            </div>
            <div className='nd-agency-intro-card card-2'>
              <div className='agency-card-icon-container'>
                <img src='/assets/agency/card-icon-2.svg' />
              </div>
              <p className='agency-card-title'>
                Less than <span className='yellow-color'>30</span> days
              </p>
            </div>
            <div className='nd-agency-intro-card card-3'>
              <div className='agency-card-icon-container'>
                <img src='/assets/agency/card-icon-3.svg' />
              </div>
              <p className='agency-card-title'>
                More than <span className='yellow-color'>1,000,000</span> reach
              </p>
            </div>
          </div>
        </div>
        <div className='nd-agency-featured-videos'>
          <h2 className='nd-agency-videos-header'>
            Featured Videos
          </h2>
          <p className='nd-agency-videos-subheader'>
            Stories that matter
          </p>
          <div className='nd-agency-videos-tabs-container'>
            <Tabs>
              <TabList>
                <Tab><span>Tech</span></Tab>
                <Tab><span>Travel</span></Tab>
                <Tab><span>Food & Drink</span></Tab>
                <Tab><span>Lifestyle</span></Tab>
                <Tab><span>Artists</span></Tab>
                <Tab><span>Social Enterprise</span></Tab>
              </TabList>
              <TabPanel>
                <TechTabContent
                  { ...this.props }
                  showVideo={ this.showVideo }
                />
              </TabPanel>
              <TabPanel>
                <TravelTabContent { ...this.props }/>
              </TabPanel>
              <TabPanel>
                <FoodAndDrinkTabContent { ...this.props }/>
              </TabPanel>
              <TabPanel>
                <LifestyleTabContent { ...this.props }/>
              </TabPanel>
              <TabPanel>
                <ArtistsTabContent { ...this.props }/>
              </TabPanel>
              <TabPanel>
                <SocialEnterpriseTabContent { ...this.props }/>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className='nd-agency-contact'>
          <h2 className='nd-agency-contact-header'>
            Get in touch
          </h2>
          <p className='nd-agency-contact-subheader'>
            Drop us an enquiry or just say hello!
          </p>
          <ReactMessengerButton
            appId={ facebookAppId() }
            pageId='574719552680201'
            FB={window.FB}
          />
        </div>
        { this.modal }
      </div>
    );
  }
}
