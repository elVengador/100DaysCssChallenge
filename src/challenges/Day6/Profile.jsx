import React from 'react'

import './Profile.css'

import { Frame } from '../../Frame/Frame'

export const Profile = () => {
    const style = {
        backgroundImage: `linear-gradient(
            45deg,
            hsl(41deg 60% 56%) 0%,
            hsl(35deg 56% 50%) 50%,
            hsl(30deg 67% 44%) 100%
          )`
    }
    return (
        <Frame style={style}>
            <div className='profile'>
                <div className="profile--user">
                    <div className="user">
                        <div className="user--photo">
                            <img src='/jessica-potter.jpg' className=""></img>
                        </div>
                        <div className="user--name">Jessica Potter</div>
                        <div className="user--profession">Virtual Artist</div>
                    </div>
                    <div className="controls">
                        <button className="controls--button">Follow</button>
                        <button className="controls--button">Message</button>
                    </div>
                </div>
                <div className="profile--dashboard">
                    <div className="dashboard-item">
                        <span className="dashboard-item--value">523</span>
                        <h4 className="dashboard-item--title">Posts</h4>
                    </div>
                    <div className="dashboard-item">
                        <span className="dashboard-item--value">1387</span>
                        <h4 className="dashboard-item--title">Likes</h4>
                    </div>
                    <div className="dashboard-item">
                        <span className="dashboard-item--value">146</span>
                        <h4 className="dashboard-item--title">Follower</h4>
                    </div>
                </div>
            </div>
        </Frame>
    )
}
