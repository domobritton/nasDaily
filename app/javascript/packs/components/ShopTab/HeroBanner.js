import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Line } from 'rc-progress'
import { Image } from 'cloudinary-react'

export const HeroBanner = ({ min, max, children, percent}) => (
    <div className="mobile-hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
          <div className='mobile-image-wrapper'>
              <div className='mobile-shop-upper-img' />
            <div className="mobile-image-text">
              <MobileImageText percent={percent} />
            </div>
          </div>
        </Parallax>
        <div className="mobile-hero-children">{children}</div>
    </div>
)

const MobileImageText = ({percent}) => (
  <div className="mobile-show-percent">
      <div className="mobile-percent-bar">
        <Line percent={percent}
          strokeWidth="7"
          trailWidth='0'
          strokeLinecap='square' strokeColor="#87B04E" />
      </div>
      {percent ? <p>{percent}% LIFE</p> : <p>0% LIFE</p>}
      {percent > 1 ? <p className='done-with-life animated fadeIn'>YOU ARE <span>{percent}%</span>DONE WITH LIFE</p> : ''}
      <div className="browse-button">
        <a className='browse' href={`http://shop.nasdaily.com/?percentage=${percent}`} target='_blank'>
        <img src='/assets/shopping_cart_icon.svg' />
          Browse Shop
        </a>
      </div>
      <a className='share' href='https://www.facebook.com/' target='_blank'><img src='/assets/facebook_color_icon.svg' />SHARE</a>
  </div>
)