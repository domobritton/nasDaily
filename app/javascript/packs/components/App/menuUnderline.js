import React from 'react'

export const MenuUnderline = () => {
    const { location: { pathname }} = window 

    switch (pathname) {
        case '/':
        return <hr className='one'></hr>
        case '/team':
        return <hr className='two'></hr>
        case '/videos':
        return <hr className='three'></hr>
        case '/shop':
        return <hr className='four'></hr>
        case '/agency':
        return <hr className='five'></hr>
        default:
        return <hr className='one'></hr>
    }
}