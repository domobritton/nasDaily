import React from 'react'
import VideoModal from './VideoModal'


export const ShopLower = () => (
      <div className="nd-lower">
        <div className="nd-inner">
          <div className="works-circle">
            <p>HOW THIS WORKS?</p>
            <div className="down-arrow">&#8595;</div>
          </div>
        </div>
        <div className="inner-flex">
          <div className="lower-left">
            <div className='left-wrapper'>
              <h2>WHAT THIS MEANS:</h2>
              <div className="description">
                <p>
                  Nas Daily wears the same t-shirt every day. The
                  t-shirt shows how much of his life is over based on
                  his current age. It helps him realize that life is
                  finite and we should use time wisely.
                </p>
              </div>
            </div>
          </div>
          <VideoModal />
        </div>
      </div>
)

