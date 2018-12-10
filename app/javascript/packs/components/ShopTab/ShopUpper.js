import React from 'react'
import { Image } from 'cloudinary-react'

export const ShopUpper = (props) => (
            <div className="nd-upper">
            <div className="upper-info">
              <h1>
                <span>T</span> SHOP
              </h1>
              <p>
                Try our calculator below to <br />see how much of your life has passed!
              </p>
              <div className="arrow-box">
                <div className="arrow-tail">
                  <hr />
                </div>
                <div className="arrow" />
              </div>
              {props.form}
            </div>
            <div className="image-wrapper">
              <div className="image-text">
                {props.imageText}
              </div>
              <Image publicId="Nas_Daily_Tshirt_qljlzo" className="nas-tshirt" />
            </div>
          </div>
)