import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Image } from 'cloudinary-react'

const HeroBanner = ({ min, max, children }) => (
    <div className="hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <Image 
                publicId='Creators_bg_kjmggt'
                className='background-creators-img' /> 
        </Parallax>
        <div className="hero-children">{children}</div>
    </div>
);

export default HeroBanner
