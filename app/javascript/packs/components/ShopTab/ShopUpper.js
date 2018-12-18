import React from 'react'
import { Image } from 'cloudinary-react'
import { Line } from 'rc-progress'

export const ShopUpper = ({ form, percent}) => (
      <div className="nd-upper">
        <div className="upper-info">
          <h1 className='animated fadeInup'><span>T</span> SHOP</h1>
          <p className='animated fadeInup delay-2s'>Try our calculator below to <br />see how much of your life has passed!</p>
          <div className="arrow-box">
            <div className="arrow-tail">
              <hr />
            </div>
            <div className="arrow" />
          </div>
          {form}
        </div>
        <div className="image-wrapper">
          <div className="image-text">
            <ImageText percent={percent} />
          </div>
          <Image publicId="Nas_Daily_Tshirt_qljlzo" className="nas-tshirt" />
        </div>
      </div>

)

const ImageText = ({percent}) => (
  <div className="show-percent">
      <div className="percent-bar">
        <Line percent={percent}
          strokeWidth="7"
          trailWidth='0'
          strokeLinecap='square' strokeColor="#87B04E" />
      </div>
      {percent ? <p>{percent}% LIFE</p> : <p>0% LIFE</p>}
      <div className="browse-button">
        <a className='browse' href={`http://shop.nasdaily.com/?percentage=${percent}`} target='_blank'>
        <img src='/assets/shopping_cart_icon.svg' />
          Browse Shop
        </a>
      </div>
  </div>
)