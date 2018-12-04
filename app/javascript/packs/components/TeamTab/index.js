import React, { Component } from 'react'
// import Team  from './Team'
import teamData from './teamData'
import $ from 'jquery'
import { Image } from 'cloudinary-react'
import { Parallax } from 'react-scroll-parallax';

export default class TeamTab extends Component {
    constructor() {
        super()
        this.state = {
            maxCreators: 4
        }

        this.loadMore = this.loadMore.bind(this)
    }

    get creators() {
        const { maxCreators } = this.state 
        let chunks = []
        for (let i = 0; i < maxCreators; i++) {
            chunks.push(teamData[i])
        }

        return (
            <div>
                {chunks.map(person => {
                    return (
                        <div key={person.id} className='profile-inner animated fadeIn'>
                            <div className='team-member'>
                                <h1>Person Image</h1>
                                <div className='mobile-profile'>
                                    <div className='mobile-profile-pic'>
                                        <img src='https://via.placeholder.com/46' alt='' />
                                    </div>
                                    <p>{person.name}</p>
                                </div>
                                <div className='team-lower'>
                                <ul>
                                    <li className='profile-pic'><img src='https://via.placeholder.com/46' alt='' /></li>
                                    <li>{person.name}</li>
                                    <li>{person.project}</li>
                                    <li><i className="fab fa-facebook-square"></i>{`${person.followers} Followers`}</li>
                                </ul>
                                <div className='contact'>WORK WITH ME</div>
                                </div>
                            </div>
                        </div> 
                    ) 
                })}
            </div>
        )
    }

    get loadMoreButton() {
        const { maxCreators } = this.state 
        if (teamData.length <= maxCreators) { return null }

        return (
            <div
                id='show-more-button' 
                className='show-more'>
                <div 
                    className='show-more-inner'
                    onClick={ this.loadMore }>
                SHOW MORE CREATORS
                    <div className="loader">
                        <span className="loader__dot"><i className="fas fa-circle"></i></span>
                        <span className="loader__dot"><i className="fas fa-circle"></i></span>
                        <span className="loader__dot"><i className="fas fa-circle"></i></span>
                    </div>
                </div>
            </div>
        )
    }

    loadMore() {
        const { maxCreators } = this.state 
        $('html, body').animate( { scrollTop: $('#show-more-button').position().top - 70}, 750, 'swing')

        this.setState({ maxCreators: maxCreators + 4})
    }

    render() {
        
         return (
             <div className='team'>
             <Parallax
                offsetYMin={'20%'} 
                offsetYMax={'-20%'} 
                slowerScrollRate>
             <div className='radial'></div>
             </Parallax>
                <div className='nd-creators'>
                    <div className='creators-top'>
                        <h1 className='animated fadeInUp'>NAS DAILY<span> CREATORS</span></h1>
                        <div className='description animated fadeInup delay-2s'>
                            <p>Nas Daily Creators are creative, authentic and real. From thousands of potential people, we assembled the best team of Facebook creators. We make videos about different topics, but our mission is the same.<span> Come work with us.</span></p>
                        </div>
                    </div>
                </div>
                <div className='profile-outer'>
                    <div className='creators-mid'>
                        { this.creators }
                    </div>
                        { this.loadMoreButton }
                </div>
                
                <div className='creators-lower'>
                    <p>We're building the world's best Facebook Creator Team.<br />
                    Wanna join? Drop us a note!</p>
                    <a href=''>creators<span>@nasdaily.com</span></a>
                </div>
            </div>
        )
    }
}