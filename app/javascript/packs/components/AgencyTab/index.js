import React from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';
import {
  TechTabContent,
  TravelTabContent,
  FoodAndDrinkTabContent,
  LifestyleTabContent,
  ArtistsTabContent,
  SocialEnterpriseTabContent,
} from './featuredVideosTabs';
import 'react-tabs/style/react-tabs.css';

export default class AgencyTab extends React.Component {
  render() {
    return (
      <div className='nd-agency'>
        <div className='nd-agency-intro'>
          <h1 className='nd-agency-intro-header'>
            Nas Daily <span className='yellow-color'>Agency</span>
          </h1>
          <p className='nd-agency-intro-subheader'>
            A brand marketing philosophy we can finally get behind.
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
                <Tab>Tech</Tab>
                <Tab>Travel</Tab>
                <Tab>Food and Drink</Tab>
                <Tab>Lifestyle</Tab>
                <Tab>Artists</Tab>
                <Tab>Social Enterprise</Tab>
              </TabList>
              <TabPanel>
                <TechTabContent />
              </TabPanel>
              <TabPanel>
                <TravelTabContent />
              </TabPanel>
              <TabPanel>
                <FoodAndDrinkTabContent />
              </TabPanel>
              <TabPanel>
                <LifestyleTabContent />
              </TabPanel>
              <TabPanel>
                <ArtistsTabContent />
              </TabPanel>
              <TabPanel>
                <SocialEnterpriseTabContent />
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
        </div>
      </div>
    );
  }
}
