import React, { Component } from 'react'
import { HeroBanner } from './HeroBanner'
import { ScrollButton } from './ScrollButton'
import { animateScroll as scroll } from 'react-scroll'
import VideoModal from './VideoModal'

export default class MobileShop extends Component {
    constructor(props) {
        super(props)

        this.scrollToTop = this.scrollToTop.bind(this)
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        const { form, percent } = this.props

        return (
            <div className='mobile-upper'>
                <div className='mobile-upper-info'>
                    <h1 className='animated fadeInup'><span>T</span> SHOP</h1>
                    <p className='animated fadeInup delay-2s'>Try our calculator below to <br />see how much of your life has passed!</p>
                    {form}
                </div>
                    <HeroBanner min={'0%'} max={'40%'} percent={percent}>
                    <div className="mobile-lower">
                        <div className="lower">
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
                        <VideoModal />
                        <ScrollButton scrollToTop={this.scrollToTop}/>
                    </div>
                </HeroBanner>
            </div>
        )
    }
}

