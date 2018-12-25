import React, { Component } from 'react'  
import $ from 'jquery'  
import { Route, Switch, Redirect } from 'react-router-dom'  
import AboutTab from '../AboutTab'
import TeamTab from '../TeamTab'
import VideosTab from '../VideosTab'  
import ShopTab from '../ShopTab'  
import PrivacyTab from '../PrivacyTab'  
import AgencyTab from '../AgencyTab'  
import TermsTab from '../TermsTab'  
import initialVideos from './initialVideos'  
import Footer from './Footer'  


export default class App extends Component {
  constructor() {
    super()  

    this.state = {
      videos: initialVideos()
    }
  }

  componentWillMount() {
    // refresh videos asynchronously
    $.ajax({
      url: '/api/videos',
      success: (data) => {
        this.setState({ videos: data })  
      }
    })  
  }

  render() {
    const { children, videos } = this.state  
    const { pathname } = window.location  
    $('body').removeClass().addClass(pathname.replace('/', ''));
    if (pathname === '/') {
      $('body').addClass('about')
    } 
 
    return (
      <div>
        <div className='content'>
          <Switch>
            <Route path='/team' render={() => <TeamTab videos={videos} />} />
            <Route path='/videos' render={() => <VideosTab videos={videos} />}/>
            <Route path='/shop' render={() => <ShopTab videos={videos} /> }/>
            <Route path='/privacy' component={PrivacyTab}/>
            <Route path='/terms' component={TermsTab}/>
            <Route path='/agency' render={() => <AgencyTab videos={videos} />}/>
            <Route path='/' render={() => <AboutTab videos={videos} />} />
            <Redirect to={{pathname: '/videos'}}/>
          </Switch>
        </div>
        <Footer />
      </div>
    )  
  }
}
