import React from 'react';
import $ from 'jquery';
import { Image } from 'cloudinary-react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import VideosTab from '../VideosTab';
import AppTab from '../AppTab';
import ShopTab from '../ShopTab';
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

  get contentClassNames() {
    const { pathname } = window.location;

    return (
      classnames(
        'content',
        { 'app-tab': pathname === '/app' },
        { 'shop-tab': pathname === '/shop' },
        { 'videos-tab': pathname === '/videos' },
      )
    );
  }

  render() {
    const { children, videos } = this.state;

    return (
      <div>
        <div className={ this.contentClassNames }>
          <Header />
          <Switch>
            <Route path="/videos" render={() => <VideosTab videos={videos} />}/>
            <Route path="/app" component={AppTab}/>
            <Route path="/shop" component={ShopTab}/>
            <Redirect to={{pathname: '/videos'}}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
