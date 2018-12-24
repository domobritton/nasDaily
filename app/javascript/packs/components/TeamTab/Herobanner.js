import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const HeroBanner = ({ min, max, children }) => (
    <div className="hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <div className='image-wrapper'>
                <div className='background-creators-img' />
            </div>
        </Parallax>
        <div className="hero-children">{children}</div>
    </div>
);

export default HeroBanner
