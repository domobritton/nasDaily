import React from 'react';
import VideoTab from '../VideoTab';

export default class App extends React.Component {
  get header() {
    return (
      <div className='nd-header'>
        <a>
          <img className='logo' src='assets/nasdaily_logo.png'/>
        </a>
      </div>
    );
  }

  get footer() {
    return (
      <div className='nd-footer'>
        <img src='assets/nasdaily_logo.png' className='logo' />
        <ul className='navigation'>
          <li>
            <a>The App</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
        </ul>
        <div className='subfooter'>
          Made in the WORLD. All content copyright @ 2017 NasDaily, Inc
        </div>
      </div>
    );
  }

  render() {
    const { currentTab } = this.props;

    return (
      <div>
        { this.header }
        { currentTab === 'video' ? <VideoTab/> : 'not implemented tab' }
        { this.footer }
      </div>
    );
  }
}
