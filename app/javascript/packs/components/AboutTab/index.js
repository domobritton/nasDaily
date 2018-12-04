import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'

// export default class AboutTab extends Component {
//     render() {
//         return (
//             <h1>The About Tab</h1>
//         )
//     }
// }

const HeroBanner = ({ image, min, max, children }) => (
    <div className="hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <div
                className="hero-image"
                style={{ backgroundImage: `url(${image})` }}
            />
        </Parallax>
        <div className="hero-children">{children}</div>
    </div>
);

const AboutTab = () => (
        <div className='main'>
            <HeroBanner
                min={'-20%'}
                max={'20%'}
                image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg"
            >
                <h1>Hero Banner with Parallax</h1>
            </HeroBanner>
        </div>
);

export default AboutTab