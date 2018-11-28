import React, { Component } from 'react'

export default class TeamTab extends Component {
    render() {
        return (
            <div>
            <div className='nd-creators'>
                <h1>NAS DAILY<span> CREATORS</span></h1>
                <div className='description'>
                    <p>Nas Daily Creators are creative, authentic and real. From thousands of potential people, we assembled the best team of Facebook creators. We make videos about different topics, but our mission is the same.<span> Come work with us.</span></p>
                </div>
            </div>
            <div className='profile-outer'>
                <div className='profile-inner'>
                    <div className='team-member'>
                        <h1>Person Image</h1>
                        <div className='team-lower'>
                            <ul>
                                <li>Person Image</li>
                                <li>Person name</li>
                                <li>Subject</li>
                                <li><i className="fab fa-facebook-square"></i>So many followers!</li>
                            </ul>
                            <div className='contact'>WORK WITH ME</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}