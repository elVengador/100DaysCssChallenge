import React from 'react'

import './NotificationSearchAndMenu.css'
import { Frame } from '../../Frame/Frame'

const menuOptions = [
    {
        id: '100',
        title: 'Dashboard',
        iconClass: 'fa fa-tachometer'
    },
    {
        id: '101',
        title: 'Profile',
        iconClass: 'fa fa-user'
    },
    {
        id: '102',
        title: 'Notifications',
        iconClass: 'fa fa-bell'
    },
    {
        id: '103',
        title: 'Messages',
        iconClass: 'fa fa-comments'
    },
    {
        id: '104',
        title: 'Setting',
        iconClass: 'fa fa-cog'
    },
]

export const NotificationSearchAndMenu = () => {


    const DashboardIcon = ({ text, classIcon }) => <div className="menu--item">
        <i className={classIcon} aria-hidden="true"></i> {text}
    </div>

    return (
        <Frame style={{ background: '#2e465e ' }}>
            <div className='notification-wrapper'>
                <div className='menu'>
                    {
                        menuOptions.map(cur => <DashboardIcon text={cur.title} classIcon={cur.iconClass} key={cur.id} />)
                    }

                </div>
                <div className='notifications'>
                    <div className="notifications--header">
                        <div className="menu-icon">
                            <div className="menu-icon--top-line"></div>
                            <div className="menu-icon--bottom-line"></div>
                            <div className="menu-icon--dot"></div>
                        </div>
                        <h1 className='header-title'>Notifications</h1>
                        <div className="header-option">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="notifications--body">
                        <div className="notification">
                            <div className="notification--time">9:24 AM</div>
                            <p className='notification--content'><b>Jonh Walker</b>  posted a photo on your wall</p>
                        </div>
                        <div className="notification">
                            <div className="notification--time">9:24 AM</div>
                            <p className='notification--content'><b>Jonh Walker</b>  posted a photo on your wall</p>
                        </div>
                        <div className="notification">
                            <div className="notification--time">9:24 AM</div>
                            <p className='notification--content'><b>Jonh Walker</b> added you as friend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    )
}
