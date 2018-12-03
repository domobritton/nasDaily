import React, { Component } from 'react'
import teamData from './teamData'

export default class Team extends Component {
    constructor() {
        super()
        this.state = {
            maxCreators: 4
        }
    }

    get creators() {
        debugger
        const { maxCreators } = this.state 
        let chunks = []
        for (let i = 0; i < maxCreators; i++) {
            chunks.push(teamData[i])
        }

        return (
            <div>
                {chunks.map(person => {
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
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.creators}
            </div>
        )
    }
}


// const Team = () => {
//     debugger;
//        const person = teamData.map(person => {
//             return (
//                 <div key={person.id} className='profile-inner'>
//                     <div className='team-member'>
//                         <h1>Person Image</h1>
//                         <div className='team-lower'>
//                         <ul>
//                             <li className='profile-pic'><img src='https://via.placeholder.com/46' alt='' /></li>
//                             <li>{person.name}</li>
//                             <li>{person.project}</li>
//                             <li><i className="fab fa-facebook-square"></i>{`${person.followers} Followers`}</li>
//                         </ul>
//                         <div className='contact'>WORK WITH ME</div>
//                         </div>
//                     </div>
//                 </div>
//             )
//         })
//         return (
//             <div>
//                 { person }
//             </div>
//         )
// }

// export default Team 
