import React from 'react';
import $ from 'jquery';
import { Image } from 'cloudinary-react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import VideosTab from '../VideosTab';
import AppTab from '../AppTab';
import ShopTab from '../ShopTab';
import PrivacyTab from '../PrivacyTab';
import TermsTab from '../TermsTab';
import initialVideos from './initialVideos';
import Footer from './Footer';
import Header from './Header';
import classnames from 'classnames';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: initialVideos()
    }
  }

  componentWillMount() {
    // refresh videos asynchronously
    $.ajax({
      url: '/api/videos',
      success: (data) => {
        this.setState({ videos: data });
      }
    });
  }

  render() {
    const { children, videos } = this.state;
    const { pathname } = window.location;
    $('body').removeClass().addClass(pathname.replace('/', ''));

    return (
      <div>
        <div className='content'>
          <div className='background-filler'>
            <div className='background-filler__left'/>
            <div className='background-filler__right'>
              <Image
                publicId="hand_phone_image_oerq6s.png"
                className='background-filler__hand'
              />
            </div>
          </div>
          <Header />
          <Switch>
            <Route path="/videos" render={() => <VideosTab videos={videos} />}/>
            <Route path="/app" component={AppTab}/>
            <Route path="/shop" component={ShopTab}/>
            <Route path="/privacy" component={PrivacyTab}/>
            <Route path="/terms" component={TermsTab}/>
            <Redirect to={{pathname: '/videos'}}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
