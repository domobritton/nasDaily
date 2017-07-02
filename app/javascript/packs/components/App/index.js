import React from 'react';
import VideoTab from '../VideoTab';
import $ from 'jquery';
import { Image, CloudinaryContext } from 'cloudinary-react';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: null
    }
  }

  componentWillMount() {
    $.ajax({
      url: '/api/cached_videos',
      success: (data) => {
        this.setState({ videos: data });
      }
    });

    $.ajax({
      url: '/api/videos',
      success: (data) => {
        this.setState({ videos: data });
      }
    });
  }

  get header() {
    return (
      <div className='nd-header'>
        <a>
          <Image publicId="NASDAILY._g21um6.png" className='logo'/>
        </a>
      </div>
    );
  }

  get footer() {
    return (
      <div className='nd-footer'>
        <Image publicId="NASDAILY._g21um6.png" className='logo'/>
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
        <ul className='social-list'>
          <li>
            <a target='_blank' href='https://www.instagram.com/nasdaily/'>
              <Image publicId="instagram_icon_tymvgw.svg"/>
            </a>
          </li>
          <li>
            <a target='_blank' href='https://www.facebook.com/nasdaily/'>
              <Image publicId="facebook_icon_rvai9d.svg"/>
            </a>
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
    const { videos } = this.state;

    return (
      <CloudinaryContext cloudName="nasdaily">
        <div className='main'>
          { this.header }
          { currentTab === 'video' ? <VideoTab videos={videos}/> : 'not implemented tab' }
        </div>
        { this.footer }
      </CloudinaryContext>
    );
  }
}
