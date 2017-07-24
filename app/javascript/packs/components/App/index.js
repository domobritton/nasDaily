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

  render() {
    const { children, videos } = this.state;
    const { pathname } = window.location;
    $('body').removeClass().addClass(pathname.replace('/', ''));

    return (
      <div>
        <div className='content'>
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
