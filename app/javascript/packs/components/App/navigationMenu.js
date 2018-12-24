import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { MenuUnderline } from './menuUnderline'

export const NavigationMenu = () => {
    const { location: { pathname }} = window
    
          return (
          <div className='nd-navigation'>
            <Link
                to='/'
                className={ classnames('nd-navigation-item', {active: pathname === '/'}) }>
                About
            </Link>
            <Link
                to='/team'
                className={ classnames('nd-navigation-item', {active: pathname === '/team'}) }>
                Team
            </Link>
            <Link
                to='/videos'
                className={ classnames('nd-navigation-item', {active: pathname === '/videos'}) }>
                Videos
            </Link>
            <Link
                to='/shop'
                className={ classnames('nd-navigation-item', {active: pathname === '/shop'}) }>
                Store
            </Link>
            <Link
                to='/agency'
                className={ classnames('nd-navigation-item', {active: pathname === '/agency'}) }>
                Agency
            </Link>
            <MenuUnderline />
        </div>
    )
}
