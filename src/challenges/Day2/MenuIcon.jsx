import React, { useState } from 'react'
import './MenuIcon.css'
// import styled, { keyframes } from 'styled-components'

export const MenuIcon = () => {

    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className='frame' style={{ background: '#3FAF82' }}>
            <div className='center' onClick={() => {
                console.log('set show menu')
                setShowMenu(showMenu => !showMenu)
            }}>
                <div className="control">
                    <div className={`bar top-bar ${showMenu ? 'menu' : 'close'}`}></div>
                    <div className={`bar middle-bar ${showMenu ? 'menu' : 'close'}`}></div>
                    <div className={`bar bottom-bar ${showMenu ? 'menu' : 'close'}`}></div>
                </div>
            </div>
        </div>
    )
}