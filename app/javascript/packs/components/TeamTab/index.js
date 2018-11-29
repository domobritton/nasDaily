import React, { Component } from 'react'

export default class TeamTab extends Component {
    render() {
        return (
            <div>
                <div className='nd-creators'>
                    <div className='creators-top'>
                        <h1>NAS DAILY<span> CREATORS</span></h1>
                        <div className='description'>
                            <p>Nas Daily Creators are creative, authentic and real. From thousands of potential people, we assembled the best team of Facebook creators. We make videos about different topics, but our mission is the same.<span> Come work with us.</span></p>
                        </div>
                    </div>
                </div>
                <div className='profile-outer'>
                    <div className='profile-inner'>
                        <div className='team-member'>
                            <h1>Person Image</h1>
                            <div className='team-lower'>
                                <ul>
                                    <li className='profile-pic'><img src='https://via.placeholder.com/46' alt='' /></li>
                                    <li>Person name</li>
                                    <li>Subject</li>
                                    <li><i className="fab fa-facebook-square"></i>So many followers!</li>
                                </ul>
                                <div className='contact'>WORK WITH ME</div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-inner'>
                        <div className='team-member'>
                            <h1>Person Image</h1>
                            <div className='team-lower'>
                                <ul>
                                    <li className='profile-pic'><img src='https://via.placeholder.com/46' alt='' /></li>
                                    <li>Person name</li>
                                    <li>Subject</li>
                                    <li><i className="fab fa-facebook-square"></i>So many followers!</li>
                                </ul>
                                <div className='contact'>WORK WITH ME</div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-inner'>
                        <div className='team-member'>
                            <h1>Person Image</h1>
                            <div className='team-lower'>
                                <ul>
                                    <li className='profile-pic'><img src='https://via.placeholder.com/46' alt='' /></li>
                                    <li>Person name</li>
                                    <li>Subject</li>
                                    <li><i className="fab fa-facebook-square"></i>So many followers!</li>
                                </ul>
                                <div className='contact'>WORK WITH ME</div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-inner'>
                        <div className='team-member'>
                            <h1>Person Image</h1>
                            <div className='team-lower'>
                                <ul>
                                    <li className='profile-pic'><img src='https://via.placeholder.com/46' alt='' /></li>
                                    <li>Person name</li>
                                    <li>Subject</li>
                                    <li><i className="fab fa-facebook-square"></i>So many followers!</li>
                                </ul>
                                <div className='contact'>WORK WITH ME</div>
                            </div>
                        </div>
                    </div>
                    <div className='show-more'>
                        <div className='show-more-inner'>
                            SHOW MORE CREATORS
                            <div className="loader">
                                <span className="loader__dot"><i className="fas fa-circle"></i></span>
                                <span className="loader__dot"><i className="fas fa-circle"></i></span>
                                <span className="loader__dot"><i className="fas fa-circle"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}