import React from 'react'
import teamData from './teamData'
import { Image } from 'cloudinary-react'


export const Creators = ({start, end, width}) => {
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
                            <Image publicId={person.backgroundPic}
                                className='team-member-background' />
                            <div className='mobile-profile'>
                                <div className='mobile-profile-pic'>
                                    <Image publicId={person.profilePic} />
                                </div>
                                <p>{person.name}</p>
                            </div>
                            <div className='team-lower'>
                                <ul>
                                    <li className='profile-pic'>
                                        <Image publicId={person.profilePic} />
                                    </li>
                                    <li>{person.name}</li>
                                    <li>{person.project}</li>
                                    <li><i className="fab fa-facebook-square"></i>{`${person.followers} Followers`}</li>
                                </ul>
                                <div className='contact'><a href={person.link} target='_blank'>WORK WITH ME</a></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
