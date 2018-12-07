import React from 'react'
import teamData from './teamData'


const Creators = ({start, end}) => {
    let chunks = []
    for (let i = start; i < end; i++) {
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

export default Creators