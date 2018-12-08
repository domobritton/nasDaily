import React from 'react'
import TextCycle from 'react-text-cycle'


export const BoxCarousel = () => {
    const items = [`I'm Nuseir Yassin`, `Age 35% (26 years)`, `Palestinian-Israeli`, ``, `Harvard Graduate`, `Software Engineer`, `Founder of Nas Daily`]
    const duration = 3000 

    return (
        <div className='nd-carousel'>
        <div className='inner-car'>
            <TextCycle className='text' items={items} duration={duration} />
        </div>
        </div>
    )

}