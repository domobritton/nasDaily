import React, { Component } from 'react'
import HeroBanner from './Herobanner'
import Creators from './Creators'
import $ from 'jquery'
import Header from '../App/Header'


export default class TeamTab extends Component {
    constructor() {
        super()
        this.state = {
            more: false
        }

        this.loadMore = this.loadMore.bind(this)
    }

    get loadMoreButton() {
        const { more } = this.state 

        return (
            <div
                id='show-more-button' 
                className='show-more'>
               { !more ? 
                    <div
                        className='show-more-inner'
                        onClick={this.loadMore}>
                        SHOW MORE CREATORS
                    <div className="loader">
                            <span className="loader__dot"><i className="fas fa-circle"></i></span>
                            <span className="loader__dot"><i className="fas fa-circle"></i></span>
                            <span className="loader__dot"><i className="fas fa-circle"></i></span>
                        </div>
                    </div> : ''
                } 
            </div>
        )
    }

    loadMore() {
        $('html, body').animate( { scrollTop: $('#show-more-button').position().top - 170}, 750, 'swing')
        this.setState({ more: true })
    }

    render() {
         return (
             <div className='nd-team'>
             <Header />
                    <div className='team-upper'>
                        <div className='image-text-box'>
                            <h1 className='animated fadeInUp'>NAS DAILY<span> CREATORS</span></h1>
                            <div className='description animated fadeInup delay-2s'>
                                <p>Nas Daily Creators are creative, authentic and real. From thousands of potential people, we assembled the best team of Facebook creators. We make videos about different topics, but our mission is the same.<span> Come work with us.</span></p>
                            </div>
                        </div>
                    </div>
                <HeroBanner min={'-15%'} max={'40%'}>
                    <div className='profile-outer'>
                        <div className='creators-mid'>
                            <Creators start={0} end={4}></Creators>
                        </div>
                        <div className='creators-lower'>
                            <p>We're building the world's best Facebook Creator Team.<br />
                                Wanna join? Drop us a note!</p>
                            <a href='mailto:creators@nasdaily.com'>creators<span>@nasdaily.com</span></a>
                        </div>
                    </div>
                </HeroBanner>  
            </div>
        )
    }
}
