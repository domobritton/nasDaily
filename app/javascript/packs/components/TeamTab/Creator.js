import React from 'react'


const Creator = (props) => {
    return (
        <div key={person.id} className='profile-inner'>
            <div className='team-member'>
                <h1>Person Image</h1>
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
}

export default Creator