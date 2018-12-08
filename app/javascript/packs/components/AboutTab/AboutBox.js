import React from 'react'
import { BoxCarousel } from './boxCarousel'

export const AboutBox = () => {
    return (
        <div className='nd-box'>
        <div className='topleft'><br /></div>
        <div className='topright'><br /></div>
            <h1>HI, I'M NAS</h1>
            <h2>I MAKE <span>VIDEOS</span></h2>
            <BoxCarousel />
            <div className='bottomleft'><br /></div>
            <div className='bottomright'><br /></div>
        </div>    
    )
}